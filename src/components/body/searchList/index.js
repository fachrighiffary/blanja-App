import Axios from 'axios'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../moleculs/rating'
import './new.css'
const SearchList = ({match, history, location}) =>  {
    const [products, setProducts] = useState([])
    console.log(match, history, location)
    console.log('ini ada di search list',typeof match.match.url.split('/')[2])
    useEffect(() => {
        getSearch()
    }, [match.match.url])
    
    const getSearch = () => {
        const qs =  match.match.url.split('/')[2]
        Axios.get(process.env.REACT_APP_BASEURL + '/search/' + qs)
        .then((res) => {
            console.log('ini adalah hasil dari pencarian', res.data.data)
            setProducts(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="container cntainer">
                <div className="row d-flex justify-content-start">
                    {products && products.map(
                        ({product_name, product_img, product_price, store_name, total_rating, id} ) => {
                            //console.log(product_img.split(',')[0])
                            return(
                                    <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-3 col-12 shadow bg-white " id="cards" key={id}>
                                        <div id="header">
                                            <img src={process.env.REACT_APP_BASEURL + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
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

export default SearchList
// src={'http://localhost:8000' + product_img.split(',')[0]} 