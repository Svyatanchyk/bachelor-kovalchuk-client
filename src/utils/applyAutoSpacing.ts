import { Canvas, Rect, Textbox } from "fabric";

export function adjustCTAButtonToText(canvas: Canvas): Canvas {
  const ctaButton = canvas
    .getObjects()
    .find((obj) => obj.name === "ctaButton") as Rect | undefined;
  const ctaText = canvas.getObjects().find((obj) => obj.name === "ctaText") as
    | Textbox
    | undefined;

  if (!ctaButton || !ctaText) return canvas;

  ctaText.initDimensions();
  const textWidth = ctaText.getScaledWidth();
  const textHeight = ctaText.getScaledHeight();
  const buttonWidth = ctaButton.getScaledWidth();

  console.log("Text width:", textWidth);
  console.log("Button width:", buttonWidth);

  const paddingX = Math.max(0.1 * textWidth, 20);
  const paddingY = Math.max(0.2 * textHeight, 10);

  if (textWidth > buttonWidth || ctaText._textLines.length > 2) {
    const newWidth = textWidth + paddingX;
    const newHeight = textHeight + paddingY;

    // Центруємо кнопку
    const left = canvas.getWidth() / 2 - newWidth / 2;
    const top = ctaButton.top ?? canvas.getHeight() / 2 - newHeight / 2;

    ctaButton.set({
      width: newWidth,
      height: newHeight,
      left,
      top,
    });

    // Центруємо текст в середині кнопки
    ctaText.set({
      left: left + newWidth / 2 - textWidth / 2,
      top: top + newHeight / 2 - textHeight / 2,
    });
  }

  ctaButton.setCoords();
  ctaText.setCoords();
  canvas.renderAll();

  return canvas;
}
