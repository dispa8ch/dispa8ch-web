'use client'

import { createContext, useState, useContext } from 'react';

// Create the context
const CompanyContext = createContext();

// Custom hook to use the CompanyContext
export const useCompany = () => {
  return useContext(CompanyContext);
};

// Provider component to wrap your app
export const CompanyProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(null);

  // Function to update company data
  const updateCompanyData = (data) => {
    setCompanyData(data);
  };

  return (
    <CompanyContext.Provider value={{ companyData, updateCompanyData }}>
      {children}
    </CompanyContext.Provider>
  );
};
