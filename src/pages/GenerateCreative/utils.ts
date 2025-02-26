import axios from "axios";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_API_UNSPLASH_ACCESS_KEY;

export const loadImageFromUnsplash = async (vertical: string) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${vertical}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
