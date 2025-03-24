import { Box, Button, IconButton } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledToolbar } from "./styled";
import { Canvas } from "fabric";

import { saveAsPng, saveChanges } from "../../../utils/canvasUtils";

import {
  addArrow,
  addCircle,
  addLocalImage,
  addRectangle,
  addTextField,
} from "./utils/canvasObjects";
import InputFile from "../../../components/InputFile";
import { useEffect, useState } from "react";
import { useCreativesContext } from "../../../context/CreativesContext";

interface ToolbarProps {
  canvas: Canvas | null;
}

const Toolbar = ({ canvas }: ToolbarProps) => {
  const [localImage, setLocalImage] = useState<string | null>(null);
  const { creatives, setCreatives, activeCreative } = useCreativesContext();

  useEffect(() => {
    const uploadImage = async () => {
      await addLocalImage(canvas, localImage);
    };
    uploadImage();
  }, [localImage]);

  const handleSaveAppliedChanges = (canvas: Canvas | null) => {
    if (!canvas) return;
    const modifiedCanvas = saveChanges(canvas);
    const newCreatives = creatives.map((currentCreative, index) => {
      if (index === activeCreative) {
        return modifiedCanvas;
      }
      return currentCreative;
    });

    setCreatives(newCreatives);
  };

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

      <InputFile setLocalImage={setLocalImage} />
      <Button onClick={() => saveAsPng(canvas)} variant="outlined">
        Save as Png
      </Button>
      <Button
        onClick={() => handleSaveAppliedChanges(canvas)}
        variant="outlined"
      >
        Save changes
      </Button>
    </StyledToolbar>
  );
};

export default Toolbar;
