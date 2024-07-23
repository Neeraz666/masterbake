    // src/components/SearchBar.js
    import React, { useState } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    import search from '../imgs/search.png'; // Adjust the path as necessary

    const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSearchChange = async (event) => {
        const query = event.target.value;
        setSearchTerm(query);

        if (query.length > 2) {  // Trigger search only if query is more than 2 characters
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/product/search/?q=${query}`);
            const { count, results } = response.data;
            
            if (count === 1 && results.length > 0) {
            navigate(`/products/${results[0].category.slug}/${results[0].slug}`);
            } else if (count > 1) {
            navigate(`/products/${results[0].category.slug}`);
            }
        } catch (error) {
            console.error('Error searching products:', error);
        } finally {
            setLoading(false);
        }
        }
    };

    return (
        <div className="search-container">
        <button className="search-button">
            <img src={search} alt="Search" />
        </button>
        <div className="searchbox">
            <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={loading}
            />
        </div>
        </div>
    );
    };

    export default SearchBar;
