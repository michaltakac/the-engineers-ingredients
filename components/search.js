import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import dataset from "../lib/indexed-data.json";

const options = {
  isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ["title", "authors", "categories", "content"],
};

const fuse = new Fuse(dataset, options);

export default function Search() {
  const [changed, setChanged] = useState(false);
  const [pattern, setPattern] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let timeout;

  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearchResults(fuse.search(pattern));
    }, 1000);
  }, [changed]);

  return (
    <div>
      <div className="flex justify-center mb-10">
        <form className="relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-md text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
            type="text"
            aria-label="Search for knowledge"
            placeholder="Search for knowledge"
            onChange={(event) => {
              setChanged(!changed);
              setPattern(event.currentTarget.value);
            }}
          />
        </form>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {searchResults.map(({ item }, i) => (
          <li key={item.title + "_" + i}>
            <a
              href={item.link}
              className="mb-4 group hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
            >
              <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h3 className="flex-auto text-xl font-semibold">{item.title}</h3>
                  <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                    {item.authors.map((a) => a).join(", ")}
                  </div>
                  <div className="flex items-baseline mt-4 mb-6">
                    <div className="space-x-2 flex">
                      {item.categories.map((c) => (
                        <span
                          key={item.title + "_" + c + "_" + i}
                          className="flex items-center justify-center bg-gray-100 rounded-md pl-2 pr-2 text-sm"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
