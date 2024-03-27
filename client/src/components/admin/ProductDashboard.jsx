import React, { useEffect, useState } from 'react'
import './Dashboard.scss'
import { GetProduct, AddProduct, DeleteProduct } from '../function/Product';

export const ProductDashboard = ({ selectedSection }) => {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ title: '', description: '', price: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const productsData = await GetProduct();
            setProducts(productsData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddProduct = async () => {
        try {
            await AddProduct(newProduct);
            setShowAddProduct(false);
            //fetch the updated list of products
            fetchProducts();
            setNewProduct({ title: '', description: '', price: '' });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await DeleteProduct(productId);
            // fetch the updated list of products
            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddProductClick = () => {
        setShowAddProduct(true);
      };
    
      const handleCloseProduct = () => {
        setShowAddProduct(false);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };
  return (
    <>
    <div className='dashboard-table'>
        <div>
            <button onClick={()=> setShowAddProduct(true)}>Add Product</button>
        </div>
        {showAddProduct && (
        <div className='add-product'>
            <button onClick={handleCloseProduct} className='close-mark'><i class="fa-solid fa-xmark"></i></button>
            <div>
                <label>Title:</label>
                <input type='text'  value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}  />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}></textarea>
            </div>
            <div>
                <label>Price:</label>
                <input type='text'  value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            </div>
            <div>
                <input type='file'/>
            </div>
            <div>
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
        )}
        <table>
            <tr>
                <th>S.N</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            {products.map((product, index) => (
                <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td className='action-button'>
                        <button>Edit</button>
                        <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </td>
                </tr>
            ))}
            <div className='add-product edit-product'>
            <button className='close-mark'><i class="fa-solid fa-xmark"></i></button>
            <div>
                <label>Title:</label>
                <input type='text'  />
            </div>
            <div>
                <label>Description:</label>
                <textarea></textarea>
            </div>
            <div>
                <label>Price:</label>
                <input type='text' />
            </div>
            <div>
                <input type='file'/>
            </div>
            <div>
                <button >Save</button>
            </div>
            </div>
        </table>  
    </div>
    </>
  )
}
