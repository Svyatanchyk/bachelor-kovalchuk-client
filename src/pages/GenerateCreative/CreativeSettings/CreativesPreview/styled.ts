import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCreativesPreviewWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const CreativeCard = styled(Box)<{ isActive?: boolean }>(
  ({ isActive }) => ({
    height: 200,
    width: 250,
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    transform: isActive ? "translateY(-30px)" : "translateY(0px)",
    transition: "transform 0.3s",

    "&:hover .styledActions": {
      opacity: 1,
    },
  })
);

export const StyledCreativeImage = styled("img")(() => ({
  height: "100%",
  width: "100%",
  cursor: "pointer",
  borderRadius: "16px",

  aspectRatio: 1 / 1,
}));

export const StyledActions = styled(Box)({
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  transition: "opacity 0.3s",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
});

export const StyledCardButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  textTransform: "capitalize",
}));
