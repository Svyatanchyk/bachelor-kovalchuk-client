import { Box, TextField } from "@mui/material";
import { TFiller } from "fabric";
import { ChangeEvent } from "react";

interface Props {
  handleChangeCanvasBg: (event: ChangeEvent<HTMLInputElement>) => void;
  canvasBg: string | TFiller | null;
}

const CanvasSettings = (props: Props) => {
  const { handleChangeCanvasBg, canvasBg } = props;
  return (
    <Box sx={{ width: 250 }}>
      <TextField
        type="color"
        onChange={handleChangeCanvasBg}
        label="Canvas Background"
        value={canvasBg}
        fullWidth
      />
    </Box>
  );
};

export default CanvasSettings;
