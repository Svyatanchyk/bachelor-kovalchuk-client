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
import {
  resetChanges,
  saveAsPng,
  saveChanges,
} from "../../../utils/canvasUtils";

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
import { useUpdateCreative } from "../../../hooks/useUpdateCreative";
import { enqueueSnackbar } from "notistack";

interface ToolbarProps {
  canvas: Canvas | null;
}

const Toolbar = ({ canvas }: ToolbarProps) => {
  const [localImage, setLocalImage] = useState<string | null>(null);
  const { creatives, setCreatives, activeCreative } = useCreativesContext();

  const { mutate: updateCreativeMutate } = useUpdateCreative();

  const handleSaveAppliedChanges = (canvas: Canvas | null) => {
    if (!canvas || !activeCreative) return;

    const modifiedCreative = saveChanges(canvas);
    if (!modifiedCreative) {
      enqueueSnackbar("Виникла помилка зберігання креативу");
      return;
    }

    updateCreativeMutate({
      creativeId: activeCreative,
      creative: modifiedCreative,
    });

    const updatedCreatives = creatives.map((item) => {
      if (item._id === activeCreative) {
        return {
          ...item,
          creative: modifiedCreative,
        };
      }
      return item;
    });

    setCreatives(updatedCreatives);
  };

  useEffect(() => {
    const uploadImage = async () => {
      await addLocalImage(canvas, localImage);
    };
    uploadImage();
  }, [localImage]);

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
          onClick={() => resetChanges(activeCreative, creatives, canvas)}
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
