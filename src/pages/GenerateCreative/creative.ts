import { Canvas, FabricImage, Textbox } from "fabric";
import { fontSizeType } from "./CreativeSettings/types";
import {
  loadImageFromPexels,
  loadImageFromUnsplash,
} from "../../utils/imageUtils";
import { convertImgToBase64 } from "../../utils/imageUtils";
import { distributeCreativeSettings, generateCreativeSettings } from "./utils";

export interface generateCreativeParams {
  selectedCountry: string | null;
  selectedLanguages: string[];
  numberOfTexts: number;
  vertical: string;
  textVariations: Record<string, string>;
  fontSize: fontSizeType;
  fontFamily: string;
  textColor: string | null;
  bgColor: string | null;
  creativeFormats: Record<string, boolean>;
  addImage: Record<string, boolean>;
  addFlag: Record<string, boolean>;
  addCallToAction: Record<string, boolean>;
  highlightKeywords: Record<string, boolean>;
}

interface templateParams {
  vertical: string;
  format: string;
  addImage: string;
  addFlag: string;
  addCallToAction: string;
  highlightWords: string;
  fontFamily: string;
  fontSize: number;
  bgColor: string | null;
  textColor: string | null;
  selectedCountry: string | null;
  text: string;
}

export const generateCreative = async (params: generateCreativeParams) => {
  const formats = distributeCreativeSettings(
    params.numberOfTexts,
    params.creativeFormats
  );

  const addImages = distributeCreativeSettings(
    params.numberOfTexts,
    params.addImage
  );

  const addFlags = distributeCreativeSettings(
    params.numberOfTexts,
    params.addFlag
  );

  const addCallToActions = distributeCreativeSettings(
    params.numberOfTexts,
    params.addCallToAction
  );

  const highlightWords = distributeCreativeSettings(
    params.numberOfTexts,
    params.highlightKeywords
  );

  const configs = generateCreativeSettings({
    ...params,
    addCallToActions,
    addFlags,
    addImages,
    highlightWords,
    formats,
  });

  return await template1(configs[0]);
};

const template1 = async (params: templateParams) => {
  const format =
    params.format === "square"
      ? { width: 500, height: 500 }
      : { width: 600, height: 400 };

  const tempCanvas = new Canvas(undefined, {
    width: format.width,
    height: format.height,
    backgroundColor: params.bgColor || "",
  });

  const textElement = new Textbox(params.text, {
    left: tempCanvas.width / 2 - 300 / 2,
    top: 50,
    fontSize: params.fontSize,
    fontFamily: params.fontFamily,
    fill: params.textColor,
    width: 300,
    textAlign: "center",
  });

  tempCanvas.add(textElement);

  const unsplashImgs = await loadImageFromUnsplash(params.vertical);
  const photoUrl = unsplashImgs.results[0].urls.regular;
  const base64Image = await convertImgToBase64(photoUrl);

  if (params.addImage === "yes") {
    try {
      const img = await FabricImage.fromURL(base64Image);
      img.scale(0.3);
      img.set({
        left: (tempCanvas.width - img.getScaledWidth()) / 2,
        top: 150,
      });

      tempCanvas.add(img);
      tempCanvas.renderAll();
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  const dataJson = {
    ...tempCanvas.toJSON(),
    width: tempCanvas.width,
    height: tempCanvas.height,
    image: tempCanvas.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 1,
    }),
  };

  return dataJson;
};

const template2 = async (params: templateParams) => {
  const format =
    params.format === "square"
      ? { width: 500, height: 500 }
      : { width: 600, height: 400 };

  const tempCanvas = new Canvas(undefined, {
    width: format.width,
    height: format.height,
    backgroundColor: params.bgColor || "",
  });

  const textElement = new Textbox(params.text, {
    left: tempCanvas.width / 2 - 300 / 2,
    top: 250,
    fontSize: params.fontSize,
    fill: params.textColor,
    width: 300,
    textAlign: "center",
  });

  tempCanvas.add(textElement);

  const unsplashImgs = await loadImageFromUnsplash(params.vertical);
  const photoUrl = unsplashImgs.results[0].urls.regular;
  const base64Image = await convertImgToBase64(photoUrl);

  if (params.addImage === "yes") {
    try {
      const img = await FabricImage.fromURL(base64Image);
      img.scale(0.3);
      img.set({
        left: (tempCanvas.width - img.getScaledWidth()) / 2,
        top: 20,
      });

      tempCanvas.add(img);
      tempCanvas.renderAll();
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  const dataJson = {
    ...tempCanvas.toJSON(),
    width: tempCanvas.width,
    height: tempCanvas.height,
    image: tempCanvas.toDataURL({
      format: "png",
      quality: 1.0,
      multiplier: 1,
    }),
  };

  localStorage.setItem("creative", JSON.stringify(dataJson));

  return dataJson;
};
