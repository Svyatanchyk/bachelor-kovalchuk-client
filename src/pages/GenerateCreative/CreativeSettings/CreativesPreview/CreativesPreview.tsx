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
import { useDeleteCreative } from "../../../../hooks/useDeleteCreative";
import { useDeleteAllCreatives } from "../../../../hooks/useDeleteAllCreatives";

interface Props {
  handleOpenEditor: () => void;
  isChangeble?: boolean;
}

const CreativesPreview = ({ handleOpenEditor, isChangeble = false }: Props) => {
  const { creatives, setActiveCreative, activeCreative, setCreatives } =
    useCreativesContext();

  const { mutate: deleteAllCreatives } = useDeleteAllCreatives();

  const { mutate: deleteCreative } = useDeleteCreative();

  const handleClickCreative = (creativeId: string) => {
    setActiveCreative(creativeId);
    handleOpenEditor();
  };

  const handleDeleteCreative = (creativeId: string) => {
    setCreatives((prev) =>
      prev.filter((creative) => creative._id !== creativeId)
    );
    deleteCreative(creativeId);
  };

  const handleDeleteAllCreatives = () => {
    deleteAllCreatives();
    setCreatives([]);
  };

  return (
    <StyledCreativesPreviewWrapper>
      <StyledCreativesBox>
        {creatives.map(({ creative, _id: id }, index) => (
          <Box key={id}>
            <StyledCardWrapper isActive={id === activeCreative && isChangeble}>
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

              <Box sx={{ px: 1, mt: 2 }}>
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
                    onClick={() => handleClickCreative(id)}
                    sx={{ px: 4, py: 1.5, width: "100%" }}
                  >
                    <img width={15} src={editIcon} alt="Edit icon" />
                  </StyledButton>
                  <StyledButton
                    onClick={() => handleDeleteCreative(id)}
                    sx={{ px: 4, py: 1.5, width: "100%" }}
                  >
                    <img width={12} src={deleteIcon} alt="Delete icon" />
                  </StyledButton>
                </Box>
              </Box>
            </StyledCardWrapper>
          </Box>
        ))}
      </StyledCreativesBox>

      {creatives.length && (
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
            onClick={handleDeleteAllCreatives}
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
