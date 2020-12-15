import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DetailProduct from '../../components/body/detailProduct';
import Product from '../../components/body/product';
import Navbar from '../../components/navbar'


const getURL = 'http://localhost:8000/product/'

class Detail extends Component {
    state = {
        product : []
    }

    getProduct = () => {
        const {match} = this.props
        Axios
        .get(getURL + match.params.id )
        .then(({data}) => {
            this.setState({
                product: data
            })
        })
        .catch((err) => {
            const errMsg = {
                msg: "Data Not Found",
                err
            }
            console.log(errMsg)
            
        })
    }

    componentDidMount = () => {
        this.getProduct();
    } 

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state.product){
            this.getProduct()
        }
   }
    

    render() {
        console.log(this.state.product)
        const {product} = this.state
        // console.log('idnya adalah', this.state.id)
        return (
            <>
                <Navbar/>
                <div className="container">
                    <div className="d-flex" >
                        <Link className="card-btn" to={"/"}>
                            <p className="mr-2">Home</p>
                        </Link>
                        <p className="mr-2"> {">"} </p>
                        <Link className="card-btn">
                            <p className="mr-2">Detail</p>
                        </Link>
                    </div>
                    {product.data && product.data.map(({product_name, product_img, product_desc, product_condition,total_rating , product_price, product_qty, product_size, store_name}, index) => {
                        return <DetailProduct 
                        product_name={product_name}
                        product_img={product_img}
                        product_desc={product_desc}
                        product_price={product_price}
                        product_qty={product_qty}
                        product_size={product_size}
                        store_name={store_name}
                        product_condition={product_condition}
                        total_rating={total_rating}
                        key={index}
                        />
                    })}
                </div>
                <Product  title='Popular' url="?new=desc"/>
                <div className="mt-5"></div>
            </>
        )
    }
}


export default Detail;