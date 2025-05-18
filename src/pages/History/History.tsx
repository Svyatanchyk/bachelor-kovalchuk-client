import { Box, Container } from "@mui/material";
import { useFetchCreatives } from "../../hooks/useFetchCreatives";
import { StyledHistory, StyledTypography } from "./styled";
import Loader from "../../components/Loader";
import { useUser } from "../../context/UserContext";
import CreativesCards from "./CreativesCards";
import EditorDialog from "../GenerateCreative/EditorDialog";
import CanvasPage from "../Canvas";
import { useEffect, useState } from "react";
import { useCreativesContext } from "../../context/CreativesContext";

const History = () => {
  const { data, isLoading } = useFetchCreatives();
  const { setUserData, user } = useUser();
  const { setCreatives } = useCreativesContext();

  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const creatives = data?.creatives;

  if (creatives?.length) {
    creatives.forEach((crt) =>
      crt.creative.objects.forEach((creative: any) => {
        if (creative.type === "Image") {
          creative.crossOrigin = "Anonymous";
        }
      })
    );
  }

  useEffect(() => {
    if (creatives?.length) {
      setCreatives(creatives);
      user && setUserData({ ...user, createdCreatives: creatives.length });
    }
  }, [creatives]);

  if (isLoading || !creatives)
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </Box>
    );

  return (
    <StyledHistory>
      <Container maxWidth="lg">
        <StyledTypography>Історія</StyledTypography>

        <CreativesCards
          creativesOptions={creatives}
          handleOpenEditor={() => setIsEditorOpen(true)}
        />

        <EditorDialog
          handleOpenEditor={() => setIsEditorOpen(true)}
          isEditorOpen={isEditorOpen}
          handleCloseEditor={() => setIsEditorOpen(false)}
        >
          <CanvasPage />
        </EditorDialog>
      </Container>
    </StyledHistory>
  );
};

export default History;
