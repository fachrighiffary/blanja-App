import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home';
import Detail from './detail'
import MyBag from './myBag';
import CheckOut from './checkOut';

export default function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}  />
            <Route path="/detail/:id" exact component={Detail}/>
            <Route path="/mybag" exact component={MyBag}/>
            <Route path="/checkout" exact component={CheckOut}/>
        </BrowserRouter>
    )
}