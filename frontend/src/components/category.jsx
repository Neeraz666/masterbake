import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/category.css';

export const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const url = categoryName 
          ? `http://localhost:8000/api/product/${categoryName}/`
          : 'http://localhost:8000/api/product/';
        const response = await axios.get(url);
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchProductData();
  }, [categoryName]);

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  const handleProductClick = (productSlug) => {
    navigate(`/products/${categoryName}/${productSlug}`);
  };

  const categories = Array.from(new Set(products.map(product => product.category.name)));

  return (
    <div className="products-container">
      <div className="categories-container">
        <h1>Product Categories</h1>
        <ul>
          {categories.map(category => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="products-list">
        <h2>{categoryName ? `${categoryName} Products` : 'Products'}</h2>
        <ul>
          {products.map(product => (
            <li key={product.id} onClick={() => handleProductClick(product.slug)}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Quantity: {product.quantity}</p>
              <img src={product.images[0]?.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
