import { Box, Typography } from "@mui/material";
import { useCreativesContext } from "../../../../context/CreativesContext";
import {
  CreativeCard,
  StyledCardWrapper,
  StyledCreativeImage,
  StyledCreativesActions,
  StyledCreativesBox,
  StyledCreativesPreviewWrapper,
} from "./styled";
import Button from "../../../../components/Buttons/Button";

import downloadIcon from "/images/content/download.svg";
import editIcon from "/images/content/edit.svg";
import deleteIcon from "/images/content/delete.svg";
import deleteAllIcon from "/images/content/delete-all.svg";
import { StyledButton } from "../styled";
import { saveAllAsPng, saveAsSinglePng } from "../../../../utils/canvasUtils";

interface Props {
  creativesOptions?: any[];
  handleOpenEditor: () => void;
  isChangeble?: boolean;
}

const CreativesPreview = ({
  handleOpenEditor,
  creativesOptions,
  isChangeble = false,
}: Props) => {
  const { creatives, setActiveCreative, activeCreative, setCreatives } =
    useCreativesContext();

  const handleClickCreative = (creativeIndex: number) => {
    setActiveCreative(creativeIndex);
    handleOpenEditor();
  };

  const handleDeleteCreative = (creativeIndex: number) => {
    const newCreatives = creatives.filter(
      (_, index) => index !== creativeIndex
    );

    setCreatives(newCreatives);
  };

  const creativesWithoutNull =
    creativesOptions || creatives.filter((creative) => creative !== null);

  return (
    <StyledCreativesPreviewWrapper>
      <StyledCreativesBox>
        {creativesWithoutNull.map((creative, index) => (
          <Box key={index}>
            <StyledCardWrapper
              isActive={index === activeCreative && isChangeble}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#D6B3FF",
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Креатив {index + 1}
              </Typography>

              <CreativeCard
                height={creative.height}
                width={creative.width}
                key={index}
              >
                <StyledCreativeImage src={creative.image} />
              </CreativeCard>
            </StyledCardWrapper>

            <Box sx={{ px: 2, mt: 2 }}>
              <Button
                sx={{ textTransform: "inherit" }}
                onClick={() => {
                  saveAsSinglePng(creative);
                }}
              >
                <Box
                  component="p"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  Вигрузити як PNG{" "}
                  <img width={15} src={downloadIcon} alt="Download icon" />
                </Box>
              </Button>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 3,
                  mt: 2,
                }}
              >
                <StyledButton
                  onClick={() => handleClickCreative(index)}
                  sx={{ px: 4, py: 1.5, width: "100%" }}
                >
                  <img width={15} src={editIcon} alt="Edit icon" />
                </StyledButton>
                <StyledButton
                  onClick={() => handleDeleteCreative(index)}
                  sx={{ px: 4, py: 1.5, width: "100%" }}
                >
                  <img width={12} src={deleteIcon} alt="Delete icon" />
                </StyledButton>
              </Box>
            </Box>
          </Box>
        ))}
      </StyledCreativesBox>

      {creativesWithoutNull.length && (
        <StyledCreativesActions>
          <Button
            sx={{ textTransform: "inherit", width: "100%" }}
            onClick={() => saveAllAsPng(creatives)}
          >
            <Box
              component="p"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Вигрузити всі як PNG{" "}
              <img width={15} src={downloadIcon} alt="Download icon" />
            </Box>
          </Button>
          <StyledButton
            onClick={() => setCreatives([])}
            sx={{ width: "100%", py: 1.5, px: 1 }}
          >
            <Box
              component="p"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Видалити всі
              <img width={15} src={deleteAllIcon} alt="Delete icon" />
            </Box>
          </StyledButton>
        </StyledCreativesActions>
      )}
    </StyledCreativesPreviewWrapper>
  );
};

export default CreativesPreview;
