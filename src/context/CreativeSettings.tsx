import {
  ChangeEvent,
  createContext,
  ReactNode,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { fontSizeType } from "../pages/GenerateCreative/CreativeSettings/types";
import { FONT_SIZE_OPTIONS } from "../pages/Canvas/Settings/utils/fontSizeOptions";
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

  const [fontSize, setFontSize] = useState<fontSizeType>(
    () => FONT_SIZE_OPTIONS[5]
  );
  const [fontFamily, setFontFamily] = useState<string>("Roboto");
  const [textColor, setTextColor] = useState<string | null>("#000");
  const [bgColor, setBgColor] = useState<string | null>("transparent");
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

  const [highlightKeywords, setHighlightKeywords] = useState<
    Record<string, boolean>
  >({
    yes: true,
    no: false,
  });

  const handleFontSizeChange = (
    _: SyntheticEvent,
    newValue: { id: number; fontSize: number; label: string } | null
  ) => {
    if (!newValue) return;
    setFontSize(newValue);
  };

  const handleFontFamilyChange = (
    _: SyntheticEvent,
    newValue: string | null
  ) => {
    if (!newValue) return;
    setFontFamily(newValue);
  };

  const handleTextColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextColor(value);
  };

  const handleBgColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setBgColor(value);
  };

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

  const handleChangeHighlightKeywords = (key: string) => {
    setHighlightKeywords((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const value = {
    fontSize,
    fontFamily,
    textColor,
    bgColor,
    creativeFormats,
    addImage,
    addFlag,
    addCallToAction,
    highlightKeywords,
    handleBgColorChange,
    handleChangeAddCallToAction,
    handleChangeAddFlag,
    handleChangeAddImage,
    handleChangeFormat,
    handleChangeHighlightKeywords,
    handleFontFamilyChange,
    handleFontSizeChange,
    handleTextColorChange,
  };

  return (
    <CreativeSettingsContext.Provider value={value}>
      {children}
    </CreativeSettingsContext.Provider>
  );
};
