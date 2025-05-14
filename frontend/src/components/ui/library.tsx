import { LibraryListView } from './librarylistview';
import MainTitle from './maintitle';
import Sidebar from './sidebar';

const Library = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <MainTitle />
        <LibraryListView />
      </div>
    </div>
  );
};

export default Library;
