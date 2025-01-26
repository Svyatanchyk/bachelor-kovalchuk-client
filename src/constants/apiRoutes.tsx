export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ROUTES = {
  user: {
    signUp: "/user/signup",
    signIn: "/user/signin",
    requestPasswordReset: "/user/request-password-reset",
    resetPassword: "/user/password-reset",
  },
};
