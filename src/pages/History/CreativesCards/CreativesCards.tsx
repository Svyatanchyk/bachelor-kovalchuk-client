import { Box, Typography } from "@mui/material";
import { useCreativesContext } from "../../../context/CreativesContext";
import {
  CreativeCard,
  StyledCardWrapper,
  StyledCreativeImage,
  StyledCreativesActions,
  StyledCreativesBox,
  StyledCreativesPreviewWrapper,
  StyledTypography,
} from "./styled";
import Button from "../../../components/Buttons/Button";

import downloadIcon from "/images/content/download.svg";
import editIcon from "/images/content/edit.svg";
import deleteIcon from "/images/content/delete.svg";
import deleteAllIcon from "/images/content/delete-all.svg";
import { StyledButton } from "./styled";
import { saveAllAsPng, saveAsSinglePng } from "../../../utils/canvasUtils";
import { useNavigate } from "react-router-dom";
import { useDeleteCreative } from "../../../hooks/useDeleteCreative";
import Loader from "../../../components/Loader";
import { useDeleteAllCreatives } from "../../../hooks/useDeleteAllCreatives";
import { useUser } from "../../../context/UserContext";

interface Props {
  creativesOptions?: any[];
  handleOpenEditor: () => void;
  isChangeble?: boolean;
}

const CreativesCards = ({
  handleOpenEditor,
  creativesOptions,
  isChangeble = false,
}: Props) => {
  const navigate = useNavigate();
  const { creatives, setActiveCreative, activeCreative, setCreatives } =
    useCreativesContext();
  const { setUserData, user } = useUser();

  const { mutate: deleteCreative, isPending: isPendingDeleteOne } =
    useDeleteCreative();

  const { mutate: deleteAllCreatives, isPending: isPendingDeleteAll } =
    useDeleteAllCreatives();

  const handleEditCreative = (creativeId: string) => {
    if (!creatives?.length) return;

    setActiveCreative(creativeId);
    handleOpenEditor();
  };

  const handleDeleteCreative = (creativeId: string) => {
    setCreatives((prev) =>
      prev.filter((creative) => creative.id !== creativeId)
    );
    deleteCreative(creativeId);
  };

  const handleDeleteAllCreatives = () => {
    deleteAllCreatives();
    if (user) {
      setUserData({
        ...user,
        createdCreatives: 0,
      });
    }

    setCreatives([]);
  };

  return (
    <StyledCreativesPreviewWrapper>
      {!creativesOptions?.length && (
        <StyledTypography>У вас ще немає жодного креативу</StyledTypography>
      )}

      {isPendingDeleteOne || isPendingDeleteAll ? (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <>
          <StyledCreativesBox>
            {creativesOptions?.length &&
              creativesOptions.map(({ creative, _id: id }, index) => (
                <Box key={id}>
                  <StyledCardWrapper
                    isActive={id === activeCreative && isChangeble}
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
                          <img
                            width={15}
                            src={downloadIcon}
                            alt="Download icon"
                          />
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
                          onClick={() => handleEditCreative(id)}
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

          {creativesOptions?.length && (
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
        </>
      )}

      {!creativesOptions?.length && (
        <Box sx={{ maxWidth: "250px", margin: "0 auto" }}>
          <Button onClick={() => navigate("/generate-creative")}>
            Створити креативи
          </Button>
        </Box>
      )}
    </StyledCreativesPreviewWrapper>
  );
};

export default CreativesCards;
