import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGenerationBlock = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: "24px",
  minHeight: "200px",
  padding: theme.spacing(3, 4),
  boxSizing: "border-box",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: 700,
}));
