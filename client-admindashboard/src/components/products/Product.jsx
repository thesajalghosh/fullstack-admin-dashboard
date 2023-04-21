import React from 'react'
import { Rating } from 'react-simple-star-rating'
import './Product.css'

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  return (
    <div className='product'>
      <div className='category'>
        {category}
      </div>
      <div className='name'>
        {name}
      </div>
      <div >
        <Rating
          className='rating'
          initialValue={rating}
        />
      </div>
      <div className='description'>
        {description}
      </div>
      <div> See More</div>
    </div>
  )
}

export default Product


