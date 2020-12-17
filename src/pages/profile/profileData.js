import React, { Component } from 'react'
import { Col, Form,Row } from 'react-bootstrap'

class ProfileData extends Component {
    render() {
        return (
            <div className="container p-5">
              <div className="field-profile">
                  <div className="p-4">
                    <h2 className="">My Profile</h2>
                    <p className="text-muted">Manage your profile information</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7 ml-4">
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="name" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Phone Number
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="number" placeholder="Phone Number" />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                    </div>
                    <div className="col-md-3">

                    </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default ProfileData
