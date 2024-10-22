import React, { useState } from 'react';
import signImage from '../books-images/signUp.jfif';
import googleIcon from '../books-images/googleIcon.png';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword ,setConfirmPassword] =useState('')
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(name, email, password ,confirmPassword);
    if (errors.length > 0) {
      setErrors(errors);
    } else {

      submitFormData(name, email, password ,confirmPassword);
    }
  };

  const validateForm = (name, email, password ,confirmPassword) => {
    const errors = [];
    if (!name) {
      errors.push('Name is required');
    }
    if (!email) {
      errors.push('Email is required');
    }
    if (!password) {
      errors.push('Password is required');
    }
    if (!confirmPassword) {
      errors.push('confirm your password');
    }
    return errors;
  };

  const submitFormData = (name, email, password ,confirmPassword) => {
    console.log('Form data submitted:', { name, email, password, confirmPassword});
  };

  return (
    <div className='sign'>
        
   <div className='signContent'>
    <img src={signImage} alt="signImage" className='signImage'></img>
    <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
      
        <input type="text" value={name} onChange={(event) => setName(event.target.value) } placeholder="Enter your Name" />
      
 
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter your Email' />
     
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter your Password'/>
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder='confirm your password'/>
        <p>Already has account <a href='/'>Sign In</a></p>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <button type="submit" className='joinUs'>Join US</button>
      <div className='or'><div></div> <span>OR</span> <div></div></div>
      <button className='googleSign'><img src={googleIcon} alt='googleIcon'></img><span>Sign Up with Google</span></button>
    </form>
    </div>
    </div>
  );
}

export default SignUp;