import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/product.css';

export const Product = () => {
  const { categoryName, productSlug } = useParams();
  const location = useLocation();
  const { selectedCategory } = location.state || {};
  const category = selectedCategory || categoryName;
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  useEffect(() => {
    if (category && productSlug) {
      const fetchProductData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/product/${category}/${productSlug}/`);
          setProduct(response.data);
          setActiveImage(response.data.images[0]?.image || '');
        } catch (error) {
          console.error('Error fetching product data: ', error);
        }
      };

      fetchProductData();
    }
  }, [productSlug, category]);

const handleAddToCart = async () => {
  const accessToken = localStorage.getItem('access_token');
  console.log('Product Slug:', product.slug);
  console.log('Quantity:', quantity);
  console.log('Access Token:', accessToken);

  if (!accessToken) {
    alert('You need to be logged in to add products to the cart.');
    return;
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/api/cart/add/',
      {
        product_slug: product.slug, // Use product slug instead of product ID
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    alert('Product added to cart successfully!');
  } catch (error) {
    console.error('Error adding product to cart: ', error);
    alert('Error adding product to cart');
  }
};

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <div className="left-column">
        <div className="main-image">
          <img src={activeImage} alt={product.name} />
        </div>
        <div className="thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt={product.name}
              className={activeImage === img.image ? 'active' : ''}
              onClick={() => setActiveImage(img.image)}
            />
          ))}
        </div>
      </div>
      <div className="right-column">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Quantity: {product.quantity}</p>
        <div className="quantity-control">
          <button onClick={decrementQuantity}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};
