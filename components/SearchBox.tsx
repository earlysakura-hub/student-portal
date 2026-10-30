/**
 * File Name: SearchBox.tsx
 * Author: Adeeb Farzi
 * Date: October 30, 2026
 * 
 * This component provides a controlled text input field used to filter the active student list by name.
 * It receives the current search term value and an onSearchChange callback function as props from the parent.
 * It processes keystroke events by immediately forwarding input updates upward to the parent component's filter state.
 * It outputs a single stylized, responsive search input field styled cleanly with Tailwind CSS.
 */

"use client";

interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBox = ({ searchTerm, onSearchChange }: SearchBoxProps) => {
  // --- Event Handlers ---
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  // --- Render Component ---
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Find student by name..."
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none shadow-sm"
      />
    </div>
  );
};

export default SearchBox;