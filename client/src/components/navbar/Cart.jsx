import React from 'react'
import cartpng from '../../assets/watch/img1.png';
export const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };
  return (
    <>
      <div className='cart'>
      <div>
        <p>Shopping Cart</p>
        {cartItems.map((item,index) => (
          <div key={item._id}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div className='cart-info'>
              <p className='info-title'>{item.title}</p> 
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className='remove-button'>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          </div>
        ))}
        <div className='bottom-cart'>
          <p>Total Price: Rs.{totalPrice}</p>
          <button>Proceed</button>
        </div>
      </div>
    </div>
    </>
  )
}
