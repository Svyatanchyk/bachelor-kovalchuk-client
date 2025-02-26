import { Canvas } from "fabric";
import { enqueueSnackbar } from "notistack";

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

export const loadCanvasFromJSON = (canvas: Canvas | null) => {
  if (!canvas) return;

  const rawJson = localStorage.getItem("creative");
  if (!rawJson) return;

  try {
    const {
      width: canvasWidth,
      height: canvasHeight,
      ...creativeData
    } = JSON.parse(rawJson);

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
