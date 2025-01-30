import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('login', email, password)
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