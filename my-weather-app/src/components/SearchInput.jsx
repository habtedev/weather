import { useState } from "react";

// SEarch Input Component
export default function SearchInput({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  // Handle form submission and guard against empty submissions.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
      setInputValue("");
    }
  };

  return (

   // Search form with inputs 
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

         {/* Search Buttons  */}
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
}
