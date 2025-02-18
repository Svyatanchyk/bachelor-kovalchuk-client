import {
  Canvas,
  Circle,
  FabricImage,
  Group,
  Line,
  Rect,
  Textbox,
  Triangle,
} from "fabric";

export const addRectangle = (canvas: Canvas | null) => {
  if (canvas) {
    const rect = new Rect({
      top: 100,
      left: 50,
      width: 100,
      height: 100,
      fill: "red",
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

export const addImg = (canvas: Canvas | null) => {
  if (canvas) {
    FabricImage.fromURL(
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    )
      .then((img) => {
        img.scale(0.1);
        img.set({
          left: 100,
          top: 100,
        });
        canvas.add(img);
        canvas.renderAll();
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }
};

export const addTextField = (canvas: Canvas | null) => {
  if (canvas) {
    const textField = new Textbox("Enter text here", {
      left: (canvas.width - 150) / 2,
      top: canvas.height / 2,
      width: 150,
      fontSize: 18,
      fontFamily: "Roboto",
    });
    canvas.add(textField);
  }
};

export const addArrow = (canvas: Canvas | null) => {
  if (canvas) {
    // Define the line (arrow shaft)
    const line = new Line([50, 100, 200, 100], {
      stroke: "black",
      strokeWidth: 3,
    });

    const arrowHead = new Triangle({
      width: 30,
      height: 50,
      fill: "black",
      left: 200,
      top: 100,
      originX: "center",
      originY: "center",
      angle: 90,
    });

    const arrow = new Group([line, arrowHead], {
      left: 50,
      top: 100,
      selectable: true,
    });

    canvas.add(arrow);
    canvas.renderAll();
  }
};
