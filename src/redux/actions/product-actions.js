import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
   return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products
   }
};
// for product details of selected product
export const selectedProduct = (product) => { 
   return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product
   }
};
