import React from 'react'
import { Check } from 'phosphor-react'
import './Checkout.css'

export const Checkout = () => {
  return (
    <div className="checkout">
      <Check height={400} width={400} color='green' />
      <p>Thank You For Shopping with Us</p>
      <p>Your Orders will be delivered in 5 days</p>
    </div>
  )
}
