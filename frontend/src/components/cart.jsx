import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from './cartitem';
import '../css/cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('Access token is missing');
        }

        const response = await axios.get('http://localhost:8000/api/cart/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setCartItems(response.data.items);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setLoading(false); 
      }
    };

    fetchCartItems();
  }, []);

  const incrementQuantity = async (itemId) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token is missing');
      }

      await axios.post(`http://localhost:8000/api/cart/increment/${itemId}/`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error('Error incrementing quantity:', error);
    }
  };

  const decrementQuantity = async (itemId) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token is missing');
      }

      await axios.post(`http://localhost:8000/api/cart/decrement/${itemId}/`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (error) {
      console.error('Error decrementing quantity:', error);
    }
  };

  const removeItem = async (itemId) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token is missing');
      }

      await axios.delete(`http://localhost:8000/api/cart/remove/${itemId}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (loading) {
    return <div className="cart">Loading...</div>; 
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <span>PRODUCT</span>
        <span>QUANTITY</span>
        <span>TOTAL</span>
      </div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Cart;
