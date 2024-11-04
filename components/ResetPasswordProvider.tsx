'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResetPasswordContextType {
  email: string | null;
  setResetEmail: (email: string) => void;
  clearEmail: () => void;
}

// Create the context with default values
const ResetPasswordContext = createContext<ResetPasswordContextType | undefined>(undefined);

// Create the provider component
interface ResetPasswordProviderProps {
  children: ReactNode;
}

export const ResetPasswordProvider = ({ children }: ResetPasswordProviderProps) => {
  const [email, setEmail] = useState<string | null>(null);

  const setResetEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const clearEmail = () => {
    setEmail(null);
  };

  return (
    <ResetPasswordContext.Provider value={{ email, setResetEmail, clearEmail }}>
      {children}
    </ResetPasswordContext.Provider>
  );
};

// Custom hook to use the ResetPasswordContext
export const useResetPassword = () => {
  const context = useContext(ResetPasswordContext);
  if (!context) {
    throw new Error('useResetPassword must be used within a ResetPasswordProvider');
  }
  return context;
};
