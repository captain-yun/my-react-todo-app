import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/todos"
          element={isAuthenticated ? <TodoPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? '/todos' : '/login'} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
