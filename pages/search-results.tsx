import React from 'react';
import SmallLockupCard from '../components/SmallLockupCard';
import type { AppInfo } from '../types';

interface SearchResultsProps {
    query: string;
    results: AppInfo[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, results }) => {
    return (
        <main className="flex-1 bg-white md:pl-8 md:pr-4 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-8">
                {results.length > 0 ? (
                    <>
                        <h1 className="text-xl font-bold text-black mb-6">Results for "{query}"</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                            {results.map(app => (
                                // Fix: Add 'id' to the data prop to satisfy the SmallLockupData type.
                                <SmallLockupCard key={app.name} data={{...app, id: app.name}} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20">
                         <h1 className="text-xl font-bold text-black mb-2">No results for "{query}"</h1>
                        <p className="text-gray-500">Check the spelling or try a new search.</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default SearchResults;