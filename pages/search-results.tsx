import type React from "react";
import SmallLockupCard from "../components/small-lockup-card";
import type { AppInfo } from "../types";

type SearchResultsProps = {
  query: string;
  results: AppInfo[];
};

const SearchResults: React.FC<SearchResultsProps> = ({ query, results }) => {
  return (
    <main className="flex-1 bg-white md:pr-4 md:pl-8 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-0">
        {results.length > 0 ? (
          <>
            <h1 className="mb-6 font-bold text-black text-xl">
              Results for "{query}"
            </h1>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {results.map((app) => (
                // Fix: Add 'id' to the data prop to satisfy the SmallLockupData type.
                <SmallLockupCard
                  data={{ ...app, id: app.name }}
                  key={app.name}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="py-20 text-center">
            <h1 className="mb-2 font-bold text-black text-xl">
              No results for "{query}"
            </h1>
            <p className="text-gray-500">
              Check the spelling or try a new search.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
