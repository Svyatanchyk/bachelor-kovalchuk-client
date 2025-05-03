import { Canvas, FabricImage, Group, Rect, Shadow, Textbox } from "fabric";
import {
  loadCountryFlag,
  loadImageFromPexels,
  // loadImageFromUnsplash,
} from "../../utils/imageUtils";

import { customFontNames } from "../../constants/customFonts";
import { convertImgToBase64 } from "../../utils/imageUtils";
import {
  // distributeCreativeSettings,
  generateCreativeSettings,
  handleTextTransformation,
} from "./utils";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { TextType } from "../../context/types";
import { colors } from "../../constants/colors";
import { arrowImages } from "../../constants/arrows";
import { addSvgFromPublic } from "../../utils/canvasUtils";
import { longTemplates, mediumTemplates } from "./templates";

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

  const randomPhotoIndex = getRandomIndex(pexelsImgs.photos.length);
  const photoUrl = pexelsImgs.photos[randomPhotoIndex].src.landscape;
  const base64Image = await convertImgToBase64(photoUrl);

  const creativePromises = configs.map(async (config) => {
    const textComponents = config.text.length;
    const creativeType =
      textComponents === 3 ? "medium" : textComponents === 2 ? "short" : "long";

    let randomTemplate;

    // Вибір шаблону для кожного креативу
    if (creativeType === "medium") {
      if (config.format === "square") {
        randomTemplate =
          mediumTemplates.square[getRandomIndex(mediumTemplates.square.length)];
      }
      if (config.format === "portrait") {
        randomTemplate =
          mediumTemplates.portrait[
            getRandomIndex(mediumTemplates.portrait.length)
          ];
      }
    }

    if (creativeType === "long") {
      if (config.format === "square") {
        randomTemplate =
          longTemplates.square[getRandomIndex(longTemplates.square.length)];
      }
      if (config.format === "portrait") {
        randomTemplate =
          longTemplates.portrait[getRandomIndex(longTemplates.portrait.length)];
      }
    }

    const colorSet =
      colors[creativeType][getRandomIndex(colors[creativeType].length)];

    if (randomTemplate) {
      return generateMediumCreative(
        config,
        randomTemplate,
        colorSet,
        baseFlagUrl,
        base64Image
      );
    } else {
      return null;
    }
  });

  const generatedCreatives = await Promise.all(creativePromises);
  console.log("Creatives ", generatedCreatives);

  return generatedCreatives;
};

// Test medium template
// const template1 = async (params: templateParams) => {
//   const colorSet = colors.medium[getRandomIndex(colors.medium.length)];
//   const fontFamily =
//     customFontNames[getRandomIndex(customFontNames.length - 1)];

//   const svgArrow = await addSvgFromPublic("arrow1.svg");

//   const format =
//     params.format === "square"
//       ? { width: 500, height: 500 }
//       : { width: 400, height: 600 };

//   const tempCanvas = new Canvas(undefined, {
//     width: format.width,
//     height: format.height,
//     backgroundColor: colorSet.background,
//   });

//   if (svgArrow) {
//     tempCanvas.add(svgArrow);
//   }

//   const textElements = params.text.slice(0, 2).map((text, index) => {
//     console.log("Transformed Text: ", handleTextTransformation(text));

//     return new Textbox(handleTextTransformation(text).join(" "), {
//       left: tempCanvas.width / 2 - 400 / 2,
//       top: 30 * (index + 1),
//       fontSize: 32,
//       fontFamily,
//       fill: colorSet.textColors[index],
//       stroke: colorSet.cta.textStroke,
//       width: 400,
//       textAlign: "center",
//       editable: true,
//       shadow: new Shadow({
//         color: "rgba(0, 0, 0, 0.5)",
//         blur: 10,
//         offsetX: 5,
//         offsetY: 5,
//         affectStroke: false,
//       }),
//     });
//   });

//   textElements.map((txtElement) => tempCanvas.add(txtElement));

//   const flag = await loadCountryFlag(params.selectedCountry!);
//   const flagUrl = flag[0]?.flags.svg;
//   const baseFlagUrl = await convertImgToBase64(flagUrl);

//   const pexelsImgs = await loadImageFromPexels(params.vertical);

//   const randomPhotoIndex = getRandomIndex(pexelsImgs.photos.length);
//   const photoUrl = pexelsImgs.photos[randomPhotoIndex].src.landscape;
//   const base64Image = await convertImgToBase64(photoUrl);

//   if (params.addImage === "yes") {
//     try {
//       const img = await FabricImage.fromURL(base64Image);
//       img.scale(0.3);
//       img.set({
//         left: (tempCanvas.width - img.getScaledWidth()) / 2,
//         top: 150,
//       });

//       tempCanvas.add(img);
//       tempCanvas.renderAll();
//     } catch (error) {
//       console.error("Error loading image:", error);
//     }
//   }

//   if (params.addFlag === "yes") {
//     try {
//       const flag = await FabricImage.fromURL(baseFlagUrl);
//       flag.set({ top: 0, left: 0 });
//       flag.scaleToHeight(30);
//       flag.scaleToWidth(50);

//       tempCanvas.add(flag);
//       tempCanvas.renderAll();
//     } catch (error) {
//       console.error("Error loading flag:", error);
//     }
//   }

//   if (params.addCtaArrow === "yes") {
//     console.log("Add cta arrow: ", params.addCtaArrow);

//     const randomArrow = arrowImages[getRandomIndex(arrowImages.length - 1)];
//     try {
//       const arrowImg = await FabricImage.fromURL(randomArrow);
//       arrowImg.set({
//         top: tempCanvas.height - 150,
//         left: tempCanvas.width - 280,
//         fill: colorSet.cta.background,
//       });

//       tempCanvas.add(arrowImg);
//       tempCanvas.renderAll();
//     } catch (error) {
//       console.error("Error loading arrow:", error);
//     }
//   }

//   if (params.addCtaBtn === "yes") {
//     console.log("Add cta Btn: ", params.addCtaBtn);
//     const ctaRec = new Rect({
//       width: 300,
//       left: tempCanvas.width / 2 - 300 / 2,
//       fill: colorSet.cta.background,
//       rx: 15,
//       ry: 15,
//       height: 50,
//       top: 200,
//       stroke: colorSet.cta.btnStroke,
//       strokeWidth: 2,
//     });

//     const ctaText = new Textbox(params.text[params.text.length - 1], {
//       left: tempCanvas.width / 2 - 300 / 2,
//       fontSize: 24,
//       fontFamily,
//       fill: colorSet.cta.color,
//       stroke: colorSet.cta.textStroke,
//       width: 300,
//       textAlign: "center",
//       editable: true,
//       top: 210,
//     });

//     const ctaGroup = new Group([ctaRec, ctaText], {
//       left: tempCanvas.width / 2 - 300 / 2,
//       top: tempCanvas.height - 70,
//       selectable: true,
//     });

//     tempCanvas.add(ctaGroup);
//   }

//   tempCanvas.renderAll();

//   const dataJson = {
//     ...tempCanvas.toJSON(),
//     width: tempCanvas.width,
//     height: tempCanvas.height,
//     image: tempCanvas.toDataURL({
//       format: "png",
//       quality: 1,
//       multiplier: 1,
//     }),
//   };

//   console.log(dataJson);

//   return dataJson;
// };
// const template1 = async (params: templateParams) => {
//   const format =
//     params.format === "square"
//       ? { width: 500, height: 500 }
//       : { width: 600, height: 400 };

//   const tempCanvas = new Canvas(undefined, {
//     width: format.width,
//     height: format.height,
//     backgroundColor: "#FF8267",
//   });

//   const textElement = new Textbox(params.text[0], {
//     left: tempCanvas.width / 2 - 300 / 2,
//     top: 50,
//     fontSize: 16,
//     fontFamily: "Oswald",
//     fill: "#FFFFFF",
//     stroke: "#000",
//     width: 300,
//     textAlign: "center",
//     editable: true,
//   });

//   tempCanvas.add(textElement);

//   const pexelsImgs = await loadImageFromPexels(params.vertical);
//   console.log("Pexels: ", pexelsImgs);

//   const randomPhotoIndex = getRandomIndex(pexelsImgs.photos.length);
//   const photoUrl = pexelsImgs.photos[randomPhotoIndex].src.large;
//   const base64Image = await convertImgToBase64(photoUrl);

//   if (params.addImage === "yes") {
//     try {
//       const img = await FabricImage.fromURL(base64Image);
//       img.scale(0.3);
//       img.set({
//         left: (tempCanvas.width - img.getScaledWidth()) / 2,
//         top: 150,
//       });

//       tempCanvas.add(img);
//       tempCanvas.renderAll();
//     } catch (error) {
//       console.error("Error loading image:", error);
//     }
//   }

//   const dataJson = {
//     ...tempCanvas.toJSON(),
//     width: tempCanvas.width,
//     height: tempCanvas.height,
//     image: tempCanvas.toDataURL({
//       format: "png",
//       quality: 1,
//       multiplier: 1,
//     }),
//   };

//   return dataJson;
// };

// const template2 = async (params: templateParams) => {
//   const format =
//     params.format === "square"
//       ? { width: 500, height: 500 }
//       : { width: 600, height: 400 };

//   const tempCanvas = new Canvas(undefined, {
//     width: format.width,
//     height: format.height,
//     backgroundColor: "#FFDE67",
//   });

//   const textElement = new Textbox(params.text[0], {
//     left: tempCanvas.width / 2 - 300 / 2,
//     top: 250,
//     fontSize: 18,
//     fill: "#FFFFFF",
//     stroke: "#000",
//     width: 300,
//     textAlign: "center",
//   });

//   tempCanvas.add(textElement);

//   // const unsplashImgs = await loadImageFromUnsplash(params.vertical);
//   // const photoUrl = unsplashImgs.results[0].urls.regular;
//   // const base64Image = await convertImgToBase64(photoUrl);

//   const pexelsImgs = await loadImageFromPexels(params.vertical);
//   console.log("Pexels: ", pexelsImgs);

//   const randomPhotoIndex = getRandomIndex(pexelsImgs.photos.length);
//   const photoUrl = pexelsImgs.photos[randomPhotoIndex].src.large;
//   const base64Image = await convertImgToBase64(photoUrl);

//   if (params.addImage === "yes") {
//     try {
//       const img = await FabricImage.fromURL(base64Image);
//       img.scale(0.3);
//       img.set({
//         left: (tempCanvas.width - img.getScaledWidth()) / 2,
//         top: 20,
//       });

//       tempCanvas.add(img);
//       tempCanvas.renderAll();
//     } catch (error) {
//       console.error("Error loading image:", error);
//     }
//   }

//   const dataJson = {
//     ...tempCanvas.toJSON(),
//     width: tempCanvas.width,
//     height: tempCanvas.height,
//     image: tempCanvas.toDataURL({
//       format: "png",
//       quality: 1.0,
//       multiplier: 1,
//     }),
//   };

//   return dataJson;
// };

// const templates = [template1];

// 2 text + call to action templates
// const templateGroupMedium = [template1];

// 2 text + call to action templates
const generateMediumCreative = async (
  params: templateParams,
  template: any,
  colorSet: any,
  flagUrl: string | null,
  mainImage: string
) => {
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

  // const updatedRect = rect
  //   ? {
  //       ...rect,
  //       fill: colorSet.cta.background,
  //       stroke: colorSet.cta.btnStroke,
  //       strokeWidth: 2,
  //     }
  //   : null;

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
  const updatedObjects = [
    ...ObjectsWithoutTextBoxs,
    // updatedRect,
    ...updatedTextBoxs,
  ].filter((item) => item !== null);

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

  // Removing CTA button and text if addCtaArrow is no otherwise change color
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
