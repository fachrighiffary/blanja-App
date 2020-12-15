import React, { Component } from 'react'
import { Sort, Logo, Search, Chart } from '../../assets';
import './home.css'
import '../../pages/style.css'
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return(
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
                                <Link >
                                    <button className="btn btn-outline-dark mt-2 ml-1">
                                        <img src={Sort}  alt="" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 red mt-3 d-flex justify-content-end">
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
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar;
