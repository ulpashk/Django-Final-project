import { useLocation } from 'react-router-dom';

const MainTitle = () => {
  const location = useLocation();

  const isOverview = location.pathname === '/app/overview';
  const isLibrary = location.pathname === '/app/library';

  return (
    <>
      <header className="bg-white shadow-sm p-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          {isOverview && 'Overview'}
          {isLibrary && 'Library'}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search your tests or folders"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>
      <div className="border border-gray-100"></div>
    </>
  );
};

export default MainTitle;
