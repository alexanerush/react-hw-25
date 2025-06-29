import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomUser } from './Login';
import Button from '../components/Button';

interface WelcomeProps {
  user: CustomUser | null;
}

const Welcome: React.FC<WelcomeProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleGoToMenu = () => {
    navigate('/menu');
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '4em', textAlign: 'center' }}>
      <h1 style={{ color: '#35B8BE', marginBottom: '2em' }}>
        Welcome, {user?.name || 'Guest'}!
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2em' }}>
        <Button onClick={handleGoToHome} className="button--home">
          Home
        </Button>
        <Button onClick={handleGoToMenu} className="button--menu">
          Menu
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
