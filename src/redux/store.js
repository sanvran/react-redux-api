import { legacy_createStore as createStore } from 'redux'
import reducers from './reducers'

const REDUX_DEVTOOL_EXT = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers,
   {},
   REDUX_DEVTOOL_EXT
);

export default store;