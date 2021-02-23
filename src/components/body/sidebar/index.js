import React from 'react'
import { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Acount, Address, Cart, Edit, Home, Myorder, Product, Profil } from '../../../assets'
import './sidebar.css'

class Sidebar extends Component{
   
    render(){
        let listSide
        if(this.props.auth.level === 1){
            listSide =
            <>
                <div className='d-flex justify-content-between mt-3'>
                    <div className="icon" style={{backgroundColor:"#F36F45"}}>
                        <img alt="" src={Product} />
                    </div>
                    <Dropdown className="d-flex">
                    <p className="mr-2">Product</p>
                    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item >
                            <Link  to="/profile/myproduct">My Product</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
            </>
        }else{
            listSide = 
            <>
                <div className='d-flex justify-content-between mt-3'>
                    <div className="icon" style={{backgroundColor:"#F36F45"}}>
                        <img alt="" src={Address} />
                    </div>
                    <Dropdown className="d-flex">
                        <Link to='/profile/shipingAddres'>
                            <p className="mr-2 text-dark">Shipping Address</p>
                        </Link>
                    </Dropdown>
                </div>

                <div className='d-flex justify-content-between mt-3'>
                    <div className="icon" style={{backgroundColor:"#F3456F"}}>
                        <img alt="" src={Myorder} />
                    </div>
                    <Dropdown className="d-flex">
                        <Link to='/profile/myOrder'>
                            <p className="mr-2 text-dark">My Order</p>
                        </Link>
                    </Dropdown>
                </div>
            </>
        }
        return(
            <div className="container sidebar ">
                <div className='d-flex justify-content-center'>
                    <div className="dp-profil">
                        <img className="img-profil" src={Profil} alt="" />
                    </div>
                    <div className="ml-4">
                        <p>{localStorage.getItem("username")}</p>
                        <div className="d-flex margin-up">
                           <div className="mr-1">
                               <Link>
                                    <img height="16px" width="16px" src={Edit} alt=""/>
                               </Link>
                           </div>
                            <p>Ubah Profile</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 ml-5 btnside">
                    <div className='d-flex justify-content-between'>
                        <div className="icon" style={{backgroundColor:"#456BF3"}}>
                            <img alt="" src={Acount} />
                        </div>
                        <Dropdown className="d-flex">
                            <Link to="/profile">
                                <p className="mr-2 text-dark">My Account</p>
                            </Link>
                        </Dropdown>
                    </div>
                    {listSide}
                </div>

            </div>
        )
    }
}



const mapStateToProps = ({auth}) => {
    return {
        auth,
    }
}
export default connect(mapStateToProps)(Sidebar)