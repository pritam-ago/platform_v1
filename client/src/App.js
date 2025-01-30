import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CreateTaskPage from './pages/CreateTaskPage';
import { Navigate } from 'react-router-dom';

const App = ()=> {
    const isAuthenticated = () => {
      return !!localStorage.getItem('token');
    };

    return (
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/home"
            element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/profile"
            element={isAuthenticated() ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/createTask"
            element={isAuthenticated() ? <CreateTaskPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    );
};


export default App;
