"use client";

import React, { useState, useEffect } from "react";

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  cca2: string;
}

const CountrySelect = ({ setUserDetail, userDetail }: any) => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search input
  const [countries, setCountries] = useState<Country[]>([]); // List of all countries
  const [showDropdown, setShowDropdown] = useState<boolean>(false); // Dropdown visibility

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,cca2"
        );
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Filter countries based on search term
  const filteredCountries = searchTerm
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true); // Show dropdown when typing
  };

  // Handle country selection
  const handleCountrySelect = (countryName: string) => {
    setSearchTerm(countryName); // Update input with selected country
    setUserDetail({ ...userDetail, country: countryName }); // Update user detail
    setShowDropdown(false); // Close dropdown
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        value={searchTerm}
        placeholder="Select your country"
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)} // Show dropdown on input focus
        className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none"
      />
      <p className="absolute top-[-30%] left-4 bg-white px-2 text-sm text-gray-600">
        Country
      </p>

      {/* Dropdown */}
      {showDropdown && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 max-h-40 overflow-y-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-300 rounded-lg shadow-md z-10">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <li
                key={country.cca2}
                onClick={() => handleCountrySelect(country.name.common)}
                className="cursor-pointer p-2 flex items-center hover:bg-gray-100"
              >
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  className="w-6 h-4 mr-2"
                />
                {country.name.common} ({country.cca2})
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No countries found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CountrySelect;
