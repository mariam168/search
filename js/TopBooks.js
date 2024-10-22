import React, { useState } from 'react';
import logo from './books images/logo.png';
import rollPaper from './books images/rollPaper.png';
import TopBooksData from './TopBooksData';
import { Link } from 'react-router-dom';
export default function Books() {
    const [searchImage, setSearchImage] = useState(false);

    const toggleSearch = () => {
        setSearchImage(!searchImage);
    };

    return (
        <div>
            <nav>
        <ul className='signButton'>
          <li>
            <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }}></img>
          </li>
          <li>
            <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }}></img>
          </li>
        </ul>
        <ul className='middleNav'>
        <li><Link to='/Books'>Books</Link></li>
          <li><Link to='/TopAuthor'>Authors</Link></li>
          <li onClick={toggleSearch}>Search</li>
          <li>Add Book</li>
          <li><Link to='/OrderBook'>Order Book</Link></li>
        </ul>
        <ul className='logo'>
          <li>
            <img src={logo} alt='logo'></img>
          </li>
        </ul>
      </nav>
            <div className='categoryName'>
                <h1>Books</h1>
            </div>
            <div className='categories'>
            {TopBooksData.map((book) => (
            <div key={book.id} className='category'>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
            </div>
             ))}
            </div>

        </div>
    );
}
