import React, {useState } from 'react'
import './Dashboard.scss'
import { OrderDashboard } from './OrderDashboard';
import { ProductDashboard } from './ProductDashboard';
import { UserDashboard } from './UserDashboard';
export const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState('product-dashboard');

    const switchSection = (section) => {
      setSelectedSection(section);
    }
  return (
    <>
    <div className='admin'>
        <div className='left-container'>
            <div>
                <p><i class="fa-solid fa-user-tie"></i>Dashboard</p>
            </div>
            <div className='dashboard-link'>
                <div className={`product-dashboard ${switchSection === 'product-dashboard' ? 'active' : ''}`} onClick={()=> setSelectedSection('product-dashboard')}>
                    <p>Products</p>
                </div>
                <div className={`user-dashboard ${switchSection === 'user-dashboard' ? 'active' : ''}`} onClick={()=> setSelectedSection('user-dashboard')}>
                    <p>Users</p>
                </div>
                <div className={`order-dashboard ${switchSection === 'order-dashboard' ? 'active' : ''}`} onClick={()=> setSelectedSection('order-dashboard')}>
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
                {selectedSection === 'product-dashboard' && (
                  <ProductDashboard selectedSection={selectedSection}/>
                )}
                {selectedSection === 'user-dashboard' && (
                  <UserDashboard/>
                )}
                {selectedSection === 'order-dashboard' && (
                  <OrderDashboard />
                )} 
            </div>
        </div>
    </div>
    </>
  )
}
