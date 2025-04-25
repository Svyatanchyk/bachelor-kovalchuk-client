import { createContext, ReactNode, useContext, useState } from "react";
import { CreativeContextSettingsType } from "./types";

const CreativeSettingsContext =
  createContext<CreativeContextSettingsType | null>(null);

export const useCreativeSettingsContext = () => {
  const context = useContext(CreativeSettingsContext);
  if (!context) {
    throw new Error(
      "CreativeSettingsContext must be used within a CreativeSettingsContextProvider"
    );
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const CreativeSettingsContextProvider = ({ children }: Props) => {
  const [creativeFormats, setCreativeFormats] = useState<string>("square");

  const [addImage, setAddImage] = useState<string>("yes");

  const [addFlag, setAddFlag] = useState<string>("yes");

  const [addCtaArrow, setAddCtaArrow] = useState<string>("yes");
  const [addCtaBtn, setAddCtaBtn] = useState<string>("yes");

  const handleChangeFormat = (key: string) => {
    setCreativeFormats(key);
  };

  const handleChangeAddImage = (key: string) => {
    setAddImage(key);
  };

  const handleChangeAddFlag = (key: string) => {
    setAddFlag(key);
  };

  const handleChangeAddCtaArrow = (key: string) => {
    setAddCtaArrow(key);
  };

  const handleChangeAddCtaBtn = (key: string) => {
    setAddCtaBtn(key);
  };

  const value = {
    creativeFormats,
    addImage,
    addFlag,
    addCtaArrow,
    addCtaBtn,
    handleChangeAddCtaBtn,
    handleChangeAddCtaArrow,
    handleChangeAddFlag,
    handleChangeAddImage,
    handleChangeFormat,
  };

  return (
    <CreativeSettingsContext.Provider value={value}>
      {children}
    </CreativeSettingsContext.Provider>
  );
};
