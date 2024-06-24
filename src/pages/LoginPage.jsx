import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await api.post('/auth/login', { username, password });

    if (response.statusText == 'OK') {
      localStorage.setItem('accessToken', response.data.accessToken);
      setIsAuthenticated(true);
      navigate('/todos');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
