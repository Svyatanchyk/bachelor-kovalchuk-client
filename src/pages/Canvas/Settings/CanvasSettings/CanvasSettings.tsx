import { Box } from "@mui/material";
import { TFiller } from "fabric";
import { ChangeEvent } from "react";
import ColorPicker from "../../../../components/ColorPicker";

interface Props {
  handleChangeCanvasBg: (event: ChangeEvent<HTMLInputElement>) => void;
  canvasBg: string | TFiller | null;
}

const CanvasSettings = (props: Props) => {
  const { handleChangeCanvasBg, canvasBg } = props;
  return (
    <Box>
      <ColorPicker
        handleColorChange={handleChangeCanvasBg}
        label="Колір фону"
        color={canvasBg}
        htmlFor="backgroundColor"
      />
    </Box>
  );
};

export default CanvasSettings;
