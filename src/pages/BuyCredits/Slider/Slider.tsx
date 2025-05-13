import { Box, Stack, Typography } from "@mui/material";
import { StyledSlider } from "./styled";
import { Dispatch, SetStateAction } from "react";

interface SliderProps {
  handleChange: Dispatch<SetStateAction<number | number[]>>;
  value: number | number[];
}

const Slider = ({ handleChange, value }: SliderProps) => {
  const handleChangeSlider = (_: Event, newValue: number | number[]) => {
    handleChange(newValue);
  };

  return (
    <Box>
      <Typography sx={{ color: "#D6B3FF", fontSize: "1.1rem", mb: 3 }}>
        Оберіть кількість монет
      </Typography>

      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <SliderLabel amount="500" label="Min" />
        <StyledSlider
          min={500}
          max={50000}
          step={100}
          value={value}
          onChange={handleChangeSlider}
          defaultValue={500}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <SliderLabel amount="50K" label="Max" />
      </Stack>
    </Box>
  );
};

export default Slider;

interface SliderLabelProps {
  amount: string;
  label: string;
}

const SliderLabel = ({ amount, label }: SliderLabelProps) => {
  return (
    <Stack direction="column" spacing={0} alignItems="center">
      <Typography sx={{ fontSize: "1.3rem", color: "#D6B3FF" }}>
        {amount}
      </Typography>
      <Typography sx={{ color: "#5B3B81" }}>{label}</Typography>
    </Stack>
  );
};
