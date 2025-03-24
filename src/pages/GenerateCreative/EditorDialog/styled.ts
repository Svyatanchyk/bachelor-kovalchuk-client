import { Box, IconButton, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)(({ theme }) => ({
  width: "100%",
  overflowY: "auto",
  backgroundColor: theme.palette.common.white,
}));

export const StyledIconButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  right: 10,
}));

export const StyledCreativesPreviewBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
