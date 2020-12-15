import React, { Component } from 'react'
import './new.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Rating from '../../moleculs/rating';


const getUrl = 'http://localhost:8000/products';


class Product extends Component {
    state = {
        products: {},
    };

    getAllProducts = async() => {
        const url = this.props.url
        await axios.get(getUrl + url )
        .then(({data}) => {
            this.setState({
                products: data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getAllProducts();
    }
    render() {
        const {products} = this.state;
        console.log(products)
        const {match, location, history } = this.props
        console.log(match, location, history)
        return (
            <div className="container cntainer">
                <h1>{this.props.title}</h1>
                <small className="text-muted">{this.props.caption}</small>
                <div className="row d-flex justify-content-start">
                    {products.data && products.data.products.map(
                        ({product_name, product_img, product_price, store_name, total_rating, id} ) => {
                            console.log(product_img.split(',')[0])
                            return(
                                    <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-3 col-12 shadow bg-white " id="cards" key={id}>
                                        <div id="header">
                                            <img src={'http://localhost:8000' + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
                                        </div>
                                        <Link className="card-btn" to={{pathname: "/detail/" + id}} >
                                            <div className="card-body pl-2 pr-2 card-bdy">
                                                <p className="card-text merk" >{product_name}</p>
                                                <p className="card-text price">Rp. {product_price} </p>
                                                <p className="card-text brand text-muted">{store_name}</p>
                                                <Rating total_rating={Math.round(total_rating)}/>
                                            </div>
                                        </Link>
                                    </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}


export default Product