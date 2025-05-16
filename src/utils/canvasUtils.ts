import { Canvas, Group, loadSVGFromURL } from "fabric";
import { enqueueSnackbar } from "notistack";
import { cutomFonts } from "../constants/customFonts";
import pica from "pica";

export const saveChanges = (canvas: Canvas | null) => {
  if (!canvas) return;

  try {
    const dataJson = {
      ...canvas.toJSON(),
      width: canvas.width,
      height: canvas.height,
      image: canvas.toDataURL({
        format: "png",
        quality: 1,
        multiplier: 1,
      }),
    };

    console.log("Saved creative: ", dataJson);

    enqueueSnackbar("Зміни успішно збережені", { variant: "success" });
    return dataJson;
  } catch (error) {
    enqueueSnackbar("Невдалося зберегти зміни", { variant: "error" });
  }
};

export const saveAsPng = (canvas: Canvas | null) => {
  if (!canvas) return;

  try {
    const dataUrl = canvas.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 2,
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `canvas_${new Date()
      .toISOString()
      .replace(/[:.]/g, "-")}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    enqueueSnackbar("Успішно збережено", { variant: "success" });
  } catch (error) {
    console.log(error);
    enqueueSnackbar("Не вдалося зберегти", { variant: "error" });
  }
};

export const saveAsJSON = (canvas: Canvas | null) => {
  if (!canvas) return;

  const dataJson = {
    ...canvas.toJSON(),
    width: canvas.width,
    height: canvas.height,
  };

  const dataStringify = JSON.stringify(dataJson);

  localStorage.setItem("creative", dataStringify);
};

export const loadCanvasFromState = (
  canvas: Canvas | null,
  creativeSettings: any
) => {
  if (!canvas) return;

  if (!creativeSettings) return;

  try {
    const {
      width: canvasWidth,
      height: canvasHeight,
      image,
      ...creativeData
    } = creativeSettings;

    if (typeof canvasWidth === "number" && typeof canvasHeight === "number") {
      canvas.setDimensions({ width: canvasWidth, height: canvasHeight });
    }

    canvas.clear();
    canvas.loadFromJSON(creativeData, () => {
      canvas.requestRenderAll();
    });

    setTimeout(() => {
      canvas.setZoom(1.01);
      canvas.setZoom(1);
    }, 50);
  } catch (error) {
    console.error("Error loading canvas from JSON:", error);
  }
};

export const saveAllAsPng = async (creatives: any[]) => {
  if (!creatives.length) return;

  try {
    const downloadPromises = creatives.map(async (crt: any) => {
      await saveAsSinglePng(crt);
    });

    await Promise.all(downloadPromises);
  } catch (error) {
    enqueueSnackbar("Не вдається зберегти", { variant: "error" });
  }
};

export const loadCustomFonts = async () => {
  const fontPromises = cutomFonts.map(
    ({ name, regularPath, boldPath, regularWeight, boldWeight }) => {
      const regularFont = new FontFace(name, `url(${regularPath})`, {
        weight: regularWeight,
      });
      const boldFont = new FontFace(name, `url(${boldPath})`, {
        weight: boldWeight,
      });

      return Promise.all([regularFont.load(), boldFont.load()]).then(() => {
        // Add fonts to document
        document.fonts.add(regularFont);
        document.fonts.add(boldFont);
        console.log(
          `Custom fonts for ${name} with weights ${regularWeight} and ${boldWeight} loaded`
        );
      });
    }
  );

  await Promise.all(fontPromises);
};

export const addSvgFromPublic = async (
  svgFileName: string
): Promise<Group | null> => {
  const svgUrl = `/arrows/svg/${svgFileName}`;

  try {
    const { objects, options } = await loadSVGFromURL(svgUrl);
    const validObjects = objects.filter((obj) => obj !== null);

    const svgObject = new Group(validObjects, options);

    const targetWidth = 30;
    const targetHeight = 70;

    svgObject.scaleToWidth(targetWidth);
    svgObject.scaleToHeight(targetHeight);

    // Set the position of the group
    svgObject.set({
      left: 100,
      top: 100,
      originX: "center",
      originY: "center",
      fill: "green",
    });

    svgObject.setCoords();

    svgObject.getObjects().forEach((obj) => {
      obj.set({
        fill: "#fff",
        stroke: "#000",
        strokeWidth: 5,
      });
    });

    return svgObject;
  } catch (error) {
    console.error("Error loading SVG:", error);
    return null;
  }
};

// export const saveAsSinglePng = async (creative: any) => {
//   if (!creative) return;

//   try {
//     const initCanvas = new Canvas(undefined, {
//       width: creative.width,
//       height: creative.height,
//     });

//     initCanvas.backgroundColor = creative.background;
//     initCanvas.renderAll();

//     await initCanvas.loadFromJSON(creative);
//     const creativeImg = initCanvas.toDataURL({
//       format: "png",
//       quality: 1,
//       multiplier: 2,
//     });

//     const link = document.createElement("a");
//     link.href = creativeImg;
//     link.download = `canvas_${new Date()
//       .toISOString()
//       .replace(/[:.]/g, "-")}.png`;

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     enqueueSnackbar("Збережено", { variant: "success" });
//   } catch (error) {
//     console.log(error);

//     enqueueSnackbar("Не вдається зберегти", { variant: "error" });
//   }
// };

export const saveAsSinglePng = async (creative: any) => {
  if (!creative) return;

  try {
    const format =
      creative.width === 500 && creative.height === 500 ? "square" : "portrait";

    const initCanvas = new Canvas(undefined, {
      width: creative.width,
      height: creative.height,
    });

    initCanvas.backgroundColor = creative.background;
    await initCanvas.loadFromJSON(creative);
    initCanvas.renderAll();

    const originalCanvas = initCanvas.getElement();

    const resizedCanvas = document.createElement("canvas");
    resizedCanvas.width = format === "square" ? 1000 : 1080;
    resizedCanvas.height = format === "square" ? 1000 : 1920;

    await pica().resize(originalCanvas, resizedCanvas);

    const blob = await pica().toBlob(resizedCanvas, "image/png", 1);

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `canvas_${new Date()
      .toISOString()
      .replace(/[:.]/g, "-")}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    enqueueSnackbar("Збережено", { variant: "success" });
  } catch (error) {
    console.error("Save error:", error);
    enqueueSnackbar("Не вдається зберегти", { variant: "error" });
  }
};
