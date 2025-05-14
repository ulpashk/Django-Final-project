import React from 'react';

const libraryItems = [
  {
    id: 1,
    type: 'test',
    name: 'Akzhol',
    mastery: null,
    questions: null,
    created: '27.04.25 22:42',
    progress: 40,
  },
  {
    id: 2,
    type: 'test',
    name: 'Week 1',
    mastery: null,
    questions: null,
    created: '19.04.25 14:00',
    progress: 40,
  },
  {
    id: 3,
    type: 'test',
    name: 'Week 10',
    mastery: null,
    questions: null,
    created: '19.04.25 14:09',
    progress: 40,
  },
  {
    id: 4,
    type: 'test',
    name: 'Week 11',
    mastery: null,
    questions: null,
    created: '19.04.25 14:10',
    progress: 40,
  },
  {
    id: 5,
    type: 'test',
    name: 'Week 12',
    mastery: null,
    questions: null,
    created: '19.04.25 14:12',
    progress: 40,
  },
  {
    id: 6,
    type: 'test',
    name: 'Week 13',
    mastery: null,
    questions: null,
    created: '19.04.25 14:13',
    progress: 40,
  },
  {
    id: 7,
    type: 'test',
    name: 'Week 14',
    mastery: null,
    questions: null,
    created: '19.04.25 14:41',
    progress: 40,
  },
  {
    id: 8,
    type: 'test',
    name: 'Week 2',
    mastery: null,
    questions: null,
    created: '19.04.25 14:02',
    progress: 40,
  },
  {
    id: 9,
    type: 'test',
    name: 'Week 3',
    mastery: null,
    questions: null,
    created: '19.04.25 14:15',
    progress: 40,
  },
  {
    id: 10,
    type: 'test',
    name: 'Week 4',
    mastery: null,
    questions: null,
    created: '19.04.25 14:23',
    progress: 40,
  },
  {
    id: 11,
    type: 'test',
    name: 'Week 5',
    mastery: null,
    questions: null,
    created: '19.04.25 14:30',
    progress: 40,
  },
  {
    id: 12,
    type: 'test',
    name: 'Week 6',
    mastery: null,
    questions: null,
    created: '19.04.25 14:36',
    progress: 40,
  },
  {
    id: 13,
    type: 'test',
    name: 'Week 7',
    mastery: null,
    questions: null,
    created: '19.04.25 14:04',
    progress: 40,
  },
  {
    id: 14,
    type: 'test',
    name: 'Week 8',
    mastery: null,
    questions: null,
    created: '19.04.25 14:06',
    progress: 40,
  },
  {
    id: 15,
    type: 'test',
    name: 'Week 9',
    mastery: null,
    questions: null,
    created: '19.04.25 14:07',
    progress: 40,
  },
  {
    id: 16,
    type: 'test',
    name: "Yarmuk's personal folder",
    mastery: null,
    questions: null,
    created: '20.04.25 13:22',
    progress: 40,
  },
  {
    id: 17,
    type: 'test',
    name: 'E-Business Strategies Test',
    mastery: null,
    questions: 20,
    created: '18.04.25 00:00',
    progress: 60,
  },
  {
    id: 18,
    type: 'test',
    name: 'Foundational Theories of Motivation',
    mastery: null,
    questions: 49,
    created: '17.04.25 10:06',
    progress: 80,
  },
];

export function LibraryListView() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="relative flex-1 mr-4">
          <input
            type="text"
            placeholder="Search this page"
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create new
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">
                <div className="flex items-center">
                  Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mastery Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Questions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {libraryItems.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {item.type === 'folder' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500 mr-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    )}
                    <div className="text-sm font-medium text-gray-900">
                      {item.name}
                      {item.type === 'test' && item.progress !== null && (
                        <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.mastery !== null ? item.mastery : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.questions !== null ? item.questions : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.created}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
