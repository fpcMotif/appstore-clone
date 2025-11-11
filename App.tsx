import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Today from './pages/Today';
import Games from './pages/Games';
import Arcade from './pages/Arcade';
import Puzzle from './pages/Puzzle';
import Action from './pages/Action';
import Adventure from './pages/Adventure';
import Entertainment from './pages/Entertainment';
import Productivity from './pages/Productivity';
import HealthFitness from './pages/HealthFitness';
import PhotoVideo from './pages/PhotoVideo';
import SearchResults from './pages/SearchResults';
import { allApps } from './constants';
import type { AppInfo } from './types';

const Apps: React.FC = () => (
    <main className="flex-1 bg-white md:pl-8 md:pr-4 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-8">
            <h1 className="text-4xl font-bold text-black mb-8">Apps</h1>
            <div className="text-center py-20">
                <p className="text-gray-500">The Apps page is coming soon!</p>
            </div>
        </div>
    </main>
);

const SearchInput: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ value, onChange }) => (
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <input 
            type="search" 
            placeholder="Search" 
            value={value}
            onChange={onChange}
            className="block w-full bg-gray-200/80 rounded-md border-transparent pl-10 pr-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
        />
    </div>
);


const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<AppInfo[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const results = allApps.filter(app => 
      app.name.toLowerCase().includes(lowerCaseQuery) || 
      app.subtitle.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(results);
  };

  const renderPage = () => {
    switch (route) {
      case '#/games':
        return <Games />;
      case '#/apps':
        return <Apps />;
      case '#/arcade':
        return <Arcade />;
      case '#/category/puzzle':
        return <Puzzle />;
       case '#/category/action':
        return <Action />;
       case '#/category/adventure':
        return <Adventure />;
      case '#/category/entertainment':
        return <Entertainment />;
      case '#/category/productivity':
        return <Productivity />;
      case '#/category/health-fitness':
        return <HealthFitness />;
      case '#/category/photo-video':
        return <PhotoVideo />;
      case '#/':
        return <Today />;
      default:
        if (route.startsWith('#/category')) {
            // A simple fallback for categories not yet implemented
            return <Today />;
        }
        return <Today />;
    }
  };


  return (
    <div className="bg-white md:bg-[#f5f5f7] min-h-screen">
      <div className="app-container max-w-screen-2xl mx-auto">
        <div className="flex">
          <Sidebar activeRoute={route} />
          <div className="flex-1 flex flex-col min-w-0">
            <header className="sticky top-0 z-20 bg-[#f5f5f7]/80 backdrop-blur-sm border-b border-gray-300/80 px-4 md:px-12 py-3 hidden md:block">
              <div className="max-w-xs ml-auto">
                <SearchInput value={searchQuery} onChange={handleSearchChange} />
              </div>
            </header>
            <div className="md:hidden p-4 border-b border-gray-200">
               <SearchInput value={searchQuery} onChange={handleSearchChange} />
            </div>
            {searchQuery.trim() !== '' ? (
              <SearchResults query={searchQuery} results={searchResults} />
            ) : (
              renderPage()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
