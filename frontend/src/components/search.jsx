import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '@uidotdev/usehooks';
import '../css/search.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // Debounce for 300ms

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (results.length > 0) {
      if (results.length === 1) {
        navigate(`/products/${results[0].category.slug}/${results[0].slug}`);
      } else {
        navigate(`/products/${results[0].category.slug}`);
      }
      setDropdownOpen(false); // Hide dropdown on search submit
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedSearchTerm.length > 2) {
        setLoading(true);
        setError('');
        try {
          const response = await axios.get(`http://localhost:8000/api/product/search/?q=${debouncedSearchTerm}`);
          const { count, results } = response.data;
          setResults(results);
          setDropdownOpen(count > 0); // Open dropdown if there are results
        } catch (error) {
          console.error('Error searching products:', error);
          setError('An error occurred while searching. Please try again.');
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
        setDropdownOpen(false); // Hide dropdown if search term is too short
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

  const handleFocus = () => {
    if (results.length > 0) {
      setDropdownOpen(true); // Ensure dropdown is open when input is focused
    }
  };

  const handleBlur = () => {
    // Use a slight delay to allow clicking on dropdown items
    setTimeout(() => setDropdownOpen(false), 100);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={loading}
          className="search-input"
        />
        {loading && <div className="loading-spinner">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
      </form>
      {isDropdownOpen && (
        <div className="dropdown">
          {results.length > 0 ? (
            results.map((product) => (
              <div key={product.id} className="dropdown-item">
                <a href={`/products/${product.category.slug}/${product.slug}`}>
                  <img src={product.images[0]?.image} alt={product.name} className="dropdown-item-image" />
                  <span>{product.name}</span>
                </a>
              </div>
            ))
          ) : (
            <div className="dropdown-item">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
