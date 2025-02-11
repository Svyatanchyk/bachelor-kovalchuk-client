import { Canvas, FabricImage, Textbox } from "fabric";

// Function to generate a creative JSON
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

    // Add image if required
    if (addImage) {
      const imageUrl = "https://via.placeholder.com/150"; // Example image
      try {
        const img = await loadFabricImage(imageUrl);
        img.scaleToWidth(100);
        img.scaleToHeight(100);
        img.set({ left: 200, top: 100 });
        tempCanvas.add(img);
      } catch (error) {
        console.error("Failed to load image:", error);
      }
    }

    // Convert canvas to JSON
    resolve(tempCanvas.toJSON());
  });
};

const loadFabricImage = async (url: string): Promise<FabricImage> => {
  try {
    const img = await FabricImage.fromURL(url, {
      crossOrigin: "anonymous",
    });

    img.set({
      scaleX: 0.5,
      scaleY: 0.5,
    });

    return img;
  } catch (error) {
    throw new Error("Failed to load image");
  }
};
