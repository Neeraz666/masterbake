import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from './cartitem';
import '../css/cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true); 

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
        setTotalPrice(response.data.total_price);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setLoading(false); 
      }
    };

    fetchCartItems();
  }, []);

  const updateTotalPrice = (items) => {
    const newTotalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  };

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

      setCartItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateTotalPrice(updatedItems);
        return updatedItems;
      });
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

      setCartItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        updateTotalPrice(updatedItems);
        return updatedItems;
      });
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

      setCartItems((prevItems) => {
        const updatedItems = prevItems.filter((item) => item.id !== itemId);
        updateTotalPrice(updatedItems);
        return updatedItems;
      });
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
      <p className='estimated-total'>Estimated Total: Rs.{totalPrice}</p>
      <p>Taxes, discounts and shipping calculated at checkout.</p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
