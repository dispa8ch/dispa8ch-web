"use client";

import React, { useState, useEffect, ChangeEvent } from "react";

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
  const [searchTerm, setSearchTerm] = useState<string>(""); // To store user input
  const [countries, setCountries] = useState<Country[]>([]); // To store all fetched countries
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]); // To store filtered results
  const [showDropdown, setShowDropdown] = useState<boolean>(false); // Toggle for dropdown visibility

  // Fetch the country data from the API when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags"
        ); // Fetch country data
        console.log("Contries Returned", response);
        const data: Country[] = await response.json();
        console.log("Contries Data", data);
        setCountries(data); // Save the countries in state
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  // Filter countries based on the search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
      setShowDropdown(true); // Show dropdown when there's a search term
    } else {
      setShowDropdown(false); // Hide dropdown when the input is empty
    }
  }, [searchTerm, countries]);

  // Handle input change and update search term
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle country selection
  const handleCountrySelect = (countryName: string) => {
    setUserDetail({ ...userDetail, country: countryName });
    setSearchTerm(countryName); // Set the input to the selected country
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <div className="w-full flex items-center justify-between h-fit relative font-Inter text-[#ccc]">
      <input
        name="country"
        placeholder="Select your country"
        type="text"
        value={searchTerm} // Bind input value to searchTerm
        onChange={handleInputChange} // Update search term on input change
        className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none`}
      />
      <p className="w-fit h-fit bg-white text-black font-semibold py-1 px-2 text-sm absolute top-[-30%] left-5">
        Country
      </p>

      {/* Dropdown with filtered country results */}
      {showDropdown && (
        <ul className="absolute z-10 top-full left-0 w-full bg-white border border-[#ccc] max-h-32 overflow-y-scroll  rounded-lg shadow-lg">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li
                key={index}
                onClick={() => handleCountrySelect(country.name.common)}
                className="cursor-pointer p-2 flex items-center hover:bg-gray-100"
              >
                <img
                  src={country.flags.svg} // Display flag image
                  alt={`${country.name.common} flag`}
                  className="w-6 h-4 mr-2"
                />
                {country.name.common} ({country.cca2})
              </li>
            ))
          ) : (
            <li className="p-2">No countries found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CountrySelect;
