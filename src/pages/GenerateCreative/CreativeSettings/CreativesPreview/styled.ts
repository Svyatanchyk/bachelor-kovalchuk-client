import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCreativesPreviewWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  marginTop: theme.spacing(5),
}));

export const StyledCreativeImage = styled("img")(() => ({
  borderRadius: "16px",
  height: 200,
  width: 250,
  cursor: "pointer",
  aspectRatio: 1 / 1,
}));
