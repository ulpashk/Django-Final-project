import React from 'react';

// Пример данных для карточек
const flashcards = [
  {
    id: 1,
    front: 'Family as a social institution',
    back: 'The family is a primary social institution that plays a crucial role in socialization and the nurturing of children.',
    memoryTip: 'Memory tip: Family is the "first teacher" of social norms.',
  },
  {
    id: 2,
    front: 'Outcomes of social interaction',
    back: 'Social interaction leads to the establishment of social norms, relationships, and roles, which are essential for societal function and structure.',
    memoryTip: 'Memory tip: Interaction creates the "fabric of society".',
  },
  {
    id: 3,
    front: "Secondary socialization's role",
    back: 'Secondary socialization occurs outside the family and involves learning societal norms and skills through schools and peer interactions.',
    memoryTip:
      'Memory tip: Secondary socialization expands "social skills beyond home".',
  },
  {
    id: 4,
    front: 'Cultural assimilation',
    back: "Cultural assimilation occurs when minority cultures adopt the dominant culture's norms and values, often leading to a loss of original cultural identity.",
    memoryTip: 'Memory tip: Assimilation = merging into majority culture.',
  },
  // Добавьте другие карточки по аналогии
];

export function FlashcardsContent() {
  return (
    <div className="space-y-6">
      {/* Поле поиска для карточек (если нужно) */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {/* Кнопка редактирования (опционально) */}
        <button className="text-blue-600 hover:underline text-sm">Edit</button>
      </div>

      {/* Список карточек */}
      <div className="space-y-4">
        {flashcards.map((flashcard, index) => (
          <div
            key={flashcard.id}
            className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-200"
          >
            {/* Номер карточки */}
            <div className="p-3 bg-gray-100 text-gray-700 font-semibold text-center md:text-left flex items-center justify-center">
              Flashcard {index + 1}
            </div>
            {/* Содержимое карточки */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Лицевая сторона */}
              <div className="p-4 flex items-center justify-center text-center">
                <p className="text-gray-800 font-semibold">{flashcard.front}</p>
              </div>
              {/* Обратная сторона */}
              <div className="p-4">
                <p className="text-gray-700 mb-2">{flashcard.back}</p>
                <p className="text-blue-600 text-sm italic">
                  {flashcard.memoryTip}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
