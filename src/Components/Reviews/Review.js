import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import './Review.css'

const Review = (props) => {
     
    const {name,_id,rating,about}=props.data;
    return (
        <div className='reviews-csss '>

            <div className=''>
                <div className=' '>

                </div>
                <div className=' '>
            <h4>{name}</h4>
            
            <p> <h5>Rating: {rating}</h5> <Rating  readonly  initialValue={rating} iconsCount={5}></Rating></p>
            </div>
            </div>
            
            <p>{about}</p>
            
            
            
   
          
        </div>
    );
};

export default Review;