import type React from "react";
import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import { allApps } from "./constants";
import Action from "./pages/action";
import Adventure from "./pages/adventure";
import Arcade from "./pages/arcade";
import Entertainment from "./pages/entertainment";
import Games from "./pages/games";
import HealthFitness from "./pages/health-fitness";
import PhotoVideo from "./pages/photo-video";
import Productivity from "./pages/productivity";
import Puzzle from "./pages/puzzle";
import SearchResults from "./pages/search-results";
import Today from "./pages/today";
import type { AppInfo } from "./types";

const Apps: React.FC = () => (
  <main className="flex-1 bg-white md:pr-4 md:pl-8 lg:px-8 xl:px-12">
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-0">
      <h1 className="mb-8 font-bold text-4xl text-black">Apps</h1>
      <div className="py-20 text-center">
        <p className="text-gray-500">The Apps page is coming soon!</p>
      </div>
    </div>
  </main>
);

const SearchInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => (
  <div className="relative w-full">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        className="h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Search icon</title>
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </div>
    <input
      className="block w-full rounded-md border-transparent bg-gray-200/80 py-2 pr-4 pl-10 text-sm placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
      placeholder="Search"
      type="search"
      value={value}
    />
  </div>
);

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || "#/");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<AppInfo[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const results = allApps.filter(
      (app) =>
        app.name.toLowerCase().includes(lowerCaseQuery) ||
        app.subtitle.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(results);
  };

  const renderPage = () => {
    switch (route) {
      case "#/games":
        return <Games />;
      case "#/apps":
        return <Apps />;
      case "#/arcade":
        return <Arcade />;
      case "#/category/puzzle":
        return <Puzzle />;
      case "#/category/action":
        return <Action />;
      case "#/category/adventure":
        return <Adventure />;
      case "#/category/entertainment":
        return <Entertainment />;
      case "#/category/productivity":
        return <Productivity />;
      case "#/category/health-fitness":
        return <HealthFitness />;
      case "#/category/photo-video":
        return <PhotoVideo />;
      case "#/":
        return <Today />;
      default:
        if (route.startsWith("#/category")) {
          // A simple fallback for categories not yet implemented
          return <Today />;
        }
        return <Today />;
    }
  };

  return (
    <div className="min-h-screen bg-white md:bg-[#f5f5f7]">
      <div className="app-container mx-auto max-w-screen-2xl">
        <div className="flex">
          <Sidebar activeRoute={route} />
          <div className="flex min-w-0 flex-1 flex-col">
            <header className="sticky top-0 z-20 hidden border-gray-300/80 border-b bg-[#f5f5f7]/80 px-4 py-3 backdrop-blur-sm md:block md:px-12">
              <div className="ml-auto max-w-xs">
                <SearchInput
                  onChange={handleSearchChange}
                  value={searchQuery}
                />
              </div>
            </header>
            <div className="border-gray-200 border-b p-4 md:hidden">
              <SearchInput onChange={handleSearchChange} value={searchQuery} />
            </div>
            {searchQuery.trim() !== "" ? (
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
