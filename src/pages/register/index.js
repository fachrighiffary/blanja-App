import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Logo } from '../../assets';
import "../login/login.css"

class Register extends Component {
    render() {
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
                    <Form className="form-section">
                        <div className="form-main">
                            <input type="name" placeholder="Name" name="uname" required />
                        </div>
                        <div className="form-main">
                            <input type="email" placeholder="Email" name="uname" required />
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="psw" required />
                        </div>
                    </Form>
                    <a className="submit" href="/" type="submit">PRIMARY</a>
                    <p className="register">Already have a Tokopedia account? <a href="login">Login</a></p>
                </div>
            </Container>
            </div>
        )
    }
}


export default Register;