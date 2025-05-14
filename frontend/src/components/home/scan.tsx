import React from 'react';
import { useTranslation } from 'react-i18next';
import scanning from '../../assets/result.webp';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScanningSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left"
        >
          <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-4 text-white">
            {t('scanningTitle')}
          </h2>
          <p className="text-lg mb-8 text-white">{t('scanningDescription')}</p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-blue-500 bg-white hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300"
          >
            {t('learnMoreButton')}
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
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="lg:w-1/2 flex justify-center lg:justify-start"
        >
          <img
            src={scanning}
            alt="Phone scanning test"
            className="rounded-lg shadow-xl max-w-full h-1/2 w-1/2 ml-32"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScanningSection;
