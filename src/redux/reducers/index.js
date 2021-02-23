import {combineReducers} from 'redux'


import CounterReducer from "./Counter"
import ProductsReducer from './Products'
import AuthReducer from './Auth'

const reducers = combineReducers({
    //key => nama reducer
    //value => fungsi reducer
    counter : CounterReducer,
    products : ProductsReducer,
    auth: AuthReducer

})

export default reducers