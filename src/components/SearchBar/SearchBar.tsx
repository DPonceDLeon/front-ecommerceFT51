import React from "react";

const SearchBar = () => {
    return (
<div className="max-w-lg mx-auto">
  <div className="relative">
    <input
      type="search"
      id="search-dropdown"
      className="block p-2.5 w-auto sm:w-[400px] z-20 text-gray-900 bg-gray-50 rounded-2xl border-l-gray-50  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      placeholder="Search Cameras, Headphones, Smartphones..."
    />
    <button
      type="submit"
      className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <span className="sr-only">Search</span>
    </button>
  </div>
</div>
    )
}

export default SearchBar;