import React from "react";



const ProductList = ({ products, addToCart }) => {

      return (

            <div className="product-list">

             <h2>Products</h2>
             {products.map((product) => (
                  <div key={product.id} className="product-item">

                  <span>{product.name}</span>
                  <span>${product.price}</span>
                  
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                                                                                  
                   </div>
                  ))}

            </div>
      );

    };



    export default ProductList;


                         