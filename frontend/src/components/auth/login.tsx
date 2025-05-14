import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo_white.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Импортируем необходимые компоненты

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      navigate('/app/overview');

      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Login failed:', error.message);
      } else {
        console.error('Login failed:', error);
      }
    }
  };

  const handleGoogleLogin = (response: any) => {
    console.log('Google login response:', response);
    // Теперь нужно отправить token на сервер для получения access и refresh token
    fetch('http://127.0.0.1:8000/api/auth/google/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: response.credential, // Используем полученный token от Google
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Login successful:', data);
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        navigate('/app/overview');
      })
      .catch((err) => console.error('Google login error:', err));
  };

  const handleGithubLogin = () => {
    console.log('Login with GitHub');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt=""
            className="h-10"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          {t('loginWelcomeTitle')}
        </h2>
        <p className="text-center text-gray-600 mb-6">{t('loginSubtitle')}</p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label
                className="block text-gray-700"
                htmlFor="email"
              >
                {t('loginEmailLabel')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('loginEmailPlaceholder') || ''}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="email"
              />
            </div>

            <div className="mt-4">
              <label
                className="block text-gray-700"
                htmlFor="password"
              >
                {t('loginPasswordLabel')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('loginPasswordPlaceholder') || ''}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
              />
            </div>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                {t('loginForgotPassword')}
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              {t('loginButton')}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="flex items-center justify-center space-x-4">
            <GoogleOAuthProvider clientId="466472983341-98ntmvth9rgjgh8f52ohdci5ufpign4e.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                useOneTap
                shape="pill"
                width="300"
              />
            </GoogleOAuthProvider>

            <button
              onClick={handleGithubLogin}
              className="flex items-center px-4 py-2 w-full justify-center border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FaGithub className="mr-2 text-lg" />
              {t('loginWithGithub') || 'Login with GitHub'}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {t('loginNoAccount')}
            <Link
              to="/register"
              className="text-blue-600 hover:underline ml-1"
            >
              {t('loginCreateAccount')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
