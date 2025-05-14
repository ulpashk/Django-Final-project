import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/auth/register';

const RegisterPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        navigate('/home');
      }
    }, [navigate]);
  return <RegistrationForm />;
};

export default RegisterPage;
