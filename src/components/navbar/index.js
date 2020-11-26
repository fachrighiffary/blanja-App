import React, { Component } from 'react'
import { Sort, Logo, Search, Chart } from '../../assets';
import './home.css'
import '../../pages/style.css'


class Navbar extends Component {
    render() {
        return(
            <header className="sticky-top">
                <nav className="navbar shadow p-3 mb-5 bg-white rounded">
                    <div className="container">
                        <div className="col-lg-2 d-flex">
                            <img src={Logo} alt="" />
                            <span className="txt ml-4">Blanja</span>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="search">
                                <input className="inpt" type="text"placeholder="Search" />
                                <img src={Search} alt="" />
                            </div>
                            <div>
                                <button className="btn btn-outline-dark mt-2 ml-1">
                                    <img src={Sort}  alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 red mt-3 d-flex justify-content-end">
                            <button className="btn btn-default mr-2">
                                <img  src={Chart} alt="" />
                            </button>
                            <button className="btn btn-danger pl-4 pr-4 mr-3 rounded-pill">Login</button>
                            <button className="btn btn-danger pl-4 pr-4 rounded-pill bg">Sign up</button>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar;
