import React from 'react'
import {Comment} from '../reviews'
import { Reviewcard } from '../components/Reviewcard'
import './Reviews.css'

export const Reviews = () => {

    return (
        <div className="reviews-container">
            <h2>Your Reviews</h2>
            <div className="review-card">
                {Comment.map((comment) => (
                    <Reviewcard data={comment}/>
                ))}
            </div>
        </div>
    )
}
