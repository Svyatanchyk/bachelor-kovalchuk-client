import { createContext, ReactNode, useContext, useState } from "react";
import { CreativeContextSettingsType } from "./types";
import { useCreativeContentContext } from "./ContentSettings";

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
  const { numberOfTexts } = useCreativeContentContext();

  const [creativeFormats, setCreativeFormats] = useState<
    Record<string, boolean>
  >({
    square: true,
    portrait: false,
  });

  const [addImage, setAddImage] = useState<Record<string, boolean>>({
    yes: true,
    no: false,
  });

  const [addFlag, setAddFlag] = useState<Record<string, boolean>>({
    yes: true,
    no: false,
  });

  const [addCallToAction, setAddCallToAction] = useState<
    Record<string, boolean>
  >({
    yes: true,
    no: false,
  });

  const handleChangeFormat = (key: string) => {
    setCreativeFormats((prev) => {
      if (numberOfTexts === 1) {
        const otherKey = key === "square" ? "portrait" : "square";
        return {
          ...prev,
          [key]: !prev[key],
          [otherKey]: !prev[otherKey],
        };
      }

      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  const handleChangeAddImage = (key: string) => {
    setAddImage((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChangeAddFlag = (key: string) => {
    setAddFlag((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChangeAddCallToAction = (key: string) => {
    setAddCallToAction((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const value = {
    creativeFormats,
    addImage,
    addFlag,
    addCallToAction,
    handleChangeAddCallToAction,
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
