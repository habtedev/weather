import { useState } from "react";

// Simple search input component.
// Props:
// - onSearch(city: string): called when the user submits a non-empty city.
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
    // `.search` styled in App.css; button uses `.btn` for consistent look
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
}
