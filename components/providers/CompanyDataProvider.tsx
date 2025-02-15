"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type CompanyData = {
  _id: string;
  companyName: string;
  email: string;
  country: string;
  city: string;
  contactPerson: string;
  phone: string;
  companyPassword: string;
  users: any[]; // Define a specific type for users if known
  __v: number;
};

type CompanyContextType = {
  companyData: CompanyData | null;
  isLoading: boolean;
  error: string | null;
};

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      const companyData = JSON.parse(
        localStorage.getItem("companyData") || "{}"
      );
      const companyId = companyData?._id || companyData?.id || null;
      if (!companyId) {
        setError("Company ID not found in local storage.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://dispa8ch-backend.onrender.com/api/company/${companyId}`
        );
        const result = await response.json();

        if (response.ok && result.success) {
          setCompanyData(result.data);
          console.log("COntext Comapany Data =", result.data);
        } else {
          setError(result.message || "Failed to fetch company data.");
        }
      } catch (err) {
        setError("An error occurred while fetching company data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <CompanyContext.Provider value={{ companyData, isLoading, error }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = (): CompanyContextType => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider.");
  }
  return context;
};
