import React, { Component } from 'react'
import { Jazz, Star } from '../../../assets'
import './new.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


const getUrl = 'http://localhost:8000/products';


class New extends Component {
    state = {
        products: {},
    };

    getAllProducts = () => {
        axios
        .get(getUrl)
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
        //console.log(products)
        const {match, location, history} = this.props
        console.log(match, location, history)
        return (
            <div className="container cntainer">
                <h1>New</h1>
                <small className="text-muted">You’ve never seen it before!</small>
                <div className="row d-flex justify-content-start">
                    {products.data && products.data.map(
                        ({product_name, product_price, store_name, product_desc, id} ) => {
                            return(

                                    <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-3 col-12 shadow bg-white" id="cards" key={id}>
                                        <div id="header">
                                            <img src={Jazz} className="card-img-top" id="card-img" alt="" />
                                        </div>
                                        <Link className="card-btn" onClick={()=> {alert(id)}} to={{pathname: "/" + id}} >
                                            <div className="card-body pl-2 pr-2 card-bdy">
                                                <p className="card-text merk" >{product_name}</p>
                                                <p className="card-text price">Rp. {product_price} </p>
                                                <p className="card-text brand text-muted">{store_name}</p>
                                                <div className="d-flex">
                                                    <div className="rate">
                                                        <img src={Star} alt="" />
                                                        <img src={Star} alt="" />
                                                        <img src={Star} alt="" />
                                                        <img src={Star} alt="" />
                                                        <img src={Star} alt="" />
                                                    </div>
                                                    <p className="text-muted rate-num" >(10)</p>
                                                </div>
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


export default New