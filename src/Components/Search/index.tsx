import React from "react";
import "./Search.css";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for advice"
      />
    </div>
  );
}
