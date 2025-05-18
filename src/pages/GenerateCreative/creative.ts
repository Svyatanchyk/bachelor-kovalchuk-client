import { Canvas, FabricImage } from "fabric";
import { loadCountryFlag, loadImageFromPexels } from "../../utils/imageUtils";

import { convertImgToBase64 } from "../../utils/imageUtils";
import { generateCreativeSettings, handleTextTransformation } from "./utils";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { TextType } from "../../context/types";
import { colors } from "../../constants/colors";
import { longTemplates, mediumTemplates, shortTemplates } from "./templates";
import { adjustCTAButtonToText } from "../../utils/applyAutoSpacing";

export interface generateCreativeParams {
  selectedCountry: string | null;
  selectedLanguage: string | null;
  numberOfTexts: number;
  vertical: string;
  textVariations: TextType;
  creativeFormats: string;
  addImage: string;
  addFlag: string;
  addCtaArrow: string;
  addCtaBtn: string;
}

interface templateParams {
  vertical: string;
  format: string;
  addImage: string;
  addFlag: string;
  addCtaBtn: string;
  addCtaArrow: string;
  selectedCountry: string | null;
  text: string[];
}

export const generateCreative = async (params: generateCreativeParams) => {
  if (
    !params.vertical ||
    !params.textVariations ||
    !params.selectedCountry ||
    !params.selectedLanguage
  )
    return null;

  const numberOfGeneratedTexts = Object.keys(params.textVariations).length;

  const formats = Array.from(
    { length: numberOfGeneratedTexts },
    () => params.creativeFormats
  );

  const addImages = Array.from(
    { length: numberOfGeneratedTexts },
    () => params.addImage
  );

  const addFlags = Array.from(
    { length: numberOfGeneratedTexts },
    () => params.addFlag
  );

  const addCtaArrows = Array.from(
    { length: numberOfGeneratedTexts },
    () => params.addCtaArrow
  );

  const addCtaBtns = Array.from(
    { length: numberOfGeneratedTexts },
    () => params.addCtaBtn
  );

  const configs = generateCreativeSettings({
    ...params,
    addCtaArrows,
    addFlags,
    addCtaBtns,
    addImages,
    formats,
  });

  const flag = await loadCountryFlag(params.selectedCountry!);
  const flagUrl = flag[0]?.flags.svg;
  const baseFlagUrl = await convertImgToBase64(flagUrl);

  const pexelsImgs = await loadImageFromPexels(params.vertical);

  const creativePromises = configs.map(async (config) => {
    const textComponents = config.text.length;
    const creativeType =
      textComponents === 3 ? "medium" : textComponents === 2 ? "short" : "long";

    let randomTemplate;

    if (creativeType === "medium") {
      if (config.format === "square") {
        if (config.addImage === "yes") {
          const templatesWithImages = mediumTemplates.square.filter(
            (tmp: any) => tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithImages[getRandomIndex(templatesWithImages.length)];
        } else {
          const templatesWithoutImages = mediumTemplates.square.filter(
            (tmp: any) =>
              !tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithoutImages[
              getRandomIndex(templatesWithoutImages.length)
            ];
        }
      }
      if (config.format === "portrait") {
        if (config.addImage === "yes") {
          const templatesWithImages = mediumTemplates.portrait.filter(
            (tmp: any) => tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithImages[getRandomIndex(templatesWithImages.length)];
        } else {
          const templatesWithoutImages = mediumTemplates.portrait.filter(
            (tmp: any) =>
              !tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithoutImages[
              getRandomIndex(templatesWithoutImages.length)
            ];
        }
      }
    }

    if (creativeType === "long") {
      if (config.format === "square") {
        if (config.addImage === "yes") {
          const templatesWithImages = longTemplates.square.filter((tmp: any) =>
            tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithImages[getRandomIndex(templatesWithImages.length)];
        } else {
          const templatesWithoutImages = longTemplates.square.filter(
            (tmp: any) =>
              !tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithoutImages[
              getRandomIndex(templatesWithoutImages.length)
            ];
        }
      }
      if (config.format === "portrait") {
        if (config.addImage === "yes") {
          const templatesWithImages = longTemplates.portrait.filter(
            (tmp: any) => tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithImages[getRandomIndex(templatesWithImages.length)];
        } else {
          const templatesWithoutImages = longTemplates.portrait.filter(
            (tmp: any) =>
              !tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithoutImages[
              getRandomIndex(templatesWithoutImages.length)
            ];
        }
      }
    }

    if (creativeType === "short") {
      if (config.format === "square") {
        if (config.addImage === "yes") {
          const templatesWithImages = shortTemplates.square.filter((tmp: any) =>
            tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithImages[getRandomIndex(templatesWithImages.length)];
        } else {
          const templatesWithoutImages = shortTemplates.square.filter(
            (tmp: any) =>
              !tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithoutImages[
              getRandomIndex(templatesWithoutImages.length)
            ];
        }
      }
      if (config.format === "portrait") {
        if (config.addImage === "yes") {
          const templatesWithImages = shortTemplates.portrait.filter(
            (tmp: any) => tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithImages[getRandomIndex(templatesWithImages.length)];
        } else {
          const templatesWithoutImages = shortTemplates.portrait.filter(
            (tmp: any) =>
              !tmp.objects.some((obj: any) => obj.name === "mainImg")
          );

          randomTemplate =
            templatesWithoutImages[
              getRandomIndex(templatesWithoutImages.length)
            ];
        }
      }
    }

    const colorSet =
      colors[creativeType][getRandomIndex(colors[creativeType].length)];

    if (randomTemplate) {
      return generateCreativeFromTemplate(
        config,
        randomTemplate,
        colorSet,
        baseFlagUrl,
        pexelsImgs
      );
    } else {
      return null;
    }
  });

  const generatedCreatives = (await Promise.all(creativePromises)).filter(
    Boolean
  );

  return generatedCreatives;
};

const generateCreativeFromTemplate = async (
  params: templateParams,
  template: any,
  colorSet: any,
  flagUrl: string | null,
  pexelsImgs: any
) => {
  const randomPhotoIndex = getRandomIndex(pexelsImgs.photos.length);
  const photoUrl = pexelsImgs.photos[randomPhotoIndex].src.landscape;
  const mainImage = await convertImgToBase64(photoUrl);

  let objects = template.objects;
  const ObjectsWithoutTextBoxs = objects.filter(
    (object: any) => object.type !== "Textbox"
  );

  objects.forEach((object: any) => {
    if (object.type === "Rect" && object.name === "ctaButton") {
      object.fill = colorSet.cta.background;
      object.stroke = colorSet.cta.btnStroke;
      object.strokeWidth = 2;
    }
  });

  objects.forEach((object: any) => {
    if (object.type === "Line" && object.name === "lineDecoration") {
      console.log("Line stroke: ", colorSet.textColors[0]);

      object.stroke = colorSet.textColors[0];
    }
  });

  const updatedTextBoxs = objects
    .filter((object: any) => object.type === "Textbox")
    .map((textBox: any, index: number) => {
      const text = params.text[index];

      const transformedText = handleTextTransformation(text).join(" ");

      return {
        ...textBox,
        fill: index === 2 ? colorSet.cta.color : colorSet.textColors[index],
        stroke: colorSet.cta.textStroke,
        strokeWidth: 1,
        text: transformedText,
      };
    });

  const updatedObjects = [...ObjectsWithoutTextBoxs, ...updatedTextBoxs].filter(
    (item) => item !== null
  );

  let newTemplate = {
    ...template,
    objects: updatedObjects,
    background: colorSet.background,
  };

  if (params.addImage === "yes") {
    const image = newTemplate.objects.find(
      (obj: any) => obj.type === "Image" && obj.name === "mainImg"
    );

    if (image) {
      image.src = mainImage;
    }
  }

  if (params.addFlag === "yes") {
    const flags = newTemplate.objects.filter(
      (obj: any) => obj.type === "Image" && obj.name === "flagImg"
    );
    const img = await FabricImage.fromURL(flagUrl!);

    if (flags.length) {
      flags.forEach(async (flag: any) => {
        flag.src = flagUrl;
        flag.scaleX = 50 / img.width;
        flag.scaleY = 25 / img.height;
      });
    }
  } else if (params.addFlag === "no") {
    newTemplate.objects = newTemplate.objects.filter(
      (obj: any) => !(obj.type === "Image" && obj.name === "flagImg")
    );
  }

  if (params.addCtaArrow === "yes") {
    const groups = newTemplate.objects.filter(
      (obj: any) => obj.type === "Group"
    );

    groups.forEach((group: any) => {
      const arrows = group.objects
        ? group.objects.filter(
            (obj: any) => obj.type === "Path" && obj.name === "arrow"
          )
        : [];

      if (arrows.length) {
        arrows.forEach((arrow: any) => (arrow.fill = colorSet.cta.background));
      }
    });
  } else {
    newTemplate.objects = newTemplate.objects.filter(
      (obj: any) => obj.type !== "Group"
    );
  }

  if (params.addCtaBtn === "no") {
    newTemplate.objects = newTemplate.objects.filter(
      (obj: any) =>
        !(obj.type === "Rect" && obj.name === "ctaButton") &&
        !(obj.type === "Textbox" && obj.name === "ctaText")
    );
  }

  if (params.addCtaBtn === "yes") {
    newTemplate.objects = newTemplate.objects.map((obj: any) => {
      if (obj.type === "Textbox" && obj.name === "ctaText") {
        return {
          ...obj,
          fill: colorSet.cta.color,
        };
      }
      return obj;
    });
  }

  const tempCanvas = new Canvas(undefined, {
    width: newTemplate.width,
    height: newTemplate.height,
    backgroundColor: newTemplate.background,
  });

  await tempCanvas.loadFromJSON(newTemplate);

  const canvas = adjustCTAButtonToText(tempCanvas);

  const dataJson = {
    ...canvas?.toJSON(),
    width: canvas?.width,
    height: canvas?.height,
    image: canvas?.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 2,
    }),
  };

  dataJson.objects.sort((a: any, b: any) => a.top - b.top);

  return dataJson;
};
