import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Button from '../components/Button.jsx';
import useFetch from '../hooks/useFetch';
import './Login.scss';

const LoginPage = ({ user, onBackHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const withLogger = useFetch();
  const loginWithLogger = withLogger(signInWithEmailAndPassword);
  const logoutWithLogger = withLogger(signOut);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !password.trim()) {
      setError('All fields are required');
      return false;
    }

    if (!emailRegex.test(email)) {
      setError('Email format is invalid');
      return false;
    }

    setError('');
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await loginWithLogger(auth, email, password);
      setEmail('');
      setPassword('');
    } catch {
      setError('Login failed. Check credentials.');
    }
  };

  const handleLogout = async () => {
    await logoutWithLogger(auth);
    setEmail('');
    setPassword('');
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h1>{user ? 'Logged In' : 'Log In'}</h1>

      {user ? (
        <>
          <Button onClick={handleLogout} className="button--more">Logout</Button>
          <Button onClick={onBackHome} className="button--menu">Go Home</Button>
        </>
      ) : (
        <div className="login-form-container">
          <form onSubmit={handleLogin}>
            <div className="login-form">
              <p>
                <span>User</span>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
            </div>

            <div className="button-container">
              <Button type="submit" className="button--submit">Submit</Button>
              <Button type="button" onClick={handleCancel} className="button--cancel">Cancel</Button>
            </div>
          </form>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;