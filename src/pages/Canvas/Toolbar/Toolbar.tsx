import { Box, Typography } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledButton, StyledButtonsBox, StyledToolbar } from "./styled";
import { Canvas } from "fabric";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import downloadIcon from "/images/content/download.svg";
import SaveIcon from "@mui/icons-material/Save";
import { saveAsPng, saveChanges } from "../../../utils/canvasUtils";

import {
  addArrow,
  addCircle,
  addLine,
  addLocalImage,
  addRectangle,
  addTextField,
  addTriangle,
} from "./utils/canvasObjects";
import InputFile from "../../../components/InputFile";
import { useEffect, useState } from "react";
import { useCreativesContext } from "../../../context/CreativesContext";
import Button from "../../../components/Buttons/Button";

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
      <Typography sx={{ color: "#D6B3FF", textAlign: "left", mb: 1 }}>
        Додати об'єкти
      </Typography>
      <StyledButtonsBox>
        <StyledButton onClick={() => addArrow(canvas)}>
          <ArrowDownwardIcon sx={{ color: "#5B3B81" }} />
        </StyledButton>
        <StyledButton onClick={() => addTextField(canvas)}>
          <TextFieldsIcon sx={{ color: "#5B3B81" }} />
        </StyledButton>
        <StyledButton onClick={() => addRectangle(canvas)}>
          <CropSquareIcon sx={{ color: "#5B3B81" }} />
        </StyledButton>
        <StyledButton onClick={() => addCircle(canvas)}>
          <RadioButtonUncheckedIcon sx={{ color: "#5B3B81" }} />
        </StyledButton>
        <StyledButton onClick={() => addLine(canvas)}>
          <img style={{ padding: "4px 4px" }} src="/images/toolbar/line.svg" />
        </StyledButton>
        <StyledButton onClick={() => addTriangle(canvas)}>
          <ChangeHistoryIcon sx={{ color: "#5B3B81" }} />
        </StyledButton>
      </StyledButtonsBox>

      <InputFile setLocalImage={setLocalImage} />

      <Typography sx={{ color: "#D6B3FF", textAlign: "left", mb: 1 }}>
        Скасування/Повернення
      </Typography>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 4 }}
      >
        <StyledButton sx={{ width: "100%" }}>
          <img
            style={{ padding: "6px 4px" }}
            src="/images/toolbar/cancel.svg"
          />
        </StyledButton>
        <StyledButton sx={{ width: "100%" }}>
          <img
            style={{ padding: "6px 4px" }}
            src="/images/toolbar/return.svg"
          />
        </StyledButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          sx={{ textTransform: "inherit" }}
          onClick={() => saveAsPng(canvas)}
        >
          <Box
            component="p"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            Зберегти як PNG
            <img width={15} src={downloadIcon} alt="Download icon" />
          </Box>
        </Button>
        <Button onClick={() => handleSaveAppliedChanges(canvas)}>
          <Box
            component="p"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            Зберегти зміни
            <SaveIcon sx={{ color: "common.white", fontSize: "1.2rem" }} />
          </Box>
        </Button>

        <StyledButton
          sx={{
            width: "100%",
            paddingY: 2,
            borderRadius: "16px",
            fontWeight: 600,
          }}
        >
          <Box
            component="p"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#5B3B81",
            }}
          >
            Відмінити зміни
            <img
              style={{ padding: "6px 4px" }}
              src="/images/toolbar/cancel.svg"
            />
          </Box>
        </StyledButton>
      </Box>
    </StyledToolbar>
  );
};

export default Toolbar;
