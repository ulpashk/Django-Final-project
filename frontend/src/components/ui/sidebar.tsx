import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeItem?:
    | 'overview'
    | 'my-library'
    | 'generate-ai'
    | 'mobile-apps'
    | 'help-center'
    | 'settings';
  onNewTestClick?: () => void;
  onGenerateAiClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const isOverview = location.pathname === '/app/overview';
  const isLibrary = location.pathname === '/app/library';

  const isActive = (itemKey: string) => activeItem === itemKey;
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token (adjust if using cookies or other storage)
    localStorage.removeItem('accessToken');

    // Redirect to login page
    navigate('/login');
  };
  return (
    <aside className="w-64 bg-white p-6 flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="mb-8">
          <span className="text-2xl font-bold text-gray-800">examica</span>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-3 hover:bg-purple-700 transition duration-300">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          {t('sidebarNewTestButton')}
        </button>
        <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md flex items-center justify-center mb-6 hover:bg-teal-600 transition duration-300">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
          {t('sidebarGenerateAI')}
        </button>
        <span className="text-xs font-semibold text-gray-500 uppercase mb-4 block">
          {t('sidebarMenuLabel')}
        </span>
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                to="/app/overview"
                className={`flex items-center p-2 rounded-md transition duration-150 ${
                  isOverview
                    ? 'bg-gray-100 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <svg
                  className={`w-5 h-5 mr-3 ${
                    isOverview
                      ? 'text-blue-600'
                      : 'text-gray-400 group-hover:text-blue-600'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {t('sidebarOverview')}
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/app/library"
                className={`flex items-center p-2 rounded-md transition duration-150 ${
                  isActive('my-library')
                    ? 'bg-gray-100 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <svg
                  className={`w-5 h-5 mr-3 ${
                    isLibrary
                      ? 'text-blue-600'
                      : 'text-gray-400 group-hover:text-blue-600'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2zM10 4h4v4h-4V4z"
                  ></path>
                </svg>
                {t('sidebarMyLibrary')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-600 transition duration-150 p-2 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                {t('sidebarMobileApps')}
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-600 transition duration-150 p-2 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.72.145-1.233.373-1.424.593a.997.997 0 00-.457.792v4m0-8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {t('sidebarHelpCenter')}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-600 transition duration-150 p-2 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                {t('sidebarSettings')}
              </a>
            </li>
            <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition duration-150 p-2 rounded-md w-full text-left"
                >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1"
                  />
                </svg>
                {t('sidebarLogout')}
                </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
