import React, { Component } from 'react'
import { Container, Form, Image, Button } from 'react-bootstrap'
import { Logo } from '../../assets';
import "../login/login.css"
import axios from 'axios'

class Reset extends Component {

    constructor(){
        super();
        this.state = {
            email : '',
        }
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        await axios.post(process.env.REACT_APP_BASEURL + '/auth/forgot-password', this.state)
        .then((res) => {
            console.log(res)
            localStorage.setItem("email_user", this.state.email)
            this.props.history.push('/GetOtp')

        })
        .catch((err) => {
            console.log(err)
        })
    }

        
    render() {
        console.log(this.state)
        return (
            <Container className="auth">
            <div className="form-header">
                <div className="img-container">
                <Image src={Logo}  alt="Logo" />
                </div>
                <p className="info">Reset password</p>
                <Form className="form-section" onSubmit={this.handleSubmit} >
                    <div className="form-main">
                        <input type="email" placeholder="Input your email" name="email" onChange={this.handlerChange} required />
                    </div>
                    <Button className="submit"  type="submit">
                        Send Otp Code
                    </Button>
                </Form>
                <p className="register">Don't have a Tokopedia account? <a href="register">Register</a></p>
            </div>
        </Container>
        )
    }
}


export default Reset;