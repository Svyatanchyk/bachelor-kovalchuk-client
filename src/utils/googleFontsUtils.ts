import axios from "axios";

export const fetchGooleFonts = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCLGewx0GhEusintntV-KMJV-v8l65uHh0&sort=popularity`
    );
    return response.data.items
      .slice(0, 50)
      .map((font: { family: string }) => font.family);
  } catch (error) {
    console.error("Error fetching Google Fonts:", error);
    return [];
  }
};

export const loadGoogleFont = (font: string) => {
  const formattedFont = font.replace(/\s+/g, "+");

  const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFont}:wght@400&display=swap`;

  if (!document.querySelector(`link[href="${fontUrl}"]`)) {
    const link = document.createElement("link");

    link.href = fontUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  document.body.style.fontFamily = font;
};
