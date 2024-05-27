import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

export const Product = () => {
  const { productSlug } = useParams();
  const location = useLocation();
  const { selectedCategory } = location.state || {};
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/${selectedCategory}/${productSlug}/`);
        setProduct(response.data);
        setActiveImage(response.data.images[0]?.image || '');
      } catch (error) {
        console.error('Error fetching product data: ', error);
      }
    };

    fetchProductData();
  }, [productSlug, selectedCategory]);

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
        <button>Add to Wishlist</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
