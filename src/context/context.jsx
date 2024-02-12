import React, { createContext, useState } from 'react'
import { Items } from '../items';

export const Context = createContext(null);

//Getting default cart
const defaultCart = () => {
    let cart = {}
    for (let i = 0; i < Items.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(defaultCart());

    //Function for adding to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    //Function from deleting from cart
    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    //function to update cart items
    const updateCartItems = (updatePrice, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: updatePrice}))
    }

    //function for getting subtotal price
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
