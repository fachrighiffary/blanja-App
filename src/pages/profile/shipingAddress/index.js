import Axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Container,Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'


const ShipingAddress = (props) => {
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [address, setAddress] = useState([])
    const [detailAddress, setDetailAddress] = useState([])
    const [addressName, setAddressName] = useState('')
    const [name, setName] = useState('')
    const [address_dtl, setAddress_dtl] = useState('')
    const [city, setCity] = useState('')
    const [post_code, setPost_code] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [idAddress, setIdAddress] = useState('')

    useEffect(() => {
        getDataAddress()
        handleEdit()
    }, [setAddress])

    const handleClose = () => {
        setShow(false)
        setShowEdit(false)
    }
    const handleOpen = () => {
        setShow(true)
        setAddressName('')
        setName('')
        setAddress_dtl('')
        setCity('')
        setPost_code('')
        setPhone_number('')

    }
    const handleEdit = (id) => {
        const config = {
            headers: {
                'x-access-token': 'Bearer '+ localStorage.getItem("token")
            }
        }
        Axios.get(process.env.REACT_APP_BASEURL  + '/address/detail/'+ id, config)
        .then((res) => {
            console.log(res)
            setShowEdit(true)
            setDetailAddress(res.data.data)
            setIdAddress(id)
            setAddressName(res.data.data[0].address)
            setName(res.data.data[0].name)
            setAddress_dtl(res.data.data[0].address_dtl)
            setCity(res.data.data[0].city)
            setPost_code(res.data.data[0].post_code)
            setPhone_number(res.data.data[0].phone_number)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleUpdate = () => {
        const config = {
            headers: {
                'x-access-token': 'Bearer '+ localStorage.getItem("token")
            }
        }
        const data = {
            address : addressName,
            name,
            address_dtl,
            city,
            post_code,
            phone_number
        }
        Axios.put(process.env.REACT_APP_BASEURL + '/address/' + idAddress , data, config)
        .then((res) => {
            setShowEdit(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleSubmit = async(event) => {
        event.preventDefault()
        const config = {
            headers: {
                'x-access-token': 'Bearer '+ localStorage.getItem("token")
            }
        }
        const data = {
            user_id : localStorage.getItem('user_id'),
            address : addressName,
            name,
            address_dtl,
            city,
            post_code,
            phone_number
        }
        await Axios.post(process.env.REACT_APP_BASEURL + '/address' , data, config)
        .then((res) => {
            // console.log(res.data.data)
            window.location.reload()
            setShow(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const getDataAddress = async() => {
        const config = {
            headers: {
               'x-access-token': 'Bearer '+ localStorage.getItem("token")
            }
        }
        const id = localStorage.getItem('user_id')
        await Axios.get(process.env.REACT_APP_BASEURL + '/address/' + id, config)
        .then((res) => {
           setAddress(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleDelete = (id) => {
        const config = {
            headers: {
               'x-access-token': 'Bearer '+ localStorage.getItem("token")
            }
        }
        Axios.delete(process.env.REACT_APP_BASEURL + '/address/' + id, config)
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    console.log(idAddress)
    return(
        <Container className='container mt-5 contner-shiping '>
            <div style={{marginTop: -100}}>
                <p className='txt-title'>Choose another address</p>
                <p className='txt-explain'> Manage Your shipping address</p>
            </div>
            <hr/>
            <Link className="addNew" onClick={handleOpen}>
                <Link className="link-add" onClick={handleOpen}>Add new Address</Link>
            </Link>
            {address && address.map(({id, name, address_dtl}, index) => {
                return(
                    <div className="list_address" key={index} >
                        <p>{name}</p>
                        <p>{address_dtl}</p>
                        <div className="d-flex justify-content-between" style={{width: 250}}>
                            <Link className="link-change" onClick={() => handleEdit(id)}>Change Address</Link>
                            <Link className="link-change" onClick={() => handleDelete(id)} >Delete address</Link>
                        </div>
                    </div>
                )
            })}
            {/* modal add new address */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <div style={{alignSelf: 'center', marginBottom: 41}}>Add New Address</div>
                <Form className="container" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12 col-md-6 d-flex input-grp">
                            <label>Save address as (ex : home address, office address)</label>
                            <input 
                                placeholder="Rumah" 
                                value={addressName}
                                onChange={e => setAddressName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex input-grp">
                            <label>Recipient’s name</label>
                            <input 
                                name={name}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex input-grp">
                            <label>Recipient's telephone number</label>
                            <input 
                                required 
                                type="number"
                                value={phone_number}
                                onChange={e => setPhone_number(e.target.value)} 
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex input-grp">
                            <label>Address</label>
                            <input 
                                value={address_dtl}
                                onChange={e => setAddress_dtl(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex input-grp">
                            <label>Postal code</label>
                            <input 
                                type="number" 
                                value={post_code}
                                onChange={e => setPost_code(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex input-grp">
                            <label>City or Subdistrict</label>
                            <input 
                                required 
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-12 col-md-6 d-flex flex-row-reverse" style={{marginTop: 50, marginBottom: 20}}>
                            <Button variant="danger" type="submit" className="rounded">
                                Save
                            </Button>
                            <Button variant="secondary" className="rounded mr-3" onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Form>
            </Modal>

            {/* modal edit address */}
            <Modal size="lg" show={showEdit} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <div style={{alignSelf: 'center', marginBottom: 41}}>Edit Address</div>
                    <Form className="container" onSubmit={handleUpdate}>
                        <div className="row">
                            <div className="col-lg-12 col-md-6 d-flex input-grp">
                                <label>Save address as (ex : home address, office address)</label>
                                <input 
                                    placeholder="Rumah" 
                                    value={addressName}
                                    onChange={e => setAddressName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex input-grp">
                                <label>Recipient’s name</label>
                                <input 
                                    name="name" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex input-grp">
                                <label>Recipient's telephone number</label>
                                <input 
                                    required 
                                    type="number"
                                    value={phone_number}
                                    onChange={e => setPhone_number(e.target.value)} 
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex input-grp">
                                <label>Address</label>
                                <input 
                                    value={address_dtl}
                                    onChange={e => setAddress_dtl(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex input-grp">
                                <label>Postal code</label>
                                <input 
                                    type="number" 
                                    value={post_code}
                                    onChange={e => setPost_code(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex input-grp">
                                <label>City or Subdistrict</label>
                                <input 
                                    required 
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-12 col-md-6 d-flex flex-row-reverse" style={{marginTop: 50, marginBottom: 20}}>
                                <Button variant="danger" type="submit" className="rounded">
                                    Save
                                </Button>
                                <Button variant="secondary" className="rounded mr-3" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Form>
            </Modal>
        </Container>
    )
}

export default ShipingAddress
