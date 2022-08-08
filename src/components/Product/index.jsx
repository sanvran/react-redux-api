import React from "react"
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";


const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);
  const {id, title} = products[0]
  // console.log("Product component ====>", products)
  return (
    <div className="container">
      <div className="four wide column" >
        <Link to="#">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                {/* <img src="" alt='title' /> */}
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ 10000</div>
                <div className="meta">IT</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )

};

export default ProductComponent;
