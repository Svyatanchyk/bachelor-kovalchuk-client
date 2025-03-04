export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ROUTES = {
  user: {
    signUp: "/user/signup",
    signIn: "/user/signin",
    confirmVerification: "/user/verify",
    requestPasswordReset: "/user/request-reset-password",
    resetPassword: "/user/reset-password",
    regenerateVerificationLink: "/user/regenerate/verification",
  },
  token: {
    refreshAccessToken: "/refresh/token",
  },
  gpt: {
    generateText: "/gpt/generate-text",
  },
};

export const EXTERNAL_API = {
  REST_COUNTRIES: "https://restcountries.com/v3.1/all",
  GOOGLE_FONTS:
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCLGewx0GhEusintntV-KMJV-v8l65uHh0&sort=popularity",
};
