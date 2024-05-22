import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Product.scss'
import test from '../../assets/watch/test.png'
import {GetProduct} from '../function/Product'
export const Productdetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const productsData = await GetProduct();
        const product = productsData.find(p => p._id === productId);
        setProductDetail(product);
      } catch (error) {
        console.log('Failed to fetch product details:', error);
      }
    };
    fetchProductDetail();
  }, [productId]);
  if (!productDetail) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className='product-detail'>
        <div className='left-container'>
            <img src={test} />
        </div>
        <div className='right-container'>
          <p className='product-title'>{productDetail.title}</p>
          <p className='product-description'>{productDetail.description}</p>
          <p className='product-price'>{productDetail.price}</p>
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
