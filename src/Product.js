import React from 'react';
import './Product.css';

function Product({id, title, image}){
  return (
  	<div className="product"> 
  	<div className="product__info">
  	   <p>{title}</p>	
  	    </div>
  	   <img src={image} alt=""/>
  	</div>
  )
}

export default Product;