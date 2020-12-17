import {createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const logger = createLogger();

const enhancers = applyMiddleware(promiseMiddleware, logger)

//RPM -> REDUX PROMISE MIDDLEWARE, mengubah 1 action menjadi 2 bagian
// action pending
// action fulfilled/rejected

const reduxStore = createStore(reducers, enhancers);

export default reduxStore