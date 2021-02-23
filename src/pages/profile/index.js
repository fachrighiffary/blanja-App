import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import Sidebar from '../../components/body/sidebar'
import Navbar from '../../components/navbar'
import MyProduct from './myProduct'
import AddProduct from './myProduct/addProduct'
import EditProduct from './myProduct/editProduct'
import ShipingAddress from './shipingAddress'
import MyOrder from './myOrder'
import './profil.css'
import ProfileData from './profileData.js'
import OrderDetail from './orderDetail'



export class Profile extends Component {

    render() {
        const {match, history, auth} = this.props
        return (
            <BrowserRouter>
                <Navbar />
                {auth.isLogin ? <Redirect to="/" /> :<Redirect to="/"/> }
                <div className="d-flex ">
                <Sidebar className="" history={history} />
                    <div className="right-profile">
                        <div className="container">
                                <Switch>
                                    <Route  path='/profile/myproduct'>
                                        {({ match, history, location }) => <MyProduct match={match} history={history} location={location} />}
                                    </Route>
                                    <Route  path='/profile/addProduct' >
                                        {({ match, history, location }) => <AddProduct match={match} history={history} location={location}/>}
                                    </Route>
                                    <Route path='/profile/edit/:id' >
                                        {({ match, history, location }) => <EditProduct match={match} history={history} location={location}/>}
                                    </Route>

                                    <Route  path='/profile/shipingAddres'>
                                        {({ match, history, location }) => <ShipingAddress match={match} history={history}location={location} />}
                                    </Route>
                                    <Route path='/profile/myOrder'>
                                        {({ match, history, location }) => <MyOrder match={match} history={history} location={location}/>}
                                    </Route>
                                    <Route path='/profile/orderDetail/:id'>
                                        {({ match, history, location }) => <OrderDetail match={match} history={history} location={location}/>}
                                    </Route>
                                    <Route exact path='/profile'>
                                        <ProfileData />
                                    </Route>
                                </Switch>
                           
                            {/* <MyProduct /> */}
                        </div>
                    </div>
                </div>
            </BrowserRouter>
            
        )
    }
}


const mapStateToProps = ({ auth }) => {
    return {
      auth,
    };
  };
  

export default connect(mapStateToProps)(Profile)
