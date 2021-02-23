import React, { Component } from 'react'
import { Container, Form, Image, Button } from 'react-bootstrap'
import { Logo } from '../../assets';
import "../login/login.css"
import axios from 'axios'

class GetOtp extends Component {
    
    constructor(){
        super();
        this.state = {
            otp : '',
            errMsg :''
        }
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }
    handleSubmit = async(event) => {
        event.preventDefault()
        const email = localStorage.getItem("email_user")
        const otp = this.state.otp
        await axios.get(`${process.env.REACT_APP_BASEURL}/auth/check-otp/${email}/${otp}`)
        .then((res) => {
            console.log(res)
            this.props.history.push('/confirm', email)
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                errMsg: 'Otp Invalid'
            })
        })
    }

        
    render() {
        //console.log('ini email saya',this.props.location.state)
        const {errMsg} = this.state
        return (
            <Container className="auth">
            <div className="form-header">
                <div className="img-container">
                <Image src={Logo}  alt="Logo" />
                </div>
                <p className="info">Input Otp code</p>
                <Form className="form-section" onSubmit={this.handleSubmit}>
                    <div className="form-main">
                        <input type="name" placeholder="Input your otp code" name="otp" onChange={this.handlerChange} required />
                    </div>
                    <p style={{color: 'red', marginTop: 20}}>{errMsg}</p>
                    <Button className="submit"  type="submit">
                        Submit
                    </Button>
                </Form>
                <p className="register">Don't have a Tokopedia account? <a href="register">Register</a></p>
            </div>
        </Container>
        )
    }
}


export default GetOtp;