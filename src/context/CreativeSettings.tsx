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

  const [addCtaArrow, setAddCtaArrow] = useState<Record<string, boolean>>({
    yes: true,
    no: false,
  });

  const [addCtaBtn, setAddCtaBtn] = useState<Record<string, boolean>>({
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
    setAddImage((prev) => {
      if (numberOfTexts === 1) {
        const otherKey = key === "yes" ? "no" : "yes";
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

  const handleChangeAddFlag = (key: string) => {
    setAddFlag((prev) => {
      if (numberOfTexts === 1) {
        const otherKey = key === "yes" ? "no" : "yes";
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

  const handleChangeAddCtaArrow = (key: string) => {
    setAddCtaArrow((prev) => {
      if (numberOfTexts === 1) {
        const otherKey = key === "yes" ? "no" : "yes";
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

  const handleChangeAddCtaBtn = (key: string) => {
    setAddCtaBtn((prev) => {
      if (numberOfTexts === 1) {
        const otherKey = key === "yes" ? "no" : "yes";
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
