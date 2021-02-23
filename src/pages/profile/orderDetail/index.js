import Axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const OrderDetail = (props) => {
    const [detailAddress, setDetailAddress] = useState([])
    useEffect(() => {
        getData()
    }, [])
    console.log(props.location.pathname.split('/')[3])
    const getData = () => {
        const trxId = props.location.pathname.split('/')[3]
        Axios.get(process.env.REACT_APP_BASEURL + '/transaction/detail/' + trxId)
        .then((res) => {
            console.log(res)
            setDetailAddress('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div>
            <p>Ini adalah halaman Order Detail</p>
        </div>
    )
}

export default OrderDetail
