import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect (() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const user = {email, password};
      const response = await api.post('/api/auth/login', user, {withCredentials: true});
      localStorage.setItem('token', response.data.token);
      console.log('Login Success');
      navigate('/home');
    }catch(err){
      console.log('Login Error', err);
    }
  }

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'> Login </button>
      </form>
    </div>
  )
}

export default LoginPage;