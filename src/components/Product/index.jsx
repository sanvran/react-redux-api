import React from "react"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

// main component
const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);
  //const { id, title, image, price, category } = products;
  // console.log("Product component ====>", products)
  return (
    <>
      {
        products.map((elem) => {
          return (
            <div className="four wide column" key={elem.id} >
              <Link to={`/product-detail/${elem.id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={elem.image} alt={elem.title} />
                    </div>
                    <div className="content">
                      <div className="header">{elem.title }</div>
                      <div className="meta price">$ {elem.price }</div>
                      <div className="meta">{elem.category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })
      }
    </>

  )
};

export default ProductComponent;
