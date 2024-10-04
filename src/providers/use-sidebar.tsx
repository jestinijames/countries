'use client';
import { SidebarContextProps } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

// Create a context with the default value
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

// Create a provider component
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  // Toggle function to update the state
  const toggle = () => setIsMinimized((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isMinimized, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};


// Create a custom hook to use the context
export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
      throw new Error('useSidebarContext must be used within a SidebarProvider');
    }
    return context;
  };