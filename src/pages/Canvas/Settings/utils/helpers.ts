import { Canvas, Textbox } from "fabric";

export const makeBold = (canvas: Canvas, textBox: Textbox) => {
  const selection = textBox.getSelectionStyles(
    textBox.selectionStart,
    textBox.selectionEnd
  );
  if (selection.length === 0) return;

  const start = textBox.selectionStart!;
  const end = textBox.selectionEnd!;

  for (let i = start; i < end; i++) {
    textBox.setSelectionStyles({ fontWeight: "bold" }, i, i + 1);
  }

  canvas.renderAll();
};
