import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import hero from '../../assets/question.webp';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-500 text-white py-16 mt-18">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        {/* Animate the text */}
        <motion.div
          className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-lg mb-8">{t('heroDescription')}</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-8 transition duration-300"
            >
              {t('startFreeButton')}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Animate the image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={hero}
            alt="Mockup"
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
