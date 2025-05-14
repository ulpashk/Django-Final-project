import React from 'react';

// Пример данных для вопросов
const questions = [
  {
    id: 1,
    text: 'Who is considered the founder of sociology?',
    type: 'single-choice',
    options: [
      { id: 'a', text: 'Karl Marx', isCorrect: false },
      { id: 'b', text: 'Auguste Comte', isCorrect: true },
      { id: 'c', text: 'Emile Durkheim', isCorrect: false },
      { id: 'd', text: 'Herbert Spencer', isCorrect: false },
    ],
    explanation: 'Auguste Comte is recognized as the founder of sociology.',
  },
  {
    id: 2,
    text: 'Sociology as a science is defined as:',
    type: 'single-choice',
    options: [
      {
        id: 'a',
        text: 'the systematic and scientific study of human social behavior',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'a description of different cultures',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'the investigation personal development',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'a theoretical perspective that focuses on inequality and poverty',
        isCorrect: false,
      },
    ],
    explanation:
      'Sociology is defined as the systematic and scientific study of human social behavior.',
  },
  // Добавьте другие вопросы по аналогии
];

export function QuestionsContent() {
  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <div
          key={question.id}
          className="bg-white p-6 rounded-lg shadow"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Question {index + 1}
            </h3>
            <span className="text-sm text-gray-500">
              {question.type.replace('-', ' ')}
            </span>{' '}
            {/* Отображаем тип вопроса */}
          </div>

          <p className="text-gray-700 mb-4">{question.text}</p>

          {/* Варианты ответов */}
          <div className="space-y-3">
            {question.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center p-3 rounded-md border ${option.isCorrect ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
              >
                {/* Иконка (например, кружок или галочка/крестик) */}
                <div
                  className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center text-white text-xs ${option.isCorrect ? 'bg-green-500' : 'bg-gray-400'}`}
                >
                  {option.id.toUpperCase()}
                </div>
                <span
                  className={`text-gray-800 ${option.isCorrect ? 'font-semibold text-green-800' : ''}`}
                >
                  {option.text}
                </span>
              </div>
            ))}
          </div>

          {/* Объяснение */}
          {question.explanation && (
            <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-blue-800 text-sm rounded-r-md">
              <span className="font-semibold">Explanation:</span>{' '}
              {question.explanation}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
