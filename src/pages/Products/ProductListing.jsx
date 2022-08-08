import React, { useEffect } from 'react'
import axios from 'axios'
// redux
import { useSelector, useDispatch } from 'react-redux'
// import action
import { setProducts } from '../../redux/actions/product-actions'
// components
import ProductComponent from '../../components/Product';

const ProductListing = () => {

   const products = useSelector((state) => state);
   const dispatch = useDispatch();
   // console.log("Products Listing page=====>", products)

   // API call to fetch product
   const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
         .catch((err) => {
            console.log("Error:===========>", err);
         });
      dispatch(setProducts(res.data))
   };

   useEffect(() => {
      fetchProducts();
   }, []);
   console.log("API response from redux store data====>", products)

   return (
      <div className="main__container ui grid container">
         <ProductComponent />
      </div>
   )
}

export default ProductListing