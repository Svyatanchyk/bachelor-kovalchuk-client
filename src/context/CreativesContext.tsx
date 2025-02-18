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

  return (
    <CreativesContext.Provider value={{ creatives, setCreatives }}>
      {children}
    </CreativesContext.Provider>
  );
};
