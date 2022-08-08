import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch, } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../../redux/actions/product-actions'
import Header1 from '../../components/Header/Header1'

const ProductDetail = () => {
   const { productId } = useParams();
   let product = useSelector((state) => state.product);
   const { image, title, price, category, description } = product;
   const dispatch = useDispatch();
   console.log("Product id=========>", productId);
   // make api call by id
   const getProductDetail = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
         .catch((err) => {
            console.log("Getting err======>", err)
         });
      dispatch(selectedProduct(res.data));
      // console.log("API respons get product details by id:========>", res.data);
   };

   // call the product details
   useEffect(() => {
      if (productId && productId !== "")
         getProductDetail(productId); // Run if we have product id && product id is not empty.
      return () => {
         dispatch(removeSelectedProduct());
      };
   }, [productId]) // in dependency array whenever product id will chnage useeffect will call everytime whenever the id will change.

   return (
      <>
         <Header1 />
         <div className='main__container container'>
            {
               Object.keys(product).length === 0 ? (
                  <div>Loading.......</div>
               ) :
                  (
                     <div className="four wide column"  >
                        <div className="ui link cards">
                           <div className="card">
                              <div className="image">
                                 <img src={image} alt={title} />
                              </div>
                              <div className="content">
                                 <div className="header">{title}</div>
                                 <div className="meta price">$ {price}</div>
                                 <div className="meta">{category}</div>
                              </div>
                           </div>
                        </div>

                     </div>
                  )
            }
         </div>


      </>
   )
};

export default ProductDetail