import Axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './myproduct.css'

const baseUrl = 'http://localhost:8000/products'

class AddProduct extends Component {

    state={
        category_id:'',
        store_id:'',
        product_name:'',
        product_price:'',
        product_qty:'',
        product_rating:'',
        product_img:'none',
        product_desc:'',
        product_color:'',
        product_condition:''
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }
    handlerSubmit = async (event) => {
        event.preventDefault()
        await Axios.post(baseUrl, this.state)
        console.log(this.state)
        //alert('Data Berhasil ditambahkan')
        this.props.history.push('/profile/myproduct')
    }



    render() {
        const {match, location, history } = this.props
        console.log(match, location, history)
        console.log(this.state)
        return (
            <div className="container p-5">
                <div className="container bckgr">
                    <h2>Tambah product baru</h2>
                    <form className="col-lg-6" onSubmit={this.handlerSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name product</Form.Label>
                        <Form.Control  type="text" name="product_name" placeholder="Name product" onChange={this.handlerChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text"  name="category_id" placeholder="Category" onChange={this.handlerChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Store</Form.Label>
                        <Form.Control type="number"  name="store_id" placeholder="Store"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" name="product_price" placeholder="Product Price"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Rating</Form.Label>
                        <Form.Control type="number" name="product_rating" placeholder="Product Rating"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" name="product_desc" placeholder="Product Description"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Size</Form.Label>
                        <Form.Control type="text" name="product_size" placeholder="Product Size"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Color</Form.Label>
                        <Form.Control type="text" name="product_color" placeholder="Product Color"  onChange={this.handlerChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="text" name="product_qty" placeholder="Product Quantity"  onChange={this.handlerChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Condition</Form.Label>
                        <Form.Control type="text" name="product_condition" placeholder="Product Condition"  onChange={this.handlerChange}  />
                    </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddProduct
