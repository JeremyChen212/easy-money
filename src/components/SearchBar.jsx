//Searchbar.js

import React, { useState } from "react";
import Select from "react-select";


const options = [
  { value: "babysitter", label: "Babysitter", link: "http://localhost:3000/jobs?search=babysitter" },
  { value: "delivery-driver", label: "Delivery driver", link: "http://localhost:3000/jobs?search=deliverdriver" },
  { value: "dog-walker", label: "Dog walker", link: "http://localhost:3000/jobs?search=dogwalker" },
  { value: "freelancer", label: "Freelancer", link: "http://localhost:3000/jobs?search=freelancer" },
  { value: "house-cleaner", label: "House cleaner", link: "http://localhost:3000/jobs?search=housecleaner" },
  { value: "pet-sitter", label: "Pet sitter", link: "http://localhost:3000/jobs?search=petsitter" },
  { value: "tutor", label: "Tutor", link: "http://localhost:3000/jobs?search=tutor" }
];

export default function SearchBar() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    window.location.href = option.link;
  };

  return (
    <div className="w-full select-container">
      <Select
      type="text" className="search-bar"
        options={filteredOptions}
        value={selectedOption}
        onInputChange={handleInputChange}
        onChange={handleOptionSelect}
        placeholder="Find Jobs"
        isSearchable={true}
      />
    </div>
  );
}
