
import React from 'react';
import { Link } from 'react-router-dom';
export default function Header({ toggleSearch }) {
  return (
    <header className='header'>
      <div className='top-header'>
        <div className='top-header-content'>
    <ul className='logo'>
        <li>
          <h2>LITER<span>TYRE</span></h2>
        </li>
      </ul>

      <ul className='middle-nav'>
  <li className={window.location.pathname === '/' ? 'active' : ''}>
    <Link to='/'><h4>Home</h4></Link>
  </li>
  <li className={window.location.pathname === '/Books' ? 'active' : ''}>
    <Link to='/Books'><h4>Books</h4></Link>
  </li>
  <li className={window.location.pathname === '/Author' ? 'active' : ''}>
    <Link to='/Author'><h4>Authors</h4></Link>
  </li>
  <li onClick={toggleSearch}><h4>Search</h4></li>
  <li className={window.location.pathname === '/AddBook' ? 'active' : ''}>
    <Link to='/AddBook'><h4>Add Book</h4></Link>
  </li>
  <li className={window.location.pathname === '/OrderBook' ? 'active' : ''}>
    <Link to='/OrderBook'><h4>Order Book</h4></Link>
  </li>
</ul>


      
      <ul className='sign-button'>
      
        <li>
        <Link to='/SignUp'>
         <button>Sign Up</button>
         </Link>
        </li>
     
     
        <li>
        <Link to='/SignIn'>
          <button>Sign In</button>
         </Link> 
        </li>
      
    </ul>
    </div>
    </div>
    
    </header>
  );
}
