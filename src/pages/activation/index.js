import React, {Component} from 'react'
import { Container, Form, Image, Button } from 'react-bootstrap'
import { Logo } from '../../assets';
import "../login/login.css"
import axios from 'axios'

class Activation extends Component{

    constructor(){
        super();
        this.state = {
            otp : ''
        }
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }
    handleSubmit = async(event) => {
        event.preventDefault()
        const otp = this.state.otp
        const email = this.props.location.state
        await axios.get(`${process.env.REACT_APP_BASEURL}/auth/activate/${email}/${otp}`)
        .then((res) => {
            console.log(res)
            this.props.history.push('/login')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        // console.log(this.props.location.state)
        // console.log(this.state)
        return(
            <Container className="auth">
            <div className="form-header">
                <div className="img-container">
                <Image src={Logo}  alt="Logo" />
                </div>
                <p className="info">Activation </p>
                <Form className="form-section" onSubmit={this.handleSubmit}>
                    <div className="form-main">
                        <input type="name" placeholder="Otp code" name="otp" onChange={this.handlerChange} required />
                    </div>
                    <Button className="submit"  type="submit">
                        Activate
                    </Button>
                    
                </Form>
                <p className="register"><a href="">Resend Otp</a></p>
                <p className="register">Don't have a Tokopedia account? <a href="register">Register</a></p>
            </div>
        </Container>
        )
    }
}

export default Activation
