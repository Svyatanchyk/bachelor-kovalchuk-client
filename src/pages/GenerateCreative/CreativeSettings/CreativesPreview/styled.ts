import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCreativesPreviewWrapper = styled(Box)(() => ({
  maxHeight: "700px",
  overflow: "hidden",
}));

export const StyledCreativesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  maxHeight: "474.4px",
  overflowY: "auto",
  flexGrow: 1,
  padding: theme.spacing(4, 0),

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
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(5),
  },

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
