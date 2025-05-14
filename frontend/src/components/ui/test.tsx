import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Или из '@tanstack/react-router'

// Компоненты для содержимого вкладок (создадим их позже)
import { StudyNotesContent } from '../ui/studynotescontent';
import { FlashcardsContent } from '../ui/flashcardscontent';
import { QuestionsContent } from '../ui/questionscontent';
import { ResultsContent } from '../ui/resultscontent';

export function TestDetailPage() {
  // Получаем ID теста из параметров маршрута (пример для react-router-dom)
  // const { testId } = useParams();

  // Пример данных о тесте (замените на реальные данные)
  const testData = {
    id: 'sociology-fundamentals', // Используйте реальный ID теста
    title: 'Sociology Fundamentals Test',
    questions: 50,
    flashcards: 43,
    mastery: 'N/A', // Пример: Уровень мастерства
    progress: 0, // Прогресс в процентах
  };

  const [activeTab, setActiveTab] = useState('study-notes'); // Активная вкладка

  const renderTabContent = () => {
    switch (activeTab) {
      case 'study-notes':
        return <StudyNotesContent />;
      case 'flashcards':
        return <FlashcardsContent />;
      case 'questions':
        return <QuestionsContent />;
      case 'results':
        return <ResultsContent />;
      default:
        return <StudyNotesContent />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Верхняя панель */}
      <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Кнопка/Ссылка "Назад" */}
          <Link
            to="/app/overview"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            {' '}
            {/* Укажите правильный путь "Назад" */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          {/* Название теста */}
          <h1 className="text-xl font-semibold text-gray-800">
            {testData.title}
          </h1>
        </div>

        {/* Статистика и кнопки справа */}
        <div className="flex items-center gap-6">
          {/* Статистика */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Questions: {testData.questions}</span>
            <span>Flashcards: {testData.flashcards}</span>
            <span>Mastery Level: {testData.mastery}</span>
            <div className="flex items-center gap-2">
              <span>{testData.progress}%</span>
              <div className="w-20 bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-600 h-1.5 rounded-full"
                  style={{ width: `${testData.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex items-center gap-4">
            <button className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
              Study with Flashcards
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
              Start test
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2m-2 0h-5m5 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0h3m-3 0h-3m2-14h1.5a2 2 0 012 2v8.75a2 2 0 01-2 2H8.25m0 0l1.5 1.5m-1.5-1.5L6.75 17m0 0H5.25M7.5 4h-.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Секция вкладок */}
      <div className="bg-white px-4 border-b border-gray-200">
        <div className="container mx-auto flex gap-6">
          {' '}
          {/* Центрируем вкладки, если нужно */}
          <button
            className={`py-2 border-b-2 ${activeTab === 'study-notes' ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-gray-800'} transition-colors`}
            onClick={() => setActiveTab('study-notes')}
          >
            Study Notes
          </button>
          <button
            className={`py-2 border-b-2 ${activeTab === 'flashcards' ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-gray-800'} transition-colors`}
            onClick={() => setActiveTab('flashcards')}
          >
            Flashcards
          </button>
          <button
            className={`py-2 border-b-2 ${activeTab === 'questions' ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-gray-800'} transition-colors`}
            onClick={() => setActiveTab('questions')}
          >
            Questions
          </button>
          <button
            className={`py-2 border-b-2 ${activeTab === 'results' ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-gray-800'} transition-colors`}
            onClick={() => setActiveTab('results')}
          >
            Results
          </button>
        </div>
      </div>

      {/* Основная область контента (зависит от активной вкладки) */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="container mx-auto bg-white p-6 rounded-lg shadow">
          {' '}
          {/* Контейнер и стили для содержимого */}
          {renderTabContent()} {/* Рендерим содержимое активной вкладки */}
        </div>
      </div>
    </div>
  );
}
