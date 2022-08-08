import React, { useEffect } from 'react'
import axios from 'axios'
// redux
import { useSelector } from 'react-redux'
// components
import ProductComponent from '../../components/Product';

const ProductListing = () => {

   const products = useSelector((state) => state);
   console.log("Products Listing page=====>", products)
   
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