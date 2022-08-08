import { combineReducers } from 'redux'
import { productReducer } from '../reducers/product-reducer'

const reducers = combineReducers({
   allProducts: productReducer,
});

export default reducers;