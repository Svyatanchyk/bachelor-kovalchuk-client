import { Canvas, FabricImage, Textbox } from "fabric";

export const generateCreative = async ({
  text,
  fontSize,
  fontColor,
  bgColor,
  addImage,
}: {
  text: string;
  fontSize: number;
  fontColor: string;
  bgColor: string;
  addImage: boolean;
}) => {
  return new Promise<Object[]>(async (resolve) => {
    const tempCanvas = new Canvas(undefined, {
      width: 800,
      height: 800,
      backgroundColor: bgColor,
    });

    // Add text element
    const textElement = new Textbox(text, {
      left: tempCanvas.width / 2 - 300,
      top: 50,
      fontSize,
      fill: fontColor,
      width: 300,
      textAlign: "center",
    });

    tempCanvas.add(textElement);

    if (addImage) {
      if (tempCanvas) {
        FabricImage.fromURL(
          "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        )
          .then((img) => {
            img.scale(0.1);
            img.set({
              left: 100,
              top: 100,
            });
            tempCanvas.add(img);
            tempCanvas.renderAll();
          })
          .then(() => {
            resolve(tempCanvas.toJSON());
          })
          .catch((error) => {
            console.error("Error loading image:", error);
          });
      }
    }
  });
};
