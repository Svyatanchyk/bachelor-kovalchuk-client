import { Canvas } from "fabric";

export const saveAsPng = (canvas: Canvas | null) => {
  if (!canvas) return;

  const dataUrl = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `canvas_${new Date()
    .toISOString()
    .replace(/[:.]/g, "-")}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const saveAsJSON = (canvas: Canvas | null) => {
  if (!canvas) return;

  const dataJson = canvas.toJSON();
  console.log(dataJson);
  const dataStringify = JSON.stringify(dataJson);
  console.log(dataStringify);

  localStorage.setItem("creative", dataStringify);
};

export const loadCanvasFromJSON = (canvas: Canvas | null, json: string) => {
  if (!canvas) return;
  console.log("Should work");

  canvas.clear();
  canvas.loadFromJSON(json, () => {
    canvas.renderAll();
  });

  setTimeout(() => {
    canvas.setZoom(1.01);
    canvas.setZoom(1);
  }, 50);
};
