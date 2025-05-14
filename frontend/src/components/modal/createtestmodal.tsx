import React from 'react';
import { useTranslation } from 'react-i18next';

interface CreateTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOption: (option: 'scratch' | 'ai' | 'import') => void;
}

const CreateTestModal: React.FC<CreateTestModalProps> = ({
  isOpen,
  onClose,
  onSelectOption,
}) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative p-8 border w-full max-w-lg shadow-lg rounded-md bg-white"
        onClick={handleContentClick}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            {t('createTestModalTitle')}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-150"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="flex flex-col items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:border-blue-600 hover:shadow transition duration-300 text-center"
            onClick={() => onSelectOption('scratch')}
          >
            <div className="mb-3 text-blue-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
            <h4 className="text-base font-semibold mb-1 text-gray-800">
              {t('createTestOptionScratchTitle')}
            </h4>
            <p className="text-xs text-gray-600">
              {t('createTestOptionScratchDescription')}
            </p>
          </div>

          <div
            className="flex flex-col items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:border-blue-600 hover:shadow transition duration-300 text-center"
            onClick={() => onSelectOption('ai')}
          >
            <div className="mb-3 text-blue-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
            <h4 className="text-base font-semibold mb-1 text-gray-800">
              {t('createTestOptionAITitle')}
            </h4>
            <p className="text-xs text-gray-600">
              {t('createTestOptionAIDescription')}
            </p>
          </div>

          <div
            className="flex flex-col items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:border-blue-600 hover:shadow transition duration-300 text-center"
            onClick={() => onSelectOption('import')}
          >
            <div className="mb-3 text-blue-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </div>
            <h4 className="text-base font-semibold mb-1 text-gray-800">
              {t('createTestOptionImportTitle')}
            </h4>
            <p className="text-xs text-gray-600">
              {t('createTestOptionImportDescription')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTestModal;
