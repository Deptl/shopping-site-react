import React, { useContext } from 'react'
import { Items } from '../items'
import { Context } from '../context/context'
import { Cartitemcard } from '../components/CartItemCard'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
    const { cartItems, getSubTotal } = useContext(Context);
    const subTotal = getSubTotal();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="products">
                <div>
                    <h2>CART ITEMS</h2>
                </div>
                <div className="cartItems">
                    {Items.map((item) => {
                        if (cartItems[item.id] !== 0) {
                            return <Cartitemcard data={item} />
                        }
                    })}
                </div>
                {subTotal > 0 ? (
                        <div className="subtotal">
                            <p>The final amount displayed is with 13% tax included.</p>
                            <p><b>Subtotal:</b> ${subTotal}</p>
                            <button className="back" onClick={() => navigate("/")}>Go to Products</button>
                            <button className="go" onClick={() => navigate("/Checkout")}>Checkout</button>
                        </div>
                ) : (
                    <div className="empty">
                        <h4>Cart is Empty</h4>
                    </div>
                )}
            </div>
            <div className="details">
                <div className="pdetails">
                    <h2>Personal Information</h2>
                    <p><b>Name:</b> John FLemming</p>
                    <p><b>E-mail:</b> jflemming@gmail.com</p>
                    <p><b>Contact No.:</b> 123-455-5677</p>
                </div>
                <div className="shipdetails">
                    <h2>Shipping Details</h2>
                    <p>Unit 234, 99 NorthWood State,</p>
                    <p>Toronto, ON - A4B 5F6</p>
                </div>
            </div>
        </div>
    );
};
