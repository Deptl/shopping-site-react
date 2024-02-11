import React, { useContext } from "react";
import "./itemcard.css"
import {Context} from '../context/context'

export const Itemcard = (props) => {
  const { id, itemName, price, image, description } = props.data;
  const { addToCart, cartItems } = useContext(Context);
  const cartItemCount = cartItems[id];

  return (
    
      <div className='card'>
        <div className='image'>
          <img src={image} />
        </div>
        <div className="desc">
          <h1>{itemName}</h1>
          <p>{description}</p>
          <span>${price}</span>
        </div><button className="btn" onClick={() => addToCart(id)}>Add to Cart{cartItemCount > 0 && <> ({cartItemCount})</>}</button>
      </div>
  );
};