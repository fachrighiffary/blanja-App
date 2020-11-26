import React, { Component } from 'react';
import Carousell from '../../components/body/Carousell';
import Category from '../../components/body/Category';
import New from '../../components/body/New';
import Popular from '../../components/body/Popular';
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