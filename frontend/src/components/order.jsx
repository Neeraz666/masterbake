import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../css/order.css';

const Order = () => {
  const location = useLocation();
  const { orderNumber, totalPrice } = location.state;

  return (
    <div className="order">
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>Your order number is: <strong>{orderNumber}</strong></p>
      <p>Total Price: <strong>Rs. {totalPrice}</strong></p>
      <p>Please keep this order number for your records and use it in any correspondence with us.</p>
      <Link to="/">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Order;
