import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_white.svg';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isFunctionDropdownOpen, setIsFunctionDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleFunctionDropdown = () => {
    setIsFunctionDropdownOpen((prev) => !prev);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  const currentLanguage = i18n.language === 'ru' ? 'Русский' : 'English';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Если прокрутили вниз более чем на 10px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white text-gray-800 shadow-md py-4'
          : 'bg-blue-600 text-white py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="flex items-center space-x-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8"
          />
        </Link>

        <ul className="flex space-x-6 items-center">
          <li className="relative">
            <div
              onClick={toggleFunctionDropdown}
              className="relative"
            >
              <button className="hover:text-gray-300 focus:outline-none flex items-center">
                {t('features')}
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isFunctionDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isFunctionDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t('onlineTests')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t('paperTests')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t('testGenerator')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t('commentsAndRatings')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t('mobileApp')}
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-300"
            >
              {t('contact')}
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="hover:text-gray-300 focus:outline-none flex items-center"
            >
              {currentLanguage}
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isLanguageDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-auto bg-white text-gray-800 rounded-md shadow-lg z-10">
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    onClick={() => changeLanguage('ru')}
                  >
                    Русский
                  </button>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                </li>
              </ul>
            )}
          </div>

          <Link
            to="/login"
            className={`border px-4 py-2 rounded-full transition-colors duration-300 ${
              scrolled
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-blue-600'
            }`}
          >
            {t('login')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
