import React from 'react';
import './index.css';
import SignUp from './js/SignUp';
import SignIn from './js/SignIn';
import './css/form.css';
import './css/Header.css'
import Home from './js/Home';
import './css/Home.css';
import OrderBook from './js/OrderBook';
import './css/OrderBook.css';
import Books from './js/Books';
import './css/categories.css';
import Author from './js/Author';
import './css/responsive.css'
import AuthorProfile from './js/authorProfile';
import './css/authorProfile.css';
import BookProfile from './js/bookProfile';
import './css/BookProfile.css';
import './css/SearchBar.css';
import './css/Footer.css';
import './js/Footer';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/OrderBook' element={<OrderBook />}></Route>
        <Route path='/Books' element={<Books/>}></Route>
        <Route path='/Author' element={<Author/>}></Route>
        <Route path='/AuthorProfile/:id' element={<AuthorProfile/>}></Route>
        <Route path='/BookProfile/:id' element={<BookProfile/>}></Route>  
      </Routes>
    </Router>
  );
}

export default App;

