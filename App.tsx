
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="bg-white md:bg-[#f5f5f7] min-h-screen">
      <div className="app-container max-w-screen-2xl mx-auto">
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
