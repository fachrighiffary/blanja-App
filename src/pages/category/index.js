import React, { Component } from 'react'
import ProductCategory from '../../components/body/productCategory'
import Navbar from '../../components/navbar'

export class Category extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ProductCategory match title='Category'/>
            </>
        )
    }
}

export default Category
