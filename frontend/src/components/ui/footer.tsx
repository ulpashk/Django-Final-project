import React from 'react';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Используем useTranslation

  return (
    <footer className="bg-gray-100 py-12 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Основная часть футера с колонками */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {' '}
          {/* Адаптивная сетка */}
          {/* Колонка 1: Логотип, описание, соцсети, ссылки на приложения */}
          <div>
            {/* Логотип */}
            <div className="flex items-center mb-4">
              {/* Замените на ваш компонент логотипа или тег img */}
              <span className="text-2xl font-bold">examica</span>
            </div>
            {/* Описание */}
            <p className="text-sm mb-6 text-gray-600">
              {t('footerDescription')} {/* Ключ перевода */}
            </p>
            {/* Иконки соцсетей */}
            <div className="flex space-x-4 mb-6">
              {/* Замените href="#" и добавьте иконки SVG или компоненты */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-600"
              >
                {/* Пример SVG - замените на актуальные иконки */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.173v-9.294h-3.13V11.01h3.13V8.567c0-3.104 1.893-4.785 4.659-4.785 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.801.715-1.801 1.764v2.313h3.587l-.467 3.695h-3.12V24h6.68c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-blue-600"
              >
                {/* Пример SVG - замените на актуальные иконки */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.85-.149 3.225-1.694 4.744-4.919 4.919-1.266.058-1.644.069-4.85.069-3.205 0-3.584-.012-4.85-.069-3.225-.149-4.743-1.691-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849 0-3.252 1.691-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.668.014-4.949.072C2.75 0.2 1.794 1.154.923 2.023.2 2.9.08 4.035.028 5.316.012 6.507 0 6.879 0 10.149c0 3.271.012 3.64.028 4.919.058 1.281.148 2.416.923 3.29.871.868 1.827 1.822 3.099 1.949 1.28.058 1.65.072 4.919.072 3.271 0 3.64-.014 4.919-.072 1.271-.057 2.416-.148 3.29-0.923.868-.871 1.822-1.827 1.949-3.099.058-1.28.072-1.649.072-4.919 0-3.271-.014-3.64-.072-4.919C23.8 4.035 23.72 2.9 22.946 2.023 22.075 1.154 21.02 0.2 19.751 0.072 18.47.014 18.052 0 14.781 0H12zm0 6.868c-3.45 0-6.233 2.782-6.233 6.233 0 3.45 2.783 6.232 6.233 6.232 3.45 0 6.233-2.782 6.233-6.232 0-3.45-2.783-6.233-6.233-6.233zM12 17.37c-2.93 0-5.303-2.373-5.303-5.303S9.07 6.763 12 6.763s5.303 2.373 5.303 5.303-2.373 5.304-5.303 5.304zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-600 hover:text-blue-600"
              >
                {/* Пример SVG - замените на актуальные иконки */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.615 3.184c-3.613-.4-8.4-.4-12.014 0C3.89 3.58 2.25 5.135 1.917 6.843c-.398 1.82-.398 4.432 0 6.25s.313 3.074 1.598 4.36c3.614.4 8.4.4 12.014 0 1.533-.17 3.074-1.258 3.405-2.966.399-1.82.399-4.432 0-6.25a4.912 4.912 0 00-.277-1.342c-.407-1.186-1.126-2.042-2.273-2.42zM9.998 12.396v-2.8c0-.392.4-1.112 1.069-.75l2.411 1.397c.67.386.67 1.016 0 1.398l-2.412 1.396c-.668.362-1.068-.367-1.068-.75z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-600"
              >
                {/* Пример SVG - замените на актуальные иконки */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.73v20.54c0 .95.8 1.73 1.77 1.73h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .77 23.2 0 22.23 0zM7.08 20.3H3.53V8.16h3.55V20.3zM5.31 6.71c-1.21 0-2.01-.81-2.01-1.83 0-1 .8-1.83 2.05-1.83 1.22 0 2.01.83 2.01 1.83-.04 1.02-.8 1.83-2.05 1.83zm15 13.59h-3.55v-6.3c0-.71-.02-1.62-.99-2.37-1.01-.8-2.32-.79-3.13-.01-.9.88-.83 2.03-.83 2.47v6.21H8.8V8.16h3.4v1.47c.49-.94 1.78-1.8 3.36-1.8 3.6 0 4.26 2.37 4.26 5.42V20.3z" />
                </svg>
              </a>
            </div>
            {/* Ссылки на приложения */}
            <div className="flex flex-col space-y-4">
              {/* Замените href="#" и добавьте изображения или компоненты кнопок App Store/Google Play */}
              <a
                href="#"
                aria-label="Download on the App Store"
              >
                {/* Замените src на путь к изображению кнопки App Store */}
                <img
                  src="/path/to/app-store-badge.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
              >
                {/* Замените src на путь к изображению кнопки Google Play */}
                <img
                  src="/path/to/google-play-badge.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
          {/* Колонка 2: Функции */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footerFunctionsTitle')} {/* Ключ перевода */}
            </h3>
            <ul>
              {/* Пункты списка (используем переводы) */}
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('howItWorks')} {/* Используем существующий ключ */}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('testGenerator')} {/* Используем существующий ключ */}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('paperTests')} {/* Используем существующий ключ */}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('onlineTests')} {/* Используем существующий ключ */}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('commentsAndRatings')} {/* Используем существующий ключ */}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('mobileApp')} {/* Используем существующий ключ */}
                </a>
              </li>
            </ul>
          </div>
          {/* Колонка 3: Компания */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footerCompanyTitle')} {/* Ключ перевода */}
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('termsOfService')} {/* Ключ перевода */}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('privacyPolicy')} {/* Ключ перевода */}
                </a>
              </li>
            </ul>
          </div>
          {/* Колонка 4: Поддержка */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footerSupportTitle')} {/* Ключ перевода */}
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {t('contact')} {/* Используем существующий ключ */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Секция копирайта */}
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          {' '}
          {/* Верхняя граница, верхний отступ, центрирование текста */}
          {t('copyright', { year: new Date().getFullYear() })}
          {/* Ключ перевода с динамическим годом */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
