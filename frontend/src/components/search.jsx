import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/search.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.length > 2) {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`http://localhost:8000/api/product/search/?q=${searchTerm}`);
        const { count, results } = response.data;
        setResults(results);

        if (count === 1) {
          // Redirect to the single product page
          navigate(`/products/${results[0].category.slug}/${results[0].slug}`);
        } else if (count > 1) {
          // Redirect to a category or search results page
          navigate(`/products/${results[0].category.slug}`);
        } else {
          // No results found, handle as needed
          setError('No results found');
        }
      } catch (error) {
        console.error('Error searching products:', error);
        setError('An error occurred while searching. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please enter at least 3 characters to search.');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleSearchChange}
          disabled={loading}
          className="search-input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
