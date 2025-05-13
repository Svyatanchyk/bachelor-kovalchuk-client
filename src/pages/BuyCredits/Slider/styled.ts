import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSlider = styled(Slider)(() => ({
  "& .MuiSlider-track": {
    background: "linear-gradient(to right, #8e44ad, #c0a0ff)",
    border: "none",
  },
  "& .MuiSlider-rail": {
    background: "#3e3e3e",
    opacity: 0.3,
    border: "none",
  },
  "& .MuiSlider-thumb": {
    backgroundColor: "#fff",
    border: "2px solid #8e44ad",
    width: 16,
    height: 16,
    "&:hover, &.Mui-focusVisible, &.Mui-active": {
      boxShadow: "0px 0px 0px 8px rgba(142, 68, 173, 0.16)",
    },
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#8e44ad",
    color: "#fff",
    fontSize: "1rem",
    padding: "4px 8px",
    borderRadius: 4,
  },
}));
