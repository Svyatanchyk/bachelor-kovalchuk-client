// import { Canvas, FabricImage, Group, Rect, Shadow, Textbox } from "fabric";
import { Canvas } from "fabric";
import {
  loadCountryFlag,
  loadImageFromPexels,
  // loadImageFromUnsplash,
} from "../../utils/imageUtils";

// import { customFontNames } from "../../constants/customFonts";
import { convertImgToBase64 } from "../../utils/imageUtils";
import {
  // distributeCreativeSettings,
  generateCreativeSettings,
  handleTextTransformation,
} from "./utils";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { TextType } from "../../context/types";
import { colors } from "../../constants/colors";
// import { arrowImages } from "../../constants/arrows";
// import { addSvgFromPublic } from "../../utils/canvasUtils";
import { longTemplates, mediumTemplates, shortTemplates } from "./templates";

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
  console.log("texts", params.textVariations);
  const numberOfGeneratedTexts = Object.keys(params.textVariations).length;

  const formats = Array.from(
    { length: numberOfGeneratedTexts },
    () => params.creativeFormats
  );

  console.log("formats", formats);

  const addImages = Array.from(
    { length: numberOfGeneratedTexts },
    () => params.addImage
  );

  console.log("addImages", addImages);

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

  console.log("Configs: ", configs);

  const flag = await loadCountryFlag(params.selectedCountry!);
  const flagUrl = flag[0]?.flags.svg;
  const baseFlagUrl = await convertImgToBase64(flagUrl);

  const pexelsImgs = await loadImageFromPexels(params.vertical);

  const creativePromises = configs.map(async (config) => {
    const textComponents = config.text.length;
    const creativeType =
      textComponents === 3 ? "medium" : textComponents === 2 ? "short" : "long";

    let randomTemplate;

    // Вибір шаблону для кожного креативу
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

  const generatedCreatives = await Promise.all(creativePromises);
  console.log("Creatives ", generatedCreatives);

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

  objects.map((object: any) => {
    if (object.type === "Rect" && object.name === "ctaButton") {
      return {
        ...object,
        fill: colorSet.cta.background,
        stroke: colorSet.cta.btnStroke,
        strokeWidth: 2,
      };
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

  //Remove previos rect
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

  // Adding flag image if addFlag is yes
  if (params.addFlag === "yes") {
    const flags = newTemplate.objects.filter(
      (obj: any) => obj.type === "Image" && obj.name === "flagImg"
    );

    if (flags.length) {
      flags.forEach((flag: any) => (flag.src = flagUrl));
    }
  } else if (params.addFlag === "no") {
    newTemplate.objects = newTemplate.objects.filter(
      (obj: any) => !(obj.type === "Image" && obj.name === "flagImg")
    );
  }

  // Applying colors to cta arrows or
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

  // Removing CTA button and text if addCtaBtn is no
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

  // if (params.addFlag === "yes") {
  //   try {
  //     const flag = await FabricImage.fromURL(flagUrl!);
  //     flag.set({ top: 0, left: 0 });
  //     flag.scaleToHeight(30);
  //     flag.scaleToWidth(50);

  //     tempCanvas.add(flag);
  //     tempCanvas.renderAll();
  //   } catch (error) {
  //     console.error("Error loading flag:", error);
  //   }
  // }

  // const svgArrow = await addSvgFromPublic("arrow1.svg");

  // if (svgArrow) {
  //   console.log("adding svg arrow");

  //   tempCanvas.add(svgArrow);
  // }

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

  console.log("Final Template: ", dataJson);

  return dataJson;
};
