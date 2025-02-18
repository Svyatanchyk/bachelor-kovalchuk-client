import { Box, Button, IconButton } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledToolbar } from "./styled";
import { Canvas } from "fabric";

import {
  loadCanvasFromJSON,
  saveAsJSON,
  saveAsPng,
} from "../../../utils/canvasUtils";
import {
  addArrow,
  addCircle,
  addImg,
  addRectangle,
  addTextField,
} from "./utils/canvasObjects";

interface ToolbarProps {
  canvas: Canvas | null;
}

const Toolbar = ({ canvas }: ToolbarProps) => {
  return (
    <StyledToolbar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => addArrow(canvas)}>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton onClick={() => addTextField(canvas)}>
          <TextFieldsIcon />
        </IconButton>
        <IconButton onClick={() => addRectangle(canvas)}>
          <CropSquareIcon />
        </IconButton>
        <IconButton onClick={() => addCircle(canvas)}>
          <RadioButtonUncheckedIcon />
        </IconButton>
      </Box>

      <Button onClick={() => saveAsJSON(canvas)} variant="outlined">
        Save as Json
      </Button>

      <Button onClick={() => addImg(canvas)} variant="outlined">
        Add image
      </Button>

      <Button onClick={() => saveAsPng(canvas)} variant="outlined">
        Save as Png
      </Button>

      <Button
        onClick={() =>
          loadCanvasFromJSON(canvas, localStorage.getItem("creative")!)
        }
        variant="outlined"
      >
        Load canvas from json
      </Button>
    </StyledToolbar>
  );
};

export default Toolbar;
