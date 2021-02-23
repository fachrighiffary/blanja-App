import Axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './myproduct.css'

const baseUrl = 'http://localhost:8000/products'

class AddProduct extends Component {

    // state={
    //     category_id:'',
    //     store_id:'',
    //     product_name:'',
    //     product_price:'',
    //     product_qty:'',
    //     product_rating:'',
    //     product_img:'none',
    //     product_desc:'',
    //     product_color:'',
    //     product_condition:''
    // }
    // handlerChange = (e) => {
    //     this.setState({ [e.target.name] : e.target.value})
    // }
    // handlerSubmit = async (event) => {
    //     event.preventDefault()
    //     await Axios.post(baseUrl, this.state)
    //     console.log(this.state)
    //     //alert('Data Berhasil ditambahkan')
    //     this.props.history.push('/profile/myproduct')
    // }

    state = {
        product_img:[]
    }

    handlerFile = (e) => {
        this.setState({
            product_img : e.target.files
        })
    }

    handleupload = (e) => {
        let x = new FormData()
        x.append("user_id", localStorage.getItem('user_id'))
        x.append("product_name", this.product_name)
        x.append("category_id", this.category_id)
        x.append("product_qty", this.product_qty)
        x.append("product_price", this.product_price)
        for(let i = 0; i < this.state.product_img.length; i++){
            x.append("product_img", this.state.product_img[i])
        }
        x.append("product_desc", this.product_desc)
        x.append("product_size", this.product_size)
        x.append("product_color", this.product_color)
        x.append("product_condition", this.product_condition)
        for(var pair of x.entries()){
            console.log(pair[0] + ', ' + pair[1])
        }
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'multipart/form-data', 'x-access-token': 'Bearer '+ localStorage.getItem("token")
            }
        }
        const level = {
            level : localStorage.getItem("level")
        }
        Axios.post(baseUrl, x, config, level)
        .then(({data}) => {
            console.log(data)
            this.props.history.push('/profile/myproduct')

        })
        .catch((err) => {
            console.log(err)
        })

    }

    render() {
        const {match, location, history } = this.props
        console.log(match, location, history)
        console.log(this.state)
        return (
            <div className="container p-5">
                <div className="container bckgr">
                    <h2>Tambah product baru</h2>
                    <form className="col-lg-6" onSubmit={this.handleupload}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name product</Form.Label>
                        <Form.Control  type="text" name="product_name" placeholder="Name product" onChange={(e) => {this.product_name = e.target.value}} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text"  name="category_id" placeholder="Category" onChange={(e) => {this.category_id = e.target.value}} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" name="product_price" placeholder="Product Price"  onChange={(e) => {this.product_price = e.target.value}}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" name="product_desc" placeholder="Product Description" onChange={(e) => {this.product_desc = e.target.value}}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Size</Form.Label>
                        <Form.Control type="text" name="product_size" placeholder="Product Size"  onChange={(e) => {this.product_size = e.target.value}}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Color</Form.Label>
                        <Form.Control type="text" name="product_color" placeholder="Product Color"  onChange={(e) => {this.product_color = e.target.value}} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="text" name="product_qty" placeholder="Product Quantity"  onChange={(e) => {this.product_qty = e.target.value}} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Condition</Form.Label>
                        <Form.Control type="text" name="product_condition" placeholder="Product Condition" onChange={(e) => {this.product_condition = e.target.value}} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product image</Form.Label>
                        <Form.Control type="file" name="product_img" placeholder="Product Quantity"  onChange={(e) => {this.handlerFile(e)}} multiple />
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
