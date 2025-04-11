import axios from "axios";
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_API_UNSPLASH_ACCESS_KEY;
const PEXELS_ACCESS_KEY = import.meta.env.VITE_API_PEXELS_ACCESS_KEY;

export const convertImgToBase64 = async (imageUrl: string): Promise<string> => {
  try {
    const response = await axios.get(imageUrl, { responseType: "blob" });
    const blob = response.data;

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loadImageFromUnsplash = async (vertical: string) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${vertical}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    console.log("unsplash ", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadImageFromPexels = async (vertical: string) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${vertical}`,
      { headers: { Authorization: PEXELS_ACCESS_KEY } }
    );
    console.log("pexels ", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadCountryFlag = async (country: string) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${country}`
    );

    console.log("Flag: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
