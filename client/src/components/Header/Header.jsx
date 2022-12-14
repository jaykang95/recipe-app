import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = ({ setSearchInput }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const search = () =>
    navigate({
      pathname: "/search",
      search: `?query=${searchQuery}`,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (e) => {
    search();
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
      setSearchInput(e.target.value);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <header>
        <div className="flex flex-row">
          <div className="flex-1 max-w-[12rem] ml-4">
            <Link to="/" className="">
              <img src={logo} className="w-20" />
              <span>
                <h2 className="text-4xl text-left">Food Recipe</h2>
              </span>
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 items-center justify-end"
          >
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-46 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleClick}
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="mr-2 -ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
