import React, { useState } from 'react'
import './Dashboard.scss'
export const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState('Product');
    const [showAddProduct, setShowAddProduct] = useState(false);
    const handleAddProduct = () => {
        setShowAddProduct(true);
      };
    
      const handleCloseProduct = () => {
        setShowAddProduct(false);
      };
  return (
    <>
    <div className='admin'>
        <div className='left-container'>
            <div>
                <p><i class="fa-solid fa-user-tie"></i>Dashboard</p>
            </div>
            <div className='dashboard-link'>
                <div className='product-dashboard' onClick={()=> setSelectedSection('Product')}>
                    <p>Products</p>
                </div>
                <div className='user-dashboard' onClick={()=> setSelectedSection('User')}>
                    <p>Users</p>
                </div>
                <div className='order-dashboard' onClick={()=> setSelectedSection('Order')}>
                    <p>Order</p>
                </div>
            </div>
        </div>
        <div className='right-container'>
            <div className='top-container'>
                <div>
                    <p>Total Users</p>
                    <span>10</span>
                </div>
                <div>
                    <p>Total Products</p>
                    <span>25</span>
                </div> 
                <div>
                    <p>Total Orders</p>
                    <span>30</span>
                </div>
            </div>
            <div className='bottom-container'>
                <div>
                    <button onClick={()=> setShowAddProduct(true)}>Add Product</button>
                </div>
                {showAddProduct && (
                <div className='add-product'>
                    <button onClick={handleCloseProduct} className='close-mark'><i class="fa-solid fa-xmark"></i></button>
                    <div>
                        <label>Title:</label>
                        <input type='text' />
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
                        <button>Add Product</button>
                    </div>
                </div>
                )}
                      {selectedSection === 'Product' && (
                <table>
                    <tr>
                      <th>S.N</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Rolex Daytona</td>
                        <td>Its a very nice watch</td>
                        <td>Rs.9999</td>
                        <td className='action-button'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>        
                )}
                      {selectedSection === 'User' && (
                <table>
                    <tr>
                      <th>S.N</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Mobile Number</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>ishuduwal</td>
                        <td>ishuduwal8@gmail.com</td>
                        <td>947484848</td>
                        <td className='action-button'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>      
                )}
                {selectedSection === 'Order' && (
                <table>
                    <tr>
                      <th>S.N</th>
                      <th>Product name</th>
                      <th>Email</th>
                      <th>Mobile Number</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>rolex daytona</td>
                        <td>ishuduwal8@gmail.com</td>
                        <td>947484848</td>
                        <td className='action-button'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>  
                )}
            </div>
        </div>
    </div>
    </>
  )
}
