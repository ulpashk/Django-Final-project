import React from 'react';

export function StudyNotesContent() {
  return (
    <div className="prose max-w-none">
      {' '}
      {/* Используйте плагин @tailwindcss/typography для стилизации текста */}
      <h2 className="text-2xl font-bold mb-4">Introduction to Sociology</h2>
      <h3 className="text-xl font-semibold mb-3">Sociology Study Notes</h3>
      <p>
        <strong>Sociology:</strong> The systematic and scientific study of human
        social behavior, society, and social interaction.
      </p>
      <p>
        <strong>Subject of Sociology:</strong> The study of society and social
        interaction.
      </p>
      <ul>
        <li>
          <strong>Society:</strong> A group of people who reside in a defined
          area, share a culture, and interact.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mt-6 mb-3">
        Founders and Key Theorists
      </h3>
      <ul>
        <li>
          <strong>Auguste Comte:</strong>
        </li>
        <ul>
          <li>Founder of sociology.</li>
          <li>First introduced the term "Sociology".</li>
          <li>
            Believed social thinkers to believe sociological methods could be
            applied to human behavior.
          </li>
        </ul>
        <li>
          <strong>Karl Marx:</strong>
        </li>
        <ul>
          <li>Believed societies changed due to class struggle.</li>
          <li>Believed the history of society was one of class struggle.</li>
          <li>
            In Marx's theory, the main governing force behind social
            classification is the presence or absence of ownership of the means
            of production.
          </li>
          <li>
            Conflict theory: inequalities contribute to social differences based
            on power. (Inspired by Marx and F. Engels)
          </li>
          <li>
            According to Marx, owners (bourgeoisie) exploited workers
            (proletariat) and paid them as little as possible, exploiting them
            in their own favor.
          </li>
        </ul>
        {/* Добавьте остальное содержимое заметок */}
      </ul>
      {/* ... остальное содержимое Study Notes ... */}
    </div>
  );
}
