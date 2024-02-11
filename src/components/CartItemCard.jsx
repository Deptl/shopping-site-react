import React, { useContext } from 'react'
import './CartItemCard.css'
import { Plus, Minus } from 'phosphor-react';
import { Context } from '../context/context';

export const Cartitemcard = (props) => {
    const { id, itemName, price, image, description } = props.data;
    const { cartItems, addToCart, deleteFromCart, updateCartItems } = useContext(Context)

    return (
        <div className='cartCard'>
            <img src={image} />
            <div className="desc">
                <h1>{itemName}</h1>
                <p>{description}</p>
                <span>${price}</span>
                <div className="btns">
                    <button className='minus' onClick={() => deleteFromCart(id)}><Minus /></button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItems(Number(e.target.value), id)} />
                    <button className='plus' onClick={() => addToCart(id)}><Plus /></button>
                </div>
            </div>
        </div>
    )
}
