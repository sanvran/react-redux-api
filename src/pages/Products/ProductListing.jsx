import React, { useEffect } from 'react'
import axios from 'axios'
// redux
import { useSelector } from 'react-redux'
// components
import ProductComponent from '../../components/Product';

const ProductListing = () => {

   const products = useSelector((state) => state);
   console.log("Products Listing page=====>", products)
   // const fectchProduct = async () => {
   //    const res = await axios
   //       .get('https://fakestoreapi.com/products')
   //       .catch((err) => {
   //          console.log("Error:===========>", err);
   //       });
   //    console.log("API response data====>", res.data)
   // };

   // useEffect(() => {
   // }, [fectchProduct]);
   
   return (
      <>
         <div className="main__container ui grid container">
            <h3 style={{marginLeft: 10}}>Product Lists</h3>
            <ProductComponent/>
         </div>
      </>
   )
}

export default ProductListing