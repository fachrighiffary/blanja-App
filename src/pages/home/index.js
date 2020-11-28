import React, { Component } from 'react';
import Carousell from '../../components/body/carousell';
import Category from '../../components/body/category';
import New from '../../components/body/new/index.js';
import Popular from '../../components/body/populer';
import Navbar from '../../components/navbar';



class Home extends Component {
    render() {
        return(
            <>
                <Navbar />
                <Carousell />
                <Category />
                <New />
                <Popular />
            </>
        )
    }
}


export default Home;