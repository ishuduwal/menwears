import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';
import test from '../../assets/watch/test.png';
import { GetProduct } from '../function/Product';

export const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        let res = await GetProduct();
        setProducts(res);
      } catch (error) {
        console.log('Failed to fetch products:', error);
      }
    }
    FetchProduct();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className='product'>
      {products.map((product) => (
        <div key={product._id} className='product-item' onClick={() => handleProductClick(product._id)}>
            <div>
              <img src={test} alt={product.title} />
              <p>{product.title}</p>
            </div>
          </div>
      ))}
    </div>
  )
}
