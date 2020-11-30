import React, { Component } from 'react';
import Carousell from '../../components/body/carousell';
import Category from '../../components/body/category';
import Product from '../../components/body/product/index.js';
import Navbar from '../../components/navbar';



class Home extends Component {
    render() {
        const {match, location, history} = this.props;
        console.log(match, location, history)
        return(
            <>
                <Navbar />
                <Carousell />
                <Category />
                <Product title='New' url="" />
                <Product title='Popular' url="popular"/>
            </>
        )
    }
}


export default Home;