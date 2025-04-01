import React from 'react'

const Cards = ({productObj}) => {
    let{title, category,price,thumbnail,rating}= productObj;
  return (
    <div>
      <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p><span className='badge badge-primary'>{category}</span></p>
    <p className='text-black'>{rating}</p>
    <p className='text-xl font-bold text-black'>${price}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
