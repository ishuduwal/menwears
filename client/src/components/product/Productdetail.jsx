import React from 'react'
import './Product.scss'
import test from '../../assets/watch/test.png'
export const Productdetail = () => {
  return (
    <>
    <div className='product-detail'>
        <div className='left-container'>
            <img src={test} />
        </div>
        <div className='right-container'>
            <p className='product-title'>Rolex Daytona</p>
            <p className='product-description'>Daytona is the greatest watch made in the history of mankind</p>
            <p className='product-price'>Rs.123333</p>
            <div className='quantity-cart'>
                <div className='quantity'>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <div className='btn-add-to-cart'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
