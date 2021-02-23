const isLogin = localStorage.getItem('isLogin') === null ? false : true
const initialState = { 
    isLogin   : isLogin,
    email     : localStorage.getItem('email'),
    name      :localStorage.getItem('username'),
    level     : localStorage.getItem('level_id'),
    id        : localStorage.getItem('user_id'),
    store_name:localStorage.getItem('store_name'),
    token     : localStorage.getItem('token')
}

console.log(initialState)


const AuthReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "LOGIN_TRUE":
        return {
          ...prevState,
          isLogin : true,
          email: action.data.email,
          name: action.data.name,
          level: action.data.level,
          id: action.data.id,
          store_name: action.data.store_name,
          token: action.data.token,
    
        };
      case "LOGIN_FALSE":
        return {
          ...prevState,
          isLogin : false,
          email: '',
          name:'',
          level: '',
          id: '',
          store_name:'',
          token: ''
        };
      default:
        return {
          ...prevState,
        };
    }
}

export default AuthReducer