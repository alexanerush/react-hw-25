import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export interface CustomUser {
  name: string;
  email: string;
}

interface LoginProps {
  user: CustomUser | null;
  onBackHome: () => void;
  setUser: (user: CustomUser | null) => void;
}

const Login: React.FC<LoginProps> = ({ user, onBackHome, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validate = (): boolean => {
    if (!email.trim() || !password.trim()) {
      setError('All fields are required');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email format is invalid');
      return false;
    }

    setError('');
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      setUser({
        name: firebaseUser.displayName || 'User',
        email: firebaseUser.email || '',
      });

      setEmail('');
      setPassword('');
      navigate('/welcome');
    } catch (err) {
      console.error(err);
      setError('Login failed. Check your credentials.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setEmail('');
    setPassword('');
    navigate('/');
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h1>{user ? 'Goodbye or Continue shopping'  : 'Log In'}</h1>

      {user ? (
        <div className="button-container">
          <Button onClick={handleLogout} className="button--more">Logout</Button>
          <Button onClick={onBackHome} className="button--menu">Go Home</Button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form-container">
          <div className="login-form">
            <p>
              <span>Email</span>
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
      )}

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default Login;
