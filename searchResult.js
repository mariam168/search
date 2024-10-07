import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import searchIcon from './searchIcon.png';

export default function SearchResult() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [searchValue, setSearchValue] = useState(query || ''); 
    const [results1, setResults1] = useState([]);
    const [results2, setResults2] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [executionTime1, setExecutionTime1] = useState(null);
    const [executionTime2, setExecutionTime2] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchGoogleRankData = async () => {
            const googleRankUrl = `https://7f22-41-46-14-41.ngrok-free.app/googleRank/${query}`;
            const startTime = performance.now();

            try {
                const response = await fetch(googleRankUrl);
                const data = await response.json();
                const endTime = performance.now();
                setResults1(data);
                setExecutionTime1(((endTime - startTime) / 1000).toFixed(2));
            } catch (error) {
                console.error('Error fetching Google Rank data:', error);
                setError(error);
            }
        };

        const fetchTfidfData = async () => {
            const tfidfUrl = `https://7f22-41-46-14-41.ngrok-free.app/TFIDF/${query}`;
            const startTime = performance.now();

            try {
                const response = await fetch(tfidfUrl);
                const data = await response.json();
                const endTime = performance.now();
                setResults2(data);
                setExecutionTime2(((endTime - startTime) / 1000).toFixed(2));
            } catch (error) {
                console.error('Error fetching TFIDF data:', error);
                setError(error);
            }
        };

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            await Promise.all([fetchGoogleRankData(), fetchTfidfData()]);

            setLoading(false);
        };

        fetchData();
    }, [query]);

    const renderResults = (results) => {
        return results.map((item, index) => (
            <div key={index} className='results'>
                <h4>{item.Title}</h4>
                <a href={item.URL} target="_blank" rel="noopener noreferrer">{item.URL}</a>
                <p>{item.Description}</p>
            </div>
        ));
    };

    return (
        <div>
            <div className='searchfromResultPage'>
                <div className='resultSearch'>
                    <input
                        type='search'
                        className='search'
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        placeholder='Search ...'
                        required
                    />
                    <Link to={`/searchResult?query=${encodeURIComponent(searchValue)}`}>
                        <img src={searchIcon} alt='search' />
                    </Link>
                </div>
            </div>

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}

            {query && !loading && !error && (results1.length === 0 && results2.length === 0) && (
                <div className='result-not-found'>
                    <h2 style={{ marginLeft: '40%' }}>Result not found</h2>
                </div>
            )}

            {query && !loading && !error && (results1.length > 0 || results2.length > 0) && (
                <div className='apis'>
                    <div className='apisContent'>
                        <div className='api1'>
                            <h3>Google Page Rank</h3>
                            <p>Execution Time: {executionTime1} seconds</p>
                            {renderResults(results1)}
                        </div>
                        <div className='logo' id="resultLogo"
                            style={{
                                width: '70px',
                                height: '70px'
                            }}
                        ></div>
                        <div className='api2'>
                            <h3>TF-IDF</h3>
                            <p>Execution Time: {executionTime2} seconds</p>
                            {renderResults(results2)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
