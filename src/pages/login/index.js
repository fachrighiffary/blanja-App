import React, { Component } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Logo } from '../../assets';
import "./login.css";
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import {setLoginTrue} from '../../redux/actionCreators/Auth'


const baseUrl = process.env.REACT_APP_BASEURL + '/auth/login'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            isLogin: false,
            level_id : '',
            backgroundCus: 'white',
            txtCus: 'black',
            backgroundSel: 'white',
            txtSel: 'black',
            errMsg: ''
        }
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handlerSubmit = (event) => {
        const { dispatch, auth } = this.props;
        event.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password,
            level_id : this.state.level_id
        }
        if(data.level_id ===  ''){
            this.setState({
                errMsg: 'Pilih Role terlebih dahulu'
            })
        }else{
            axios.post( process.env.REACT_APP_BASEURL + '/auth/login' , data)
            .then((res) => {
                console.log(res)
                localStorage.setItem("user_id", res.data.data.id)
                localStorage.setItem("email", res.data.data.email)
                localStorage.setItem("username", res.data.data.username)
                localStorage.setItem("level_id", res.data.data.level)
                localStorage.setItem("token", res.data.data.token)
                localStorage.setItem("isLogin", true)
                const dataLogin = {
                    email       : res.data.data.email,
                    name        : res.data.data.username,
                    level       : res.data.data.level,
                    id          : res.data.data.id,
                    store_name  : res.data.data.token,
                    token       : res.data.data.token
                }
                this.props.dispatch(setLoginTrue(dataLogin))
                console.log(res.headers)
                console.log(localStorage)
            })
            .catch((err) => {
                console.log(err)
                this.setState({ 
                    errMsg: 'Password Salah'
                })
            })
        }

    }

    render() {
        const { auth } = this.props;
        const {backgroundCus, txtCus, backgroundSel, txtSel, level_id, errMsg} = this.state
        return (
            <Container className="auth">
                 {auth.isLogin  && <Redirect to="/" />}
                <div className="form-header">
                    <div className="img-container d-flex justify-content-center">
                        <Image src={Logo} alt="Logo" />
                        <p className="txt ml-4">Blanja</p>
                    </div>
                    <p className="info">Please login with your account</p>
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
                            <input type="email" placeholder="Email" name="email"  onChange={this.handlerChange} required/>
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="password"  onChange={this.handlerChange} required/>
                        </div>
                        <p style={{color: 'red', marginTop: 20}}>{errMsg}</p>
                        <a className="forgot" href="reset">Forgot password?</a><br></br>
                        <button className="submit" type="submit" >
                            LOGIN
                        </button>
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