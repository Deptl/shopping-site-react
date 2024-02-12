import React from 'react'
import './Personalinfo.css'

export const Personalinfo = () => {
    return (
        <div className="info-container">
            <div className="row1">
                <div className="p-detail">
                    <h2>Personal Information</h2>
                    <p><b>Name:</b> John FLemming</p>
                    <p><b>E-mail:</b> jflemming@gmail.com</p>
                    <p><b>Contact No.:</b> 123-455-5677</p>
                </div>
                <div className="ship-details">
                    <h2>Shipping Details</h2>
                    <p>Unit 234, 99 NorthWood State,</p>
                    <p>Toronto, ON - A4B 5F6</p>
                </div>
            </div>
            <div className="row2">
                <div className="your-orders">
                    <h3>Your Orders</h3>
                    <p>Track and Return your orders</p>
                </div>
                <div className="security">
                    <h3>Manage Password</h3>
                    <p>Change and Update your Password</p>
                </div>
                <div className="membership">
                    <h3>Exclusive Membership</h3>
                    <p>Get Extra benifits and fast delivery with no extra cost</p>
                </div>
            </div>
            <div className="row3">
                <div className="payment">
                    <h3>Your Payments</h3>
                    <p>Change and manage your cards</p>
                </div>
                <div className="gift-cards">
                    <h3>Gift Cards</h3>
                    <p>View or Purchase a Gift Card</p>
                </div>
                <div className="cust-support">
                    <h3>Customer Service</h3>
                    <p>Browse Self Service Options or Contact Us</p>
                </div>
            </div>
        </div>
    )
}
