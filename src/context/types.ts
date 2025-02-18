import { ReactNode } from "react";

export interface CreativesContextType {
  creatives: any[];
  setCreatives: (data: any[]) => void;
}

export interface CreativesContextProviderProps {
  children: ReactNode;
}
