import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/checkout.css'; 

const Checkout = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartTotal = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error('Access token is missing');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/cart/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setCartTotal(response.data.total_price);
      } catch (error) {
        console.error('Error fetching cart total:', error);
      }
    };

    fetchCartTotal();
  }, []);

  const handleCheckout = async () => {
    const accessToken = localStorage.getItem('access_token');
    try {
      const response = await axios.post(
        'http://localhost:8000/api/cart/checkout/',
        { phone_number: phoneNumber, address },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const totalPrice = response.data.total_price;
      const orderNumber = response.data.order_number;
      navigate('/order', { state: { orderNumber, totalPrice } });
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Cart Total: Rs. {cartTotal}</label>
        </div>
        <div>
          <label>Delivery Charge: Rs. 50</label>
        </div>
        <div>
          <label>Total Price: Rs. {cartTotal + 50}</label>
        </div>
        <button type="button" onClick={handleCheckout}>
          Proceed to Order Confirmation
        </button>
      </form>
    </div>
  );
};

export default Checkout;
