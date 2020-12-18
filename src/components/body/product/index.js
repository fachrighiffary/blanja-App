import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProductsCreator } from '../../../redux/actionCreators/Products';
import Rating from '../../moleculs/rating';
import './new.css';




class Product extends Component {
    
    url = this.props.url
    getAllProductsDispatch = (url) => {
        this.props.dispatch(getAllProductsCreator(url));
    }

    componentDidMount = () => {
        this.getAllProductsDispatch();
    }


    render() {
        const {products} = this.props;
        console.log(this.props.url)
        return (
            <div className="container cntainer">
                <h1>{this.props.title}</h1>
                <small className="text-muted">{this.props.caption}</small>
                <div className="row d-flex justify-content-start">
                    {products.isFulfilled && products.productsData.data.products.map(
                        ({product_name, product_img, product_price, store_name, total_rating, id} ) => {
                            //console.log(product_img.split(',')[0])
                            return(
                                    <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-3 col-12 shadow bg-white " id="cards" key={id}>
                                        <div id="header">
                                            <img src={'http://localhost:8000' + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
                                        </div>
                                        <Link className="card-btn" to={{pathname: "/detail/" + id}}  >
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

const mapStateToProps = (({products}) => {
    return{
        products
    }
})
export default connect(mapStateToProps)(Product)