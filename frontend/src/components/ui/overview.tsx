import React from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from './sidebar';
import { ContinueLearningSection } from './continuelearningsection';
import MainTitle from './maintitle';

const Overview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <MainTitle />
        <ContinueLearningSection />
      </div>
    </div>
  );
};

export default Overview;
