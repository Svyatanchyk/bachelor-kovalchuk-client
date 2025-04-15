import axios from "axios";
import { EXTERNAL_API } from "../constants/apiRoutes";
import { cutomFonts } from "../constants/customFonts";

export const fetchGooleFonts = async (): Promise<string[]> => {
  try {
    const response = await axios.get(EXTERNAL_API.GOOGLE_FONTS);
    const filteredFonts = response.data.items
      .filter(
        (font: any) =>
          font.category !== "display" && font.category !== "handwriting"
      )
      .slice(0, 50)
      .map((font: { family: string }) => font.family);

    if (filteredFonts.length === 0) return [];

    if (!document.querySelector("link[data-google-fonts]")) {
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${filteredFonts
        .map((font: string) => font.replace(/ /g, "+"))
        .join("&family=")}:wght@400&display=swap`;
      link.rel = "stylesheet";
      link.setAttribute("data-google-fonts", "true");
      document.head.appendChild(link);
    }

    const customFontNames = cutomFonts.map((font) => font.name);
    filteredFonts.push(...customFontNames);
    console.log(filteredFonts);

    return filteredFonts;
  } catch (error) {
    console.error("Error fetching Google Fonts:", error);
    return [];
  }
};
