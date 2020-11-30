import React, { Component } from 'react'
import { Star } from '../../../assets'

export default class Rating extends Component {

    

    render() {
        
        const {product_rating} = this.props
        // console.log(product_rating)
        let a = '';
        for(let i = 0; i< product_rating; i++){
            a += i
        }
        let lop = a.split('')
        
        return (
            <div className="d-flex">
                <div className="rate">
                    {/* <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />*/}
                    {lop.map((data) => {
                        return <img src={Star} alt="" />
                    })}
                </div>
                <p className="text-muted rate-num" >({product_rating})</p>
            </div>
        )
    }
}
