import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import axios from 'axios'

const MyOrder = (props) => {
    const history = useHistory
    const [transaction, setTransaction] = useState([])
    useEffect(() => {
        getTransaction()
            }, [setTransaction])

    const getTransaction = () => {
        const id = localStorage.getItem('user_id')
        axios.get(process.env.REACT_APP_BASEURL + '/transaction/' + id )
        .then((res) => {
            console.log(res.data.data)
            setTransaction(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return(
        <Container className="container mt-5 cntner">
            <div className="container" style={{padding: 30}}>
                <p>My Order</p>
            </div>  
            <div className="ml-4 d-flex justify-content-between" style={{width: 600}}>
                <Link>All items</Link>
                <Link>Not yet paid</Link>
                <Link>Packed</Link>
                <Link>Sent</Link>
                <Link>Completed</Link>
                <Link>Order cancel</Link>
                <Link>Sent</Link>
            </div>
            <div className='row justify-content-start p-4 d-flex justify-content-center'>
                {transaction && transaction.map(({id, TrxId, trackingNumber, total, created_at, qty, status}) => {
                    return(
                        <Link className='col-lg-5 col-md-5 col-sm-12 mr-3 mt-3 card-tranc' href='' to={{pathname:"/profile/orderDetail/" + TrxId}}>
                            <div className="d-flex justify-content-between">
                                <p>{TrxId}</p>
                                <p>{created_at.split('T')[0]}</p>
                            </div>
                            <div className="d-flex">
                                <p>Tracking Number :  </p>
                                <p style={{marginLeft: 10}}> {trackingNumber.split('-')[1]}</p>
                            </div>
                            <div className="d-flex">
                                <p>Qty :  </p>
                                <p style={{marginLeft: 10}}> {qty}</p>
                            </div>
                            <div className="d-flex">
                                <p>Total Amount :  </p>
                                <p style={{marginLeft: 10}}>Rp {total}</p>
                            </div>
                            <div className="d-flex justify-content-end" style={{color: status === 'Delivered' ? 'green' : 'yellow'}}>
                                <p>{status}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Container>
    )
}

export default MyOrder
