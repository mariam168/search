import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from './searchIcon.png';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchValue.trim()) {
            navigate(`/searchResult?query=${encodeURIComponent(searchValue)}`);
        }
    };

    return (
        <div className='search-bar'>
            <div className="logo"></div>
            <h1>Buck<span>Buck</span>Go</h1>
            <div className='homeSearch'>
                <input
                    type='search'
                    className='search'
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    // placeholder='Search ...'
                    required
                />
                <img src={searchIcon} alt='search' onClick={handleSearch} />
            </div>
            <p>The search engine that doesn't track you</p>
        </div>
    );
}
