import React, { Component } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Logo } from '../../assets';
import "./login.css";
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';


const baseUrl = 'http://localhost:8000/auth/login'

class Login extends Component {

    state={
        email: '',
        password: '',
        isLogin: false,
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handlerSubmit = (event) => {
        const { dispatch, auth } = this.props;
        event.preventDefault()
        axios.post(baseUrl, this.state)
        .then((res) => {
            localStorage.setItem("user_id", res.data.data.id)
            localStorage.setItem("username", res.data.data.username)
            localStorage.setItem("level", res.data.data.level)
            localStorage.setItem("token", res.data.data.token)
            res.headers["x-access-token"] = res.data.data.token;
            localStorage.setItem("isLogin",true)
            dispatch({type: 'LOGIN'})
            console.log(res.headers)
            console.log(localStorage)
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { auth } = this.props;
        return (
            <Container className="auth">
                 {auth.isLogin && <Redirect to="/" />}
                <div className="form-header">
                    <div className="img-container d-flex justify-content-center">
                        <Image src={Logo} alt="Logo" />
                        <p className="txt ml-4">Blanja</p>
                    </div>
                    <p className="info">Please login with your account</p>
                    <div className="button-group">
                        <Link className="button button-full">Customer</Link>
                        <Link className="button button-shadow">Seller</Link>
                    </div>
                    <form className="form-section" onSubmit={this.handlerSubmit}>
                        <div className="form-main">
                            <input type="email" placeholder="Email" name="email"  onChange={this.handlerChange} required/>
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="password"  onChange={this.handlerChange} required/>
                        </div>
                        <a className="forgot" href="reset">Forgot password?</a><br></br>
                        <Button className="submit" type="submit">
                            LOGIN
                        </Button>
                    </form>
                    <p className="register">Don't have a Tokopedia account? <a href="register">Register</a></p>
                </div>
        </Container>
        )
    }
}



const mapStateToProps = ({ auth }) => {
    return {
      auth,
    };
  };
  
  export default connect(mapStateToProps)(Login);