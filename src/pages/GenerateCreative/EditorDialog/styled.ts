import { Box, IconButton, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflowY: "auto",
  backgroundColor: "transparent",
  backdropFilter: "blur(10px)",
  padding: theme.spacing(10, 0),
  touchAction: "pan-x pan-y",
  WebkitOverflowScrolling: "touch",
}));

export const StyledIconButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 30,
  right: 50,
  zIndex: 100,
}));

export const StyledCreativesPreviewBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
