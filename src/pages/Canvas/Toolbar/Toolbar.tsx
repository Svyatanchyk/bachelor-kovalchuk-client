import { Box, Button, IconButton } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledToolbar } from "./styled";
import { Canvas } from "fabric";

import { saveAsJSON, saveAsPng } from "../../../utils/canvasUtils";

import {
  addArrow,
  addCircle,
  addImg,
  addLocalImage,
  addRectangle,
  addTextField,
} from "./utils/canvasObjects";
import InputFile from "../../../components/InputFile";
import { useEffect, useState } from "react";

interface ToolbarProps {
  canvas: Canvas | null;
}

const Toolbar = ({ canvas }: ToolbarProps) => {
  const [localImage, setLocalImage] = useState<string | null>(null);

  useEffect(() => {
    const uploadImage = async () => {
      await addLocalImage(canvas, localImage);
    };
    uploadImage();
  }, [localImage]);

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

      <InputFile setLocalImage={setLocalImage} />
      <Button onClick={() => saveAsPng(canvas)} variant="outlined">
        Save as Png
      </Button>
    </StyledToolbar>
  );
};

export default Toolbar;
