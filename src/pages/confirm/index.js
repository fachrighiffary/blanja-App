import React, { Component } from 'react'
import { Container, Form, Image, Button } from 'react-bootstrap'
import { Logo } from '../../assets';
import "../login/login.css"
import axios from 'axios'

class Confirm extends Component {

    constructor(){
        super();
        this.state = {
            password : '',
            newPassword: '',
            errMsg: ''
        }
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleSubmit = async(event) => {
        if(this.state.password !== this.state.newPassword){
            this.setState({
                errMsg: 'Password harus sama'
            })
        }else{
            const data = {
                email : localStorage.getItem("email_user"),
                newPassword : this.state.newPassword
            }
            event.preventDefault();
            await axios.patch(process.env.REACT_APP_BASEURL + '/auth/reset-password', data)
            .then((res) => {
                console.log(res)
                this.props.history.push('/login')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    render() {
        const {errMsg} = this.state
        console.log(this.state)
        return (
            <Container className="auth">
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Logo}  alt="Logo" />
                    </div>
                    <p className="info">Please login with your account</p>
                    <p className="confirm">You need to change your password to activate your account</p>
                    <Form className="form-section" onSubmit={this.handleSubmit}>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="password" onChange={this.handlerChange} required />
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Confirm New Password" name="newPassword" onChange={this.handlerChange} required />
                        </div>
                        <p style={{color: 'red', marginTop: 20}}>{errMsg}</p>
                        <Button className="submit"  type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="register">Don't have a Tokopedia account? <a href="signup">Register</a></p>
                </div>
            </Container>
        )
    }
}


export default Confirm;