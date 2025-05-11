import {
  Canvas,
  Circle,
  FabricImage,
  Line,
  Rect,
  Textbox,
  Triangle,
} from "fabric";
import { addSvgFromPublic } from "../../../../utils/canvasUtils";
import { getRandomIndex } from "../../../../utils/getRandomIndex";

export const addRectangle = (canvas: Canvas | null) => {
  if (canvas) {
    const rect = new Rect({
      top: 100,
      left: 50,
      width: 100,
      height: 100,
      fill: "red",
    });

    rect.on("scaling", function (this: Rect) {
      this.set({
        width: this.width * this.scaleX,
        height: this.height * this.scaleY,
        scaleX: 1,
        scaleY: 1,
      });

      // this.setCoords();
      canvas?.renderAll();
    });

    canvas.add(rect);
  }
};

export const addCircle = (canvas: Canvas | null) => {
  if (canvas) {
    const circle = new Circle({
      top: 100,
      left: 50,
      radius: 50,
      fill: "red",
    });
    canvas.add(circle);
  }
};

export const addTextField = (canvas: Canvas | null) => {
  if (canvas) {
    const textField = new Textbox("Enter text here", {
      left: (canvas.width - 250) / 2,
      top: canvas.height / 2,
      width: 250,
      fontSize: 32,
      fontFamily: "Rowdies",
    });
    canvas.add(textField);
  }
};

export const addArrow = async (canvas: Canvas | null) => {
  if (canvas) {
    const arrowsSvgs = ["arrow1.svg"];
    const randomArrow = arrowsSvgs[getRandomIndex(arrowsSvgs.length)];
    const svgArrow = await addSvgFromPublic(randomArrow);

    if (svgArrow) {
      canvas.add(svgArrow);
      canvas.renderAll();
    }
  }
};

export const addLine = async (canvas: Canvas | null) => {
  if (!canvas) return;

  const line = new Line([50, 100, 200, 100], {
    stroke: "#D6B3FF",
    strokeWidth: 6,
    selectable: true,
    evented: true,
  });

  canvas.add(line);
  canvas.renderAll();
};

export const addTriangle = async (canvas: Canvas | null) => {
  if (!canvas) return;

  const triangle = new Triangle({
    width: 100,
    height: 100,
    fill: "#D6B3FF",
    left: 150,
    top: 150,
    selectable: true,
  });

  canvas.add(triangle);
  canvas.renderAll();
};

export const addLocalImage = async (
  canvas: Canvas | null,
  localImage: string | null
) => {
  if (canvas && localImage) {
    try {
      const imageObject = await FabricImage.fromURL(localImage);

      imageObject.set({
        left: 100,
        top: 100,
      });
      canvas.add(imageObject);
      canvas.renderAll();
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }
};
