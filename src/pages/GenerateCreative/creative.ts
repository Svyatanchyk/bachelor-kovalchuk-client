import { Canvas, FabricImage, Textbox } from "fabric";
import { fontSizeType } from "./CreativeSettings/types";
import {
  loadImageFromPexels,
  loadImageFromUnsplash,
} from "../../utils/imageUtils";
import { convertImgToBase64 } from "../../utils/imageUtils";
import { height } from "@mui/system";

interface generateCreativeParams {
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

const template1 = async (params: generateCreativeParams) => {
  return new Promise<Object[]>(async (resolve) => {
    const tempCanvas = new Canvas(undefined, {
      width: 500,
      height: 500,
      backgroundColor: params.bgColor || "",
    });

    const textElement = new Textbox("Default text", {
      left: tempCanvas.width / 2 - 300,
      top: 50,
      fontSize: params.fontSize?.fontSize,
      fill: params.textColor,
      width: 300,
      textAlign: "center",
    });

    tempCanvas.add(textElement);

    const unsplashImgs = await loadImageFromUnsplash(params.vertical);
    const pexelImgs = await loadImageFromPexels(params.vertical);
    const pexelUrl = pexelImgs.photos[0].src.large;
    const photoUrl = unsplashImgs.results[0].urls.regular;

    const base64Image = await convertImgToBase64(pexelUrl);

    if (params.addImage.yes) {
      if (tempCanvas) {
        FabricImage.fromURL(base64Image)
          .then((img) => {
            img.scale(0.3);
            img.set({
              left: (tempCanvas.width - img.getScaledWidth()) / 2,
              top: 100,
            });
            tempCanvas.add(img);
            tempCanvas.renderAll();
          })
          .then(() => {
            resolve(tempCanvas.toJSON());
          })
          .catch((error) => {
            console.error("Error loading image:", error);
          });
      }
    }
  });
};

export const generateCreative = async (params: generateCreativeParams) => {
  console.log(params);
  return await template1(params);
};
