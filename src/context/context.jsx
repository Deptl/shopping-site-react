import React, { createContext, useState } from 'react'
import { Items } from '../items';

export const Context = createContext(null);

const defaultCart = () => {
    let cart = {}
    for (let i = 0; i < Items.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(defaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCartItems = (updatePrice, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: updatePrice}))
    }

    const getSubTotal = () =>{
        let totalPrice = 0;
        let taxAmount = 0;
        let finalTaxAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemPrice = Items.find((product) => product.id === Number(item))
                totalPrice += cartItems[item] * itemPrice.price;
                taxAmount = totalPrice * 1.13;
                finalTaxAmount = Math.round(taxAmount * 100) /100
            }
        }
        return finalTaxAmount;
    };

    const contextValue = { cartItems, addToCart, deleteFromCart, updateCartItems, getSubTotal }

    console.log(cartItems);

    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}
