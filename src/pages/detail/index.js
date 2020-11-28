import React, { Component } from 'react'
import DetailProduct from '../../components/body/detailProduct';
import Navbar from '../../components/navbar'


class Detail extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <h1>Ini adalah halaman detail</h1>
                <DetailProduct />
            </>
        )
    }
}


export default Detail;