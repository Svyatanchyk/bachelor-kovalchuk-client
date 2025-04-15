import { Canvas, Group, loadSVGFromURL } from "fabric";
import { enqueueSnackbar } from "notistack";
import { cutomFonts } from "../constants/customFonts";

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

    enqueueSnackbar("Changes saved successfully", { variant: "success" });
    return dataJson;
  } catch (error) {
    enqueueSnackbar("Opps, unable to save changes", { variant: "error" });
  }
};

export const saveAsPng = (canvas: Canvas | null) => {
  if (!canvas) return;

  try {
    const dataUrl = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `canvas_${new Date()
      .toISOString()
      .replace(/[:.]/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    enqueueSnackbar("Saved", { variant: "success" });
  } catch (error) {
    enqueueSnackbar("Opps, unable to save", { variant: "error" });
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
    console.error("Error parsing JSON from localStorage:", error);
  }
};

export const saveAllAsPng = (creatives: any[]) => {
  if (!creatives.length) return;

  console.log(creatives);

  try {
    creatives.forEach((creative) => {
      const tempCanvas = new Canvas(undefined, {
        width: 200,
        height: 200,
        backgroundColor: "#fff",
      });

      const {
        width: canvasWidth,
        height: canvasHeight,
        image,
        ...creativeData
      } = creative;

      if (typeof canvasWidth === "number" && typeof canvasHeight === "number") {
        tempCanvas.setDimensions({ width: canvasWidth, height: canvasHeight });
      }

      tempCanvas.clear();
      tempCanvas.loadFromJSON(creativeData, () => {
        tempCanvas.requestRenderAll();

        setTimeout(() => {
          tempCanvas.setZoom(1.01);
          tempCanvas.setZoom(1);

          saveAsPng(tempCanvas);
        }, 50);
      });
    });
  } catch (error) {
    enqueueSnackbar("Opps, unable to save creatives", { variant: "error" });
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
