import React, { useState } from 'react';
import logo from './books images/logo.png';
import rollPaper from './books images/rollPaper.png';
import AuthorData from './AuthorData';
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
                        <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }} />
                    </li>
                    <li>
                        <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }} />
                    </li>
                </ul>
                <ul className='middleNav'>
                    <li>Books</li>
                    <li>Authors</li>
                    <li onClick={toggleSearch}>Search</li>
                    <li>Add Book</li>
                    <li>Order Book</li>
                </ul>
                <ul className='logo'>
                    <li>
                        <img src={logo} alt='logo' />
                    </li>
                </ul>
            </nav>
            <div className='categoryName'>
                <h1>Books</h1>
            </div>
            <div className='categories'>
            {AuthorData.map((author) => (
            <div key={author.id} className='category'>
                <img src={author.image} alt={author.title} />
                <h3>{author.title}</h3>
            </div>
             ))}
            </div>

        </div>
    );
}
