import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; 
import Footer from './Footer';
export default function Books() {
  const [searchImage, setSearchImage] = useState(false);
  const [data, setData] = useState([]); 
  const toggleSearch = () => {
    setSearchImage(!searchImage);
  };
  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data); 
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div>
      <Header toggleSearch={toggleSearch} />
      <div className='categoryName'>
        {searchImage && <SearchBar toggleSearch={toggleSearch} />}
        <h1>Books</h1>
      </div>
      <div className='categories'>
        {data.map((book) => (
          <Link to={`/BookProfile/${book.id}`} key={book.id}>
            <div className='category'>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
            </div>
          </Link>
        ))}
      </div>

     <Footer/>
    </div>
  );
}
