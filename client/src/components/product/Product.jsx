import React from 'react'
import './Product.scss';
import test from '../../assets/watch/test.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {GetProduct} from '../function/Product'

export const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  })
  const fetchProducts = async () => {
    try {
      const productsData = await GetProduct();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className='product'>
        {products.map((product) => (
          <Link  className='product-detail' key={product.id}>
            <div className='product-item'>
              <div>
                <img src={test } />
                <p>{product.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
