import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux' 
import store from '../redux/store'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';


import Home from './home';
import Detail from './detail'
import MyBag from './myBag';
import CheckOut from './checkOut';
import Profile from './profile';
import Category from './category';
import Login from './login';
import Reset from './reset';
import Confirm from './confirm';
import Register from './register';
import Activation from './activation';
import GetOtp from './getOtpReset'
import Search from './search';
import SearchProduct from './search/searchProduct';

const persistedStore = persistStore(store);

export default function Router() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistedStore} loading={null}>
                    <Route path="/login" exact component={Login}  />
                    <Route path="/reset" exact component={Reset}  />
                    <Route path="/confirm" exact component={Confirm}  />
                    <Route path="/register" exact component={Register}  />
                    <Route path="/" exact component={Home}  />
                    <Route path="/detail/:id" exact component={Detail}/>
                    <Route path="/mybag" exact component={MyBag}/>
                    <Route path="/checkout" exact component={CheckOut}/>
                    <Route path="/profile"  component={Profile}/>
                    <Route path="/category" exact component={Category}/>
                    <Route path="/activation" exact component={Activation}/>
                    <Route path="/GetOtp" exact component={GetOtp}/>
                    <Route path="/search/:key" exact component={Search}/>
                    <Route path="/searchproduct/:key" exact component={SearchProduct}/>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    )
}