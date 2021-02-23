import React, { Component } from 'react'
import { Container, Form, Image, Button } from 'react-bootstrap'
import { Logo } from '../../assets';
import "../login/login.css"
import axios from 'axios'


const baseUrl = "http://localhost:8000/auth/register"

class Register extends Component {
    state = {
        username: '',
        email :'',
        phone_number: '',
        store_name: '',
        password: '',
        level_id : '',
        backgroundCus: 'white',
        txtCus: 'black',
        backgroundSel: 'white',
        txtSel: 'black'
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handlerSubmit = async(event) => {
        event.preventDefault()
        const data = {
            username     : this.state.username,    
            email        : this.state.email,
            phone_number : this.state.phone_number,
            store_name   : this.state.store_name,
            password     : this.state.password,
            level_id     : this.state.level_id,
        }
        await axios.post(process.env.REACT_APP_BASEURL + '/auth/register', data)
        .then((res) => {
            console.log(res)
            this.props.history.push('/activation', data.email)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const {backgroundCus, txtCus, backgroundSel, txtSel, level_id} = this.state
        return (
            <div>
                 <Container className="auth">
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <p className="info">Please sign up with your account</p>
                    <div className="button-group">
                        <button 
                        className="button button-full" 
                        style={{backgroundColor: backgroundCus, color: txtCus}}
                        onClick={() => {
                            this.setState({
                                backgroundCus: '#DB3022',
                                txtCus: 'white',
                                backgroundSel: 'white',
                                txtSel: 'black',
                                level_id: 2
                            })
                        }}
                        >Customer</button>
                        <button 
                        className="button button-shadow"  
                        style={{backgroundColor: backgroundSel, color: txtSel}}
                        onClick={() => {
                            this.setState({
                                backgroundCus: 'white',
                                txtCus: 'black',
                                backgroundSel: '#DB3022',
                                txtSel: 'white',
                                level_id: 1
                            })
                        }}
                        >Seller</button>
                    </div>
                    <form className="form-section" onSubmit={this.handlerSubmit}>
                        <div className="form-main">
                            <input type="name" placeholder="Name" name="username"  onChange={this.handlerChange} required />
                        </div>
                        <div className="form-main">
                            <input type="email" placeholder="Email" name="email"  onChange={this.handlerChange} required />
                        </div>
                        <div className="form-main">
                            <input type="name" placeholder="phone_number" name="phone_number"  onChange={this.handlerChange} required />
                        </div>
                        {level_id === 1 ? (
                        <div className="form-main">
                            <input type="name" placeholder="store_name" name="store_name"  onChange={this.handlerChange} required />
                        </div>
                        ) : (<> </>)}
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="password"  onChange={this.handlerChange} required />
                        </div>
                        <Button className="submit"  type="submit">
                            Register
                        </Button>
                    </form>
                    <p className="register">Already have a Blanja account? <a href="login">Login</a></p>
                </div>
            </Container>
            </div>
        )
    }
}


export default Register;