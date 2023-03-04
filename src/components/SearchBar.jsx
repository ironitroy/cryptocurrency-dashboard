import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="relative flex items-center h-12">
      <span className="w-5 absolute ml-3">
        <MagnifyingGlassIcon />
      </span>
      <input
        className="pl-10 py-3 rounded-lg w-full"
        type="text"
        placeholder="Search by coin"
      />
    </div>
  );
};

export default SearchBar;
