import React, { useState } from 'react'
import { Sort, Logo, Search, Chart, Bell, Mail, Profil } from '../../assets';
import './home.css'
import '../../pages/style.css'
import './modal.css'
import { Link } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import {setLoginFalse} from '../../redux/actionCreators/Auth';

const urlLogout = "http://localhost:8000/auth/logout";

const Navbar = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    const handleaAction = (filterSearch) => {
        setShow(false)
        alert(filterSearch)
        props.history.push('/search/' + filterSearch)
    }

    const logout = () => {
        const data = ""
        Axios
        .post(process.env.REACT_APP_BASEURL + '/auth/logout', data)
        .then((res) => {
            console.log(res);
            props.dispatch(setLoginFalse())
            localStorage.removeItem('isLogin')
            localStorage.removeItem('token')
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    
    return (
        <>
            <header className="sticky-top">
                <nav className="navbar shadow p-3 mb-5 bg-white rounded navbar-cus">
                    <div className="container">
                    <Link to={{pathname: '/'}} className="text-decoration-none">
                        <div className="col-lg-2 d-flex">
                            <img src={Logo} alt="" />
                            <span className="txt ml-4">Blanja</span>
                        </div>
                    </Link>
                        <div className="col-lg-6 d-flex">
                            <div className="search d-flex">
                                <input 
                                    className="inpt" 
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    required
                                />
                                 <Link className="btn btn-outline-none"  to={{pathname:'/searchproduct/' + `?key=${search}`}}>
                                    <img src={Search}  alt="" />
                                </Link>
                                
                            </div>
                            <div>
                                <button className="btn btn-outline-dark mt-2 ml-1"  onClick={handleShow}>
                                    <img src={Sort}  alt="" />
                                </button>
                            </div>
                        </div>
                        {props.auth.isLogin ? (
                            <div className="col-lg-4 mt-3 d-flex justify-content-end">
                            <Link to="/mybag">
                                <button className="btn btn-default mr-2">
                                    <img  src={Chart} alt="" />
                                </button>
                            </Link>
                            <Link to="/mybag">
                                <button className="btn btn-default mr-2">
                                    <img  src={Bell} alt="" />
                                </button>
                            </Link>
                            <Link to="/mybag">
                                <button className="btn btn-default mr-2">
                                    <img  src={Mail} alt="" />
                                </button>
                            </Link>
                            <div>
                                <Link className="dp-profile"  to={{pathname: '/profile'}}>
                                    <img className="img-profile" src={Profil} alt="" />
                                </Link>
                            </div>
                            <Button className="btn btn-danger pl-4 pr-4 mr-3 rounded-pill" onClick={logout}>
                                <Link className="text-decoration-none text-light" to="/login">
                                    Logout
                                </Link>
                            </Button>
                        </div>

                        ): (
                        <div className="col-lg-4 mt-3 d-flex justify-content-end">
                            <Link to="/mybag">
                                <button className="btn btn-default mr-2">
                                    <img  src={Chart} alt="" />
                                </button>
                            </Link>
                            <Link className="text-decoration-none" to="/login">
                                <button className="btn btn-danger pl-4 pr-4 mr-3 rounded-pill">Login</button>
                            </Link>
                            <Link className="text-decoration-none" to="/register">
                                <button className="btn btn-danger pl-4 pr-4 rounded-pill bg">Sign up</button>
                            </Link>
                        </div>

                        )}
                    </div>
                </nav>
            </header>



            {/* MODAL */}
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>FILTER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Color</div>
                    <div className="d-flex m-4 justify-content-around">
                        <Button className="black" onClick={() => {
                            setFilter('sort?color=black')
                        }}>
                            <div></div>
                        </Button>
                        <Button className="white" onClick={() => {
                            setFilter('sort?color=white')
                        }}>
                            <div></div>
                        </Button>
                        <Button className="red" onClick={() => {
                            setFilter('sort?color=red')
                        }}>
                            <div></div>
                        </Button>
                        <Button className="grey" onClick={() => {
                            setFilter('sort?color=grey')
                        }}>
                            <div></div>
                        </Button>
                        <Button className="brown" onClick={() => {
                            setFilter('sort?color=brown')
                        }}>
                            <div></div>
                        </Button>
                        <Button className="blue" onClick={() => {
                            setFilter('sort?color=blue')
                        }}>
                            <div></div>
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <div>Sizes</div>
                    <div className="d-flex m-2">
                        <Link className="size text_decoration-none" onClick={() => {
                            setFilter('sort?size=m')
                        }}>M</Link>
                        <Link className="size" onClick={() => {
                            setFilter('sort?size=l')
                        }}>L</Link>
                        <Link className="size" onClick={() => {
                            setFilter('sort?size=xl')
                        }}>XL</Link>
                        <Link className="size" onClick={() => {
                            setFilter('sort?size=xxl')
                        }}>XXL</Link>
                    </div>
                    <div className="d-flex m-2">
                        <Link className="size" onClick={() => {
                            setFilter('sort?size=37')
                        }}>37</Link>
                        <Link className="size" onClick={() => {
                            setFilter('sort?size=38')
                        }}>38</Link>
                        <Link className="size" onClick={() => {
                            setFilter('sort?size=39')
                        }}>39</Link>
                        <Link className="size" onClick={() => {
                            setFilter('sort?size=40')
                        }}>40</Link>
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <div>Category</div>
                    <div className="d-flex justify-content-around mt-3 wrap">
                        <Link className="col-md-3 ctg" onClick={() => {
                            setFilter('sort')
                        }}><Link>All</Link></Link>
                        <Link className="col-md-3 ctg" onClick={() => {
                            setFilter('sort?category=1')
                        }}><Link>T-Shirt</Link></Link>
                        <Link className="col-md-3 ctg" onClick={() => {
                            setFilter('sort?category=2')
                        }}><Link>Jacket</Link></Link>
                    </div>
                    <div className="d-flex justify-content-around mt-3 wrap">
                        <Link className="col-md-3 ctg" onClick={() => {
                            setFilter('sort?category=3')
                        }}><Link>Short</Link></Link>
                        <Link className="col-md-3 ctg" onClick={() => {
                            setFilter('sort?category=4')
                        }}><Link>Pants</Link></Link>
                        <Link className="col-md-3 ctg" onClick={() => {
                            setFilter('sort?category=5')
                        }}><Link>Shoes</Link></Link>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Discard
                </Button>
                <Link variant="danger" to={{pathname:'/search/' + filter}} onClick={handleClose}>
                    Apply
                </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = ({ auth}) => {
    return {
        auth,
    }
}

export default connect(mapStateToProps)(Navbar);
