import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log('OrderHistory component mounted'); // Log to ensure component is mounting
    const fetchOrderHistory = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error('Access token is missing');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/cart/orders/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('Order history response:', response.data.results);
        setOrders(Array.isArray(response.data.results) ? response.data.results : []);
      } catch (error) {
        console.error('Error fetching order history: ', error);
      }
    };

    fetchOrderHistory();
  }, []);

  const handleBuyAgain = async (productSlug) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/cart/add/', {
        product_slug: productSlug,
        quantity: 1,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      alert('Product added to cart successfully.');
    } catch (error) {
      console.error('Error adding product to cart: ', error);
    }
  };

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id} className="order-item">
              <h3>Order ID: {order.order_number}</h3>
              <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
              <p>Total Price: Rs.{parseFloat(order.total_price).toFixed(2)}</p>
              <p>Status: {order.status}</p>
              <ul className="order-items">
                {order.items.map(item => (
                  <li key={item.id} className="order-item-detail">
                    <img src={item.product.images[0]?.image} alt={item.product.name} className="product-image" />
                    <div>
                      <p>Product: {item.product.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: Rs.{parseFloat(item.price).toFixed(2)}</p>
                    </div>
                    <button onClick={() => handleBuyAgain(item.product.slug)}>Buy Again</button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );  
};

export default OrderHistory;
