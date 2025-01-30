import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <h1>Welcome to Task Chain</h1>
    <button onClick={() => navigate('/login')}>Login</button>
    <button onClick={() => navigate('/signup')}>Signup</button>
    </>
  )
}

export default WelcomePage;
