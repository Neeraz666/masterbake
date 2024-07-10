import React from 'react';
import '../css/cartitem.css';
import remove from '../imgs/remove.svg';

const CartItem = ({ item, incrementQuantity, decrementQuantity, removeItem }) => {
  const total_price = item.product.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="product-info">
        <img src={item.product.images[0].image} alt={item.product.name} />
        <div className="product-details">
          <span>{item.product.name}</span>
          <span>Rs. {item.product.price}</span>
        </div>
      </div>
      <div className="quantity">
        <button onClick={() => decrementQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementQuantity(item.id)}>+</button>
        <button className="remove" onClick={() => removeItem(item.id)}>
          <img src={remove} alt="delete item" />
        </button>
      </div>

      <div className="total-price">
        <span>Rs. {total_price}</span>
      </div>
    </div>
  );
};

export default CartItem;
