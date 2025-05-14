import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import testgen from '../../assets/test-generator.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const AIGeneratorSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-gray-100 py-16 text-gray-800 pb-0">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-bold leading-tight mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {t('aiGeneratorMainTitle')}
          </motion.h1>

          <motion.p
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {t('aiGeneratorSubtitle')}
          </motion.p>

          <motion.a
            href="#"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300 mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {t('getStartedButton')}
          </motion.a>

          <motion.img
            src={testgen}
            alt="AI Test Generator Interface Mockup"
            className="rounded-lg shadow-xl max-w-full h-auto mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
          />
        </div>
      </section>

      <section className="bg-white py-16 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {t('creationMethodsTitle')}
          </motion.h2>

          <motion.p
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {t('creationMethodsSubtitle')}
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 p-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index + 2}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {index === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    )}
                    {index === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    )}
                    {index === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(
                    ['methodAiTitle', 'methodImportTitle', 'methodCreateTitle'][
                      index
                    ]
                  )}
                </h3>
                <p className="text-gray-600">
                  {t(
                    [
                      'methodAiDescription',
                      'methodImportDescription',
                      'methodCreateDescription',
                    ][index]
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AIGeneratorSection;
