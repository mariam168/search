import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';
export default function Books() {
    const [searchImage, setSearchImage] = useState(false);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const toggleSearch = () => {
        setSearchImage(!searchImage);
        setSearchValue('');
    };
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchValue(value);
        const filtered = data.filter((book) => 
            book.authors && book.authors[0] && book.authors[0].name.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };
    return (
        <div>
            <Header toggleSearch={toggleSearch} />
            <div className='categoryName'>
            {searchImage && <SearchBar toggleSearch={toggleSearch} />}
                <h1>Authors</h1>
            </div>

            <div className='categories'>
                {filteredData.map((book) => (
                    book.authors && book.authors[0] && (
                        <Link to={`/authorProfile/${book.id}`} key={book.id}>
                            <div className='category'>
                                <img src={book.authors[0].authorImage} alt={book.authors[0].name} />
                                <h3>{book.authors[0].name}</h3>
                            </div>
                        </Link>
                    )
                ))}
            </div>

            <Footer/>
        </div>
    );
}
