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
  <main className="flex-1 bg-[var(--color-surface)] md:pr-[var(--spacing-4)] md:pl-[var(--spacing-8)] lg:px-[var(--spacing-8)] xl:px-[var(--spacing-12)]">
    <div className="mx-auto max-w-7xl px-[var(--spacing-4)] py-[var(--spacing-8)] sm:px-[var(--spacing-6)] md:px-[var(--spacing-0)]">
      <h1
        className="font-[var(--font-weight-bold)] text-[var(--color-text-primary)] text-[var(--font-size-4xl)]"
        style={{ marginBottom: "var(--spacing-header-margin)" }}
      >
        Apps
      </h1>
      <div className="text-center">
        <p className="text-[var(--color-text-secondary)]">
          The Apps page is coming soon!
        </p>
      </div>
    </div>
  </main>
);

const SearchInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => (
  <div className="relative w-full">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[var(--spacing-sm)]">
      <svg
        className="h-[var(--size-5)] w-[var(--size-5)] text-[var(--color-text-secondary)]"
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
      className="block w-full rounded-[var(--radius-md)] border-[var(--color-outline)] bg-[var(--color-background-disabled)]/80 py-[var(--spacing-2)] pr-[var(--spacing-4)] pl-[calc(var(--spacing-10)+var(--spacing-sm))] text-[var(--font-size-sm)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
    <div className="min-h-screen bg-[var(--color-surface)] md:bg-[var(--color-background)]">
      <div className="app-container mx-auto max-w-screen-2xl">
        <div className="flex">
          <Sidebar activeRoute={route} />
          <div className="flex min-w-0 flex-1 flex-col">
            <header className="sticky top-0 z-20 hidden border-[var(--color-outline)]/80 border-b bg-[var(--color-background)]/80 px-[var(--spacing-4)] py-[var(--spacing-3)] backdrop-blur-sm md:block md:px-[var(--spacing-12)]">
              <div className="ml-auto max-w-xs">
                <SearchInput
                  onChange={handleSearchChange}
                  value={searchQuery}
                />
              </div>
            </header>
            <div className="border-[var(--color-outline)] border-b p-[var(--spacing-4)] md:hidden">
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
