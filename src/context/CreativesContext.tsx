import { createContext, useContext, useState } from "react";
import { CreativesContextProviderProps, CreativesContextType } from "./types";

const CreativesContext = createContext<CreativesContextType | null>(null);

export const useCreativesContext = () => {
  const context = useContext(CreativesContext);
  if (!context) {
    throw new Error("CreativesContext must be used within a CreativesProvider");
  }
  return context;
};

export const CreativeContextProvider = ({
  children,
}: CreativesContextProviderProps) => {
  const [creatives, setCreatives] = useState<any[]>([]);
  const [activeCreative, setActiveCreative] = useState<number | null>(null);

  const value = {
    creatives,
    setCreatives,
    activeCreative,
    setActiveCreative,
  };

  return (
    <CreativesContext.Provider value={value}>
      {children}
    </CreativesContext.Provider>
  );
};
