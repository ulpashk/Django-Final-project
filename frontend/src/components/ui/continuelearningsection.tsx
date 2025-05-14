import React from 'react';

// Пример данных для списка тестов
const tests = [
  {
    id: 1,
    title: 'Sociology Fundamentals Test',
    questions: 50,
    flashcards: 43,
    date: '14.05.2025',
    progress: 0, // Прогресс в процентах
  },
  {
    id: 2,
    title: 'Political Science Fundamentals Test',
    questions: 50,
    flashcards: 43,
    date: '13.05.2025',
    progress: 0,
  },
  {
    id: 3,
    title: "Henri Fayol's 14 Principles of Management",
    questions: 25,
    flashcards: 48,
    date: '12.05.2025',
    progress: 0,
  },
  {
    id: 4,
    title: 'Enterprise Architecture - Lesson 2',
    questions: 40,
    flashcards: 43,
    date: '11.05.2025',
    progress: 0,
  },
  {
    id: 5,
    title: 'Understanding the Benefits of Games',
    questions: 30,
    flashcards: 43,
    date: '08.05.2025',
    progress: 0,
  },
];

export function ContinueLearningSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Continue learning
        </h2>
        <a
          href="#"
          className="text-blue-600 hover:underline text-sm"
        >
          See all tests &gt;
        </a>
      </div>

      {/* Список тестов */}
      <div className="space-y-4">
        {tests.map((test) => (
          <div
            key={test.id}
            className="border border-gray-200 rounded-md p-4 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {/* Информация о тесте */}
            <div className="flex-1 mr-4">
              {' '}
              {/* flex-1 чтобы занимал доступное пространство */}
              <h3 className="text-lg font-semibold text-gray-800">
                {test.title}
              </h3>
              <div className="text-sm text-gray-600 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.154-.906.564-.906 1.207v4m0 1a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                  Questions: {test.questions}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h10m-9 4h8m-10 4H4a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2z"
                    />
                  </svg>
                  Flashcards: {test.flashcards}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {test.date}
                </span>
              </div>
            </div>

            {/* Прогресс */}
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>{test.progress}%</span>
              {/* Базовый индикатор прогресса (можно улучшить) */}
              <div className="w-20 bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-600 h-1.5 rounded-full"
                  style={{ width: `${test.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
