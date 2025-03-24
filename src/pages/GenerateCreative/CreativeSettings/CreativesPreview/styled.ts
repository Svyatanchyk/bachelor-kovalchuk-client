import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCreativesPreviewWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const StyledCreativeImage = styled("img")<{ isActive?: boolean }>(
  ({ isActive }) => ({
    borderRadius: "16px",
    height: 200,
    width: 250,
    cursor: "pointer",
    aspectRatio: 1 / 1,
    transform: isActive ? "translateY(-30px)" : "translateY(-10px)",
    transition: "transform 0.3s",
  })
);
