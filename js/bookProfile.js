/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

import bookPreview from '../books-images/bookPreview.png';
import profile1 from '../books-images/profile1.jpg';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook, faQuoteRight, faNoteSticky, faDownload,
    faPen, faEye, faFlag, faShareAlt, faPlus
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

export default function BookProfile() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [searchImage, setSearchImage] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/data/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const foundBook = await response.json();
                setBook(foundBook);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchBookData();
    }, [id]);

    if (!book) {
        return <div>Not Available</div>;
    }

    const toggleSearch = () => {
        setSearchImage(!searchImage);
    };

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % book.authors[0].authorWorks.length);
    };

    const previous = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? book.authors[0].authorWorks.length - 1 : prevIndex - 1
        );
    };
    const StarRating = () => {
        const [rating, setRating] = useState(0);
    
        const handleClick = (value) => {
            setRating(value); 
        };
    
        return (
            <div className="stars">
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        className={value <= rating ? "star filled" : "star"} 
                        onClick={() => handleClick(value)} 
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };
    
    
    return (
        <>
            <Header toggleSearch={toggleSearch} />
            <div className="bookProfile">
                {searchImage && <SearchBar toggleSearch={toggleSearch} />}
                <div className="bookProfileContent">
                    <div className="bookLeftSection">
                        <img src={book.image} alt="profile" />
                        <div className="preview">
                            <img src={bookPreview} alt="bookPreview" />
                            <p>Preview</p>
                        </div>
                        <div className="download">
                            <p>Download Book</p>
                        </div>
                        <br />
                         <div className='follow-us'>
                               <FontAwesomeIcon icon={faFacebookF} className="share-icon" />
                                <FontAwesomeIcon icon={faTelegram} className="share-icon" />
                                <FontAwesomeIcon icon={faWhatsapp} className="share-icon" />
                                <FontAwesomeIcon icon={faTwitter} className="share-icon" />
                         </div>
                         <form>
                            <p>put your email in for updates</p>
                            <input type="text" placeholder="Name..." />
                            <input type="email" placeholder="Email..." />
                            <button type="submit" className="submit-button">Submit</button>
                            
                         </form>
                    </div>
                    <div className="bookRightSection">
                        <div className='bookTitleRight'>
                        <h1>{book.title}</h1>
                        <h4>By: {book.authors[0].name}</h4>
                        </div>
                        
                        <div className="bookGeneralInformation">
                            <div>
                                <ul>
                                    <li><p>Publish Date:</p></li>
                                    <li><p>Publisher:</p></li>
                                    <li><p>Language:</p></li>
                                    <li><p>Pages:</p></li>
                                    <li><p>Published In:</p></li>
                                    <li><p>ISBN10:</p></li>
                                    <li><p>Open Library:</p></li>
                                    <li><p>Internet Archive:</p></li>
                                    <li><p>ISBN13:</p></li>
                                </ul>
                                <ul>
                                    <li><p>{book.publishDate}</p></li>
                                    <li><p>{book.publisher}</p></li>
                                    <li><p>{book.language}</p></li>
                                    <li><p>{book.pages}</p></li>
                                    <li><p>{book.publishPlace}</p></li>
                                    <li><p>{book.ISBN10}</p></li>
                                    <li><p>{book.openLibrary}</p></li>
                                    <li><p>{book.internetArchive}</p></li>
                                    <li><p>{book.ISBN13}</p></li>
                                </ul>
                            </div>
                           
                                
                                <div className="bookOverview">
                                <h2>Rate This Book</h2>    
                               <div className="starRate">
                                <StarRating  />
                        </div>
                            </div>
                        </div>
                        <div className="overviewWithIcons">
                            
                     
                        <div className='overviewWithIconsContent'>
                            <div>
                                <a href="#" className="iconContainer">
                                    <FontAwesomeIcon icon={faBook} className="icon" />
                                </a>
                                <h4>Valuation</h4>
                            </div>
                            <div>
                                <a href='#' className="iconContainer">
                                    <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                                </a>
                                <h4>Quote</h4>
                            </div>
                            <div>
                                <a href="#" className="iconContainer">
                                    <FontAwesomeIcon icon={faNoteSticky} className="icon" />
                                </a>
                                <h4>Revisions</h4>
                            </div>
                            <div>
                                <a href="#" className="iconContainer">
                                    <FontAwesomeIcon icon={faDownload} className="icon" />
                                </a>
                                <h4>Download</h4>
                            </div>
                            <div>
                                <a href="#" className="iconContainer">
                                    <FontAwesomeIcon icon={faPen} className="icon" />
                                </a>
                                <h4>Read</h4>
                            </div>
                            </div>
                           
                        </div>
                        <div className="visit-report-book">
                      
                            <div className="visit-report-book-content">
                                <div className="visit-book">
                                    <FontAwesomeIcon icon={faEye} />
                                    <h4>Visit(40000)</h4>
                                </div>
                                <div className="report-book">
                                    <FontAwesomeIcon icon={faFlag} />
                                    <h4>Report</h4>
                                </div>
                                   
                            </div>
                            
                        </div>
                        <div className="share-book">
                            <div>
                                <FontAwesomeIcon icon={faShareAlt} className="share-icon" />
                                <h4>Share this book</h4>
                            </div>
                            <div className="share-book-icons">
                                <FontAwesomeIcon icon={faFacebookF} className="share-icon" />
                                <FontAwesomeIcon icon={faTelegram} className="share-icon" />
                                <FontAwesomeIcon icon={faWhatsapp} className="share-icon" />
                                <FontAwesomeIcon icon={faTwitter} className="share-icon" />
                            </div>
                        </div>
                        <div className="book-author">
                            <h2>Author: {book.authors[0].name}</h2>
                            <hr />
                            <p>{book.authors[0].bio}</p>
                            <p>William Shakespeare (1564–1616) is widely regarded as one of the greatest playwrights and poets in the English language. Born in Stratford-upon-Avon, England, he wrote a vast array of works, including 39 plays, 154 sonnets, and two long narrative poems. His plays, such as Romeo and Juliet, Hamlet, Othello, Macbeth, and A Midsummer Night's Dream, explore timeless themes of love, power, jealousy, betrayal, and ambition. Shakespeare's mastery of language and deep understanding of human nature</p>
                            <div className="bookSection">

                            <h2>Related Books</h2>

                            <div className="bookSectionContent">
                                
                                {[0, 1, 2,4].map((idx) => {
                                    const work = book.authors[0].authorWorks[(index + idx) % book.authors[0].authorWorks.length];
                                    return (
                                        <div key={idx}>
                                            <img src={work.image} alt={work.title} />
                                            <h3>{work.title}</h3>
                                        </div>
                                    );
                                })}
                              
                            </div>
                        </div>
                        </div>
                        <div className="add-book-review-section">
                             <div className="add-book-review-header">
                                <div className="add-book-review-title">
                             <FontAwesomeIcon icon={faBook} className="icon" />
                             <h3>Reviews about {book.title}</h3>
                             </div>
                             <div className="add-book-review">
                                <FontAwesomeIcon icon={faPlus} className="add-review-icon" />
                                <h3>Add a review</h3>
                                </div>
                             </div>
                            <div className="add-book-review-content"> 
                                <div className="profile-review">
                                    <div className='profile-review-img'><img src={profile1} alt='profile' /></div>
                                    <div className="profile-review-information">
                                        <h4>John Doe</h4>
                                        <h5>January 1, 2022</h5>
                                        <p>Great book! I really enjoyed reading this book.</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="profile-review">
                                    <div className='profile-review-img'><img src={profile1} alt='profile' /></div>
                                    <div className="profile-review-information">
                                        <h4>John Doe</h4>
                                        <h5>January 1, 2022</h5>
                                        <p>Great book! I really enjoyed reading this book.</p>
                                    </div>

                                </div>
                                <hr></hr>
                                <div className="profile-review">
                                    <div className='profile-review-img'><img src={profile1} alt='profile' /></div>
                                    <div className="profile-review-information">
                                        <h4>John Doe</h4>
                                        <h5>January 1, 2022</h5>
                                        <p>Great book! I really enjoyed reading this book.</p>
                                    </div>

                                </div>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="add-book-quote-section">
                             <div className="add-book-quote-header">
                                <div className="add-book-quote-title">
                                <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                             <h3>all Quotes about {book.title}</h3>
                             </div>
                             <div className="add-book-quote">
                                <FontAwesomeIcon icon={faPlus} className="add-review-icon" />
                                <h3>Add a Quote</h3>
                                </div>
                             </div>
                            <div className="add-book-quote-content">
                                <div className="profile-quote">
                                        <p>Great book! I really enjoyed reading this book.</p>
                                </div>
                                <hr></hr>
                                <div className="profile-quote">
                                        <p>Great book! I really enjoyed reading this book.</p> 
                                </div>
                                <hr></hr>
                                <div className="profile-quote">
                                    <p>Great book! I really enjoyed reading this book.</p>
    
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <Footer/>
        </>
    );
}
