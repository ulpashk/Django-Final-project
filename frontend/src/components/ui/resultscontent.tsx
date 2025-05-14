import React from 'react';
// Возможно, вам понадобится изображение
// import noResultsImage from '../assets/no_results.svg';

export function ResultsContent() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow">
      {/* Иллюстрация (замените на ваш путь к изображению) */}
      {/* <img src={noResultsImage} alt="No Results" className="w-48 h-48 mb-6" /> */}
      {/* Заглушка SVG иллюстрации */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-48 w-48 text-gray-400 mb-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
        ></circle>
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="12"
        ></line>
        <line
          x1="12"
          y1="16"
          x2="12.01"
          y2="16"
        ></line>
        <path d="M9 10a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0v-2z"></path>
      </svg>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">No results</h3>
      <p className="text-gray-600 mb-6">
        You haven't completed any tests yet. Click below to start a new one.
      </p>
      <button className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition-colors">
        Start test
      </button>
    </div>
  );
}
