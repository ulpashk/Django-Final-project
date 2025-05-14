import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password, newsletter, ageConfirmed, termsAccepted });
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  const handleGitHubSignUp = () => {
    console.log('Sign up with GitHub');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="px-8 py-6 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <span className="text-2xl font-bold text-gray-800">examica</span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          {t('registrationTitle')}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {t('registrationSubtitle')}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-1"
                htmlFor="regEmail"
              >
                {t('loginEmailLabel')}
              </label>
              <input
                type="email"
                id="regEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('loginEmailPlaceholder') || ''}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 mb-1"
                htmlFor="regPassword"
              >
                {t('loginPasswordLabel')}
              </label>
              <input
                type="password"
                id="regPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('loginPasswordPlaceholder') || ''}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-start mb-3">
              <input
                type="checkbox"
                id="newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="mr-2 mt-1"
              />
              <label
                htmlFor="newsletter"
                className="text-sm text-gray-700"
              >
                {t('registrationNewsletter')}
              </label>
            </div>

            <div className="flex items-start mb-3">
              <input
                type="checkbox"
                id="age"
                checked={ageConfirmed}
                onChange={(e) => setAgeConfirmed(e.target.checked)}
                className="mr-2 mt-1"
              />
              <label
                htmlFor="age"
                className="text-sm text-gray-700"
              >
                {t('registrationAge')}
              </label>
            </div>

            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2 mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 leading-tight"
              >
                {t('registrationAgreePart1')}{' '}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  {t('termsOfService')}
                </a>{' '}
                {t('registrationAgreePart2')}{' '}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  {t('privacyPolicy')}
                </a>
                .
              </label>
            </div>

            <div className="flex items-baseline justify-between mb-4">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                {t('registrationButton')}
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handleGoogleSignUp}
              className="flex items-center px-4 py-2 w-full justify-center border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FcGoogle className="mr-2 text-lg" />
              {t('loginWithGoogle') || 'Login with Google'}
            </button>
            <button
              onClick={handleGitHubSignUp}
              className="flex items-center px-4 py-2 w-full justify-center border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FaGithub className="mr-2 text-lg" />
              {t('loginWithGithub') || 'Login with GitHub'}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {t('registrationHaveAccount')}
            <Link
              to="/login"
              className="text-blue-600 hover:underline ml-1"
            >
              {t('registrationLoginLink')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
