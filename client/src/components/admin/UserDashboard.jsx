import React, { useEffect, useState } from 'react'
import { GetUser } from '../function/User';
import './Dashboard.scss'

export const UserDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await GetUser(); 
        setUserData(userData); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  }
  return (
    <>
      <div className='dashboard-table'>
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobilenumber</th>
              <th>isAdmin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {userData && userData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={handleEdit}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
          isEditing && (
            <div className='user-edit'>
            <div>
              <label>isUseradmin</label>
              <select>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <button>Save</button>
            </div>
          </div>
          )
        }
    </div>
    </>
  )
}
