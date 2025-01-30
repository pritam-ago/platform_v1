import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/home');
      }
    }, [navigate]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        const newUser = {name, username, email, password};
        await api.post('/api/auth/signup', newUser, {withCredentials: true});
        console.log('Signup Success');
        navigate('/login');


      }catch(e){
        console.log(' Signup Error', e);
      }
    }


    return (
      <>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
          <input
          type='text'
          placeholder='Enter the username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
          <input
          type='email'
          placeholder='Enter the email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <input
          type='password'
          placeholder='Enter the password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          <button type='submit'> Signup </button>
        </form>
      </>
    );
}

export default SignupPage;
