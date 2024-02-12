import React from 'react'
import './Reviewcard.css'

export const Reviewcard = (props) => {
    const { id, itemName, review, ratings} = props.data;
  return (
    <div className="card-content">
        <h4>{itemName}</h4>
        <p><b>Review:</b> {review}</p>
        <p><b>Ratings:</b> {ratings}</p>
    </div>
  )
}
