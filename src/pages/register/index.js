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
        level_id: 1,
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handlerSubmit = async(event) => {
        event.preventDefault()
        await axios.post(baseUrl, this.state)
        .then((res) => {
            console.log(res)
            this.props.history.push('/login')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        //console.log(this.state)
        return (
            <div>
                 <Container className="auth">
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <p className="info">Please sign up with your account</p>
                    <div className="button-group">
                        <a href=" " className="button button-full">Customer</a>
                        <a href=" " className="button button-shadow">Seller</a>
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
                        <div className="form-main">
                            <input type="name" placeholder="store_name" name="store_name"  onChange={this.handlerChange} required />
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="password"  onChange={this.handlerChange} required />
                        </div>
                        <Button className="submit"  type="submit">
                            Register
                        </Button>
                    </form>
                    <p className="register">Already have a Tokopedia account? <a href="login">Login</a></p>
                </div>
            </Container>
            </div>
        )
    }
}


export default Register;