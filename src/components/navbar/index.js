import React, { useState } from 'react'
import { Sort, Logo, Search, Chart, Bell, Mail, Profil } from '../../assets';
import './home.css'
import '../../pages/style.css'
import './modal.css'
import { Link } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';

const urlLogout = "http://localhost:8000/auth/logout";

const Navbar = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { dispatch } = props;

    const logout = () => {
        const data = ""
        Axios
        .post(urlLogout, data)
        .then((res) => {
            console.log(res);
            dispatch({type : "LOGOUT"});
            localStorage.setItem("token", "")
            localStorage.setItem("isLogin", 0)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    console.log(props.auth.isLogin)
    return (
        <>
            <header className="sticky-top">
                <nav className="navbar shadow p-3 mb-5 bg-white rounded">
                    <div className="container">
                    <Link to='/' className="text-decoration-none">
                        <div className="col-lg-2 d-flex">
                            <img src={Logo} alt="" />
                            <span className="txt ml-4">Blanja</span>
                        </div>
                    </Link>
                        <div className="col-lg-6 d-flex">
                            <div className="search">
                                <input className="inpt" type="text"placeholder="Search" />
                                <img src={Search} alt="" />
                            </div>
                            <div>
                                <button className="btn btn-outline-dark mt-2 ml-1"  onClick={handleShow}>
                                    <img src={Sort}  alt="" />
                                </button>
                            </div>
                        </div>
                        {props.auth.isLogin  ? (
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
                                <Link className="dp-profile" to="/profile">
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
                        <Button className="black">
                            <div></div>
                        </Button>
                        <Button className="white">
                            <div></div>
                        </Button>
                        <Button className="red">
                            <div></div>
                        </Button>
                        <Button className="grey">
                            <div></div>
                        </Button>
                        <Button className="brown">
                            <div></div>
                        </Button>
                        <Button className="blue">
                            <div></div>
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <div>Sizes</div>
                    <div className="d-flex m-2">
                        <Link className="size text_decoration-none">M</Link>
                        <Link className="size">L</Link>
                        <Link className="size">XL</Link>
                        <Link className="size">XXL</Link>
                    </div>
                    <div className="d-flex m-2">
                        <Link className="size">37</Link>
                        <Link className="size">38</Link>
                        <Link className="size">39</Link>
                        <Link className="size">40</Link>
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <div>Category</div>
                    <div className="d-flex justify-content-around mt-3 wrap">
                        <div className="col-md-3 ctg"> <Link>All</Link></div>
                        <div className="col-md-3 ctg"> <Link>T-Shirt</Link></div>
                        <div className="col-md-3 ctg"> <Link>Jacket</Link></div>
                    </div>
                    <div className="d-flex justify-content-around mt-3 wrap">
                        <div className="col-md-3 ctg"> <Link>Short</Link></div>
                        <div className="col-md-3 ctg"> <Link>Pants</Link></div>
                        <div className="col-md-3 ctg"> <Link>Shoes</Link></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Discard
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Apply
                </Button>
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
