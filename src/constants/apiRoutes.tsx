export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

export const API_ROUTES = {
  user: {
    signUp: "/user/signup",
    signIn: "/user/signin",
    requestPasswordReset: "/user/request-password-reset",
    resetPassword: "/user/password-reset",
  },
};
