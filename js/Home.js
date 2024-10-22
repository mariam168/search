import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar'; 
export default function Home() {
  const [searchImage, setSearchImage] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value.trim()) {
      const results = data.filter((book) =>
        book.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const toggleSearch = () => {
    setSearchImage(!searchImage);
    setSearchValue('');
    setSearchResults([]);
    setShowDropdown(false);
  };

  return (
    <main className='home'>
      <Header toggleSearch={toggleSearch} />

      <div className='homeBackground'>
        {searchImage && (
          <SearchBar 
            searchValue={searchValue} 
            handleSearch={handleSearch} 
            toggleSearch={toggleSearch} 
          />
        )}

        <div>
          <div className='home-background-info'>
            <h1>Choose Your Favourite Book</h1>
            <h2>More Than 1000+ Books</h2>
          </div>
          <div className='search-bar'>
            <input
              type='search'
              className='search'
              value={searchValue}
              onChange={handleSearch}
              placeholder='Search for Book Or Author....'
            />
            {showDropdown && (
              <div className='search-dropdown'>
                {searchResults.length > 0 ? (
                  searchResults.slice(0, 6).map((book) => (
                    <Link to={`/BookProfile/${book.id}`} key={book.id} style={{ textDecoration: 'none' }}>
                      <div className='search-item'>
                        <span className='search-item-title'>{book.title}</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className='search-item'>
                    <span>No results found</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className='homeNav'>
        <ul>
          <li>Romantic</li>
          <li>Philosophy and Logic</li>
          <li>Social Sciences</li>
          <li>Political Science</li>
          <li>The Biography</li>
        </ul>
      </nav>

      <section className='homeContent'>
        <div className='topBooks'>
          <h2>Top Books</h2>
          <div className='topBooksContent'>
            {data.map((book) => (
              <Link to={`/BookProfile/${book.id}`} key={book.id}>
                <div className='forTitle'>
                  <img src={book.image} alt={book.title} className='image' />
                  <h4>{book.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='topAuthors'>
          <h2>Top Authors</h2>
          <div className='topAuthorsContent'>
            {data.map((book) => (
              <Link to={`/authorProfile/${book.id}`} key={book.id}>
                <div className='forTitle'>
                  <img src={book.authors[0].authorImage} alt={book.authors[0].name} />
                  <h4>{book.authors[0].name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='recentBooks'>
          <h2>Recent Books</h2>
          <div className='recentBooksContent'>
            {data.map((book) => (
              <Link to={`/BookProfile/${book.id}`} key={book.id}>
                <div className='forTitle'>
                  <img src={book.image} alt={book.title} className='image' />
                  <h4>{book.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className='websiteInformation'>
        <div className='websiteInformationText'>
          <h1>Literature Website</h1>
          <h2>Carry Arabic and international books and novels in your pocket.</h2>
          <h2>Download books to your phone and read them without the need for the internet.</h2>
          <h2>Browse and read books and novels online.</h2>
          <h2>Enjoy the feeling of reading paper books.</h2>
          <h2>Ease of use of the application and navigation between sections with For Read.</h2>
          <h2>The app is provided for free by For Read Library.</h2>
        </div>
      </div>

      <Footer />
      
    </main>
  );
}
