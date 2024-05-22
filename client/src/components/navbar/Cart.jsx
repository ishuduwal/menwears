import React from 'react'
import cartpng from '../../assets/watch/img1.png';
export const Cart = () => {
  return (
    <>
    <div className='cart'>
        <div>
          <p>Shopping Cart</p>
          <div>
            <div>
              <img src={cartpng}/>
            </div>
            <div className='cart-info'>
              <p className='info-title'>Rolex daytona 58</p> 
              <p>Quantity: 5</p>
            </div>
          </div>
          <div className='bottom-cart'>
            <p>Total Price: Rs.90000</p>
            <button>Proceed</button>
          </div>
        </div>
    </div>
    </>
  )
}
