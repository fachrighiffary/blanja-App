import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home';
import Detail from './detail'
import MyBag from './myBag';
import CheckOut from './checkOut';
import Profile from './profile';
import Category from './category';

export default function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}  />
            <Route path="/detail/:id" exact component={Detail}/>
            <Route path="/mybag" exact component={MyBag}/>
            <Route path="/checkout" exact component={CheckOut}/>
            <Route path="/profile/addproduct" exact component={Profile}/>
            <Route path="/category" exact component={Category}/>
        </BrowserRouter>
    )
}