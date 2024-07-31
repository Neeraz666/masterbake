import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/profile.css';
import OrderHistory from './orderHistory';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    profilephoto: null,
    phone_number: '',
    address: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error('Access token is missing');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data);
        setFormData({
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          phone_number: response.data.phone_number,
          address: response.data.address,
        });
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilephoto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('access_token');
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await axios.put('http://localhost:8000/api/users/profile', formDataToSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsEditing(false);
      const updatedUserData = { ...userData, ...response.data };
      setUserData(updatedUserData);
    } catch (error) {
      console.error('Error updating user data: ', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Profile Photo:
            <input type="file" name="profilephoto" onChange={handleFileChange} />
          </label>
          <br />
          <label>
            First Name:
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
          </label>
          <label>
            Address:
            <textarea name="address" value={formData.address} onChange={handleChange} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          {userData.profilephoto && <img src={userData.profilephoto} alt="Profile" />}
          <p><strong>First Name:</strong> {userData.firstname}</p>
          <p><strong>Last Name:</strong> {userData.lastname}</p>
          <p><strong>Phone Number:</strong> {userData.phone_number}</p>
          <p><strong>Address:</strong> {userData.address}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <OrderHistory /> {/* Ensure OrderHistory is rendered here */}
    </div>
  );
};

export default Profile;
