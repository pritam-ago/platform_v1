import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <>
      <h1>Profile</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default ProfilePage;
