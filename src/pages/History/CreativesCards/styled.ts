import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCreativesPreviewWrapper = styled(Box)(() => ({
  maxHeight: "582.1px",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  color: theme.palette.common.white,
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
}));

export const StyledCreativesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  maxHeight: "474.4px",
  overflowY: "auto",
  flexGrow: 1,
  padding: theme.spacing(4, 0),

  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-start",
  },

  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#9c5bba",
    borderRadius: "4px",
    border: "2px solid #2A1E3D",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#2A1E3D",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-corner": {
    backgroundColor: "#2A1E3D",
  },
}));

export const StyledCardWrapper = styled(Box)<{ isActive?: boolean }>(
  ({ isActive, theme }) => ({
    background: "transparent",
    border: "1px solid transparent",
    backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    borderRadius: "12px",
    padding: theme.spacing(2),
    transform: isActive ? "translateY(-30px)" : "translateY(0px)",
    transition: "transform 0.3s",
  })
);

export const CreativeCard = styled(Box)<{
  height: number;
  width: number;
}>(({ height, width }) => ({
  height: height / 2,
  width: width / 2,
  position: "relative",
  overflow: "hidden",
}));

export const StyledCreativeImage = styled("img")(() => ({
  height: "100%",
  width: "100%",
  borderRadius: "8px",

  aspectRatio: 1 / 1,
}));

export const StyledCreativesActions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),

  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "12px",
  padding: theme.spacing(2),
}));

interface StyledButtonProps {
  isActive?: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, isActive }) => ({
    overflow: "hidden",
    background: "transparent",
    borderRadius: "12px",
    border: "1px solid transparent",
    backgroundImage:
      "linear-gradient(#0f021c, #0f021c), linear-gradient(to right, #A52BBE, #ED92FF, #A52BBE)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    transition: "color 0.3s ease, box-shadow 0.3s ease",
    color: isActive ? theme.palette.common.white : "#5B3B81",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(to bottom, rgba(165, 43, 190, 0.2), rgba(237, 146, 255, 0.2))",
      opacity: isActive ? 1 : 0,
      transition: "opacity 0.4s ease",
      zIndex: 0,
    },

    "&:hover::before": {
      opacity: 1,
    },

    "& > *": {
      position: "relative",
      zIndex: 1,
    },

    "&:hover": {
      boxShadow: "0 0 12px rgba(237, 146, 255, 0.2)",
      color: theme.palette.common.white,
    },
  })
);
