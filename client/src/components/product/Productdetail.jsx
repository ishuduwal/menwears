import React from 'react'
import './Product.scss'
import test from '../../assets/watch/test.png'
import {GetProduct} from '../function/Product'
export const Productdetail = () => {
    const [productDetail, setProductDetail] = useState(null);
    useEffect(() => {
        fetchProducts();
    }, [productId]);
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
