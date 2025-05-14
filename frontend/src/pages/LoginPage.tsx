import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/login';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        navigate('/app/overview'); 
      }
    }, [navigate]);
  return <LoginForm />;
};

export default LoginPage;
