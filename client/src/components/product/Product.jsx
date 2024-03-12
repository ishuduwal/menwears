import React from 'react'
import './Product.scss';
import test from '../../assets/watch/test.png';
import { Link } from 'react-router-dom';

export const Product = () => {
  return (
    <>
    <div className='product'>
      <Link to='/product-detail' className='product-detail'>
      <div className='product-item'>
        <div>
          <img src={test}/>
          <p>Rolex Daytona</p>
        </div>
        </div>
      </Link>
    </div>
    </>
  )
}
