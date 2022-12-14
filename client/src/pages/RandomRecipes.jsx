import React from "react";
import RandomContent from "../components/Content/RandomContent";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const RandomRecipes = ({
  setSearchInput,
  query,
  setQuery,
  randomMeal,
}) => {
  return (
    <div>
      {" "}
      <Header setSearchInput={setSearchInput} />
      <Navbar setQuery={setQuery} />
      <body className="container pt-4 bg-gray-100 mx-auto">
        <RandomContent category={query} recipeArray={randomMeal} />
      </body>
    </div>
  );
};

export default RandomRecipes;
