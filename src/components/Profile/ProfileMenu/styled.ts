import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProfileBox = styled(Box)<{ isProfileOpen: boolean }>(
  ({ isProfileOpen, theme }) => ({
    position: "absolute",
    top: 60,
    left: -150,

    padding: theme.spacing(1, 2),
    width: 200,
    backgroundColor: theme.palette.grey[500],
    display: isProfileOpen ? "block" : "none",
  })
);

export const StyledProfileMenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: "none",
  padding: theme.spacing(0.5, 1),
  minWidth: "100%",
  justifyContent: "flex-start",
}));
