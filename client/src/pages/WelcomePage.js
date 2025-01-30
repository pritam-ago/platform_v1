import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

const WelcomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    
    if (token) {
      navigate('/home');
    }
  }, [token]);

  return (
    <>
    <h1>Welcome to Task Chain</h1>
    <button onClick={() => navigate('/login')}>Login</button>
    <button onClick={() => navigate('/signup')}>Signup</button>
    </>
  )
}

export default WelcomePage;
