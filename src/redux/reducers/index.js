import {combineReducers} from 'redux'


import CounterReducer from "./Counter"
import ProductsReducer from './Products'

const reducers = combineReducers({
    //key => nama reducer
    //value => fungsi reducer
    counter : CounterReducer,
    products : ProductsReducer,
    auth: (prevState = { isLogin: Number(localStorage.getItem("isLogin")), level: 1 }, action) => {
        switch (action.type) {
          case "LOGIN":
            return {
              ...prevState,
              isLogin: localStorage.getItem("isLogin"),
              level: localStorage.getItem("level")
            };
          case "LOGOUT":
            console.log(prevState.isLogin)
            return {
              ...prevState,
              isLogin: 0,
            };
          default:
            return {
              ...prevState,
            };
        }
    }

})

export default reducers