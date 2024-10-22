import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../css/authorProfile.css';
import Header from './Header';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook, faQuoteRight, faNoteSticky, faDownload,
    faPen, faEye, faFlag, faShareAlt, faPlus
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

export default function AuthorProfile() {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [searchImage, setSearchImage] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchAuthorData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/data/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch author data');
                }
                const data = await response.json();
                setAuthor(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchAuthorData();
    }, [id]);

    if (!author) {
        return <div>Not Available</div>;
    }

    const toggleSearch = () => {
        setSearchImage(!searchImage);
    };

    return (
        <>
            <Header toggleSearch={toggleSearch} />
            <div className='authorProfile'>
                {searchImage && <SearchBar toggleSearch={toggleSearch} />}

                <div className='authorProfileContent'>
                    <div className='leftSection'>
                        <img src={author.authors[0].authorImage} alt='profile' />
                        <button>Add Book</button>
                        <button>Add Quote</button>

                        <div className='author-follow-us'>
                            <FontAwesomeIcon icon={faFacebookF} className="author-share-icon" />
                            <FontAwesomeIcon icon={faTelegram} className="author-share-icon" />
                            <FontAwesomeIcon icon={faWhatsapp} className="author-share-icon" />
                            <FontAwesomeIcon icon={faTwitter} className="author-share-icon" />
                        </div>

                        <form>
                            <p>Put your email in for updates</p>
                            <input type="text" placeholder="Name..." />
                            <input type="email" placeholder="Email..." />
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>

                    <div className='rightSection'>
                        <h2>About {author.authors[0].name}</h2>
                        <p>{author.authors[0].authorInformation}</p>

                        <div className='total'>
                            <div><h3>{author.authors[0].booksNumber}<br />Books</h3></div>
                            <div><h3>{author.authors[0].quotesNumber}<br />Quotes</h3></div>
                            <div><h3>{author.authors[0].storiesNumber}<br />Stories</h3></div>
                            <div><h3>{author.authors[0].novelsNumber}<br />Novels</h3></div>
                        </div>

                        <div className="share-author">
                            <div>
                                <FontAwesomeIcon icon={faShareAlt} className="share-icon" />
                                <h4>Share Author</h4>
                            </div>
                            <div className="share-author-icons">
                                <FontAwesomeIcon icon={faFacebookF} className="share-icon" />
                                <FontAwesomeIcon icon={faTelegram} className="share-icon" />
                                <FontAwesomeIcon icon={faWhatsapp} className="share-icon" />
                                <FontAwesomeIcon icon={faTwitter} className="share-icon" />
                            </div>
                        </div>

                        <div className='authorSection'>
                            <h2>Other Works by {author.authors[0].name}</h2>
                            <div className='authorSectionContent'>
                                {author.authors[0].authorWorks.slice(index, index + 4).map((work, idx) => (
                                    <div key={idx}>
                                        <img src={work.image} alt={work.title} />
                                        <h3>{work.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='author-quotes-reviews'>
                          <div className='author-quotes-reviews-header'>
                            <button>Quotes</button>
                            <button>Reviews</button>
                          </div>
                          <div className='author-quotes-reviews-content'>

                          </div>


                        </div>
                    </div>
                </div>

               <Footer/>
            </div>
        </>
    );
}

