import { Canvas, FabricImage, Textbox } from "fabric";
import { fontSizeType } from "./CreativeSettings/types";
import { loadImageFromUnsplash } from "./utils";

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
      backgroundColor: params.bgColor!,
    });

    // Add text element
    const textElement = new Textbox("Default text", {
      left: tempCanvas.width / 2 - 300,
      top: 50,
      fontSize: params.fontSize?.fontSize,
      fill: params.textColor,
      width: 300,
      textAlign: "center",
    });

    tempCanvas.add(textElement);

    const images = await loadImageFromUnsplash(params.vertical);
    const photoUrl = images.results[0].urls.regular;

    if (params.addImage.yes) {
      if (tempCanvas) {
        FabricImage.fromURL(photoUrl)
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
