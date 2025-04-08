import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProfileWrapper = styled(Box)(() => ({
  position: "relative",
}));

export const StyledProfileBox = styled(Box)<{ isProfileOpen: boolean }>(
  ({ isProfileOpen, theme }) => ({
    position: "absolute",
    top: 60,
    left: -150,

    padding: theme.spacing(1, 3),
    width: 200,
    backgroundColor: theme.palette.grey[500],
    display: isProfileOpen ? "block" : "none",
  })
);
