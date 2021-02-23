import {createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
  };

const logger = createLogger();

const enhancers = applyMiddleware(promiseMiddleware, logger)

const persistedReducer = persistReducer(persistConfig, reducers, enhancers);

const store = createStore(persistedReducer);


export default store