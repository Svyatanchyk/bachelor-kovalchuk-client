import { Box, Container } from "@mui/material";
import { useFetchCreatives } from "../../hooks/useFetchCreatives";
import { StyledHistory, StyledTypography } from "./styled";
import Loader from "../../components/Loader";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CreativesCards from "./CreativesCards";
import EditorDialog from "../GenerateCreative/EditorDialog";
import CanvasPage from "../Canvas";
import { useState } from "react";

const History = () => {
  const { data, isPending } = useFetchCreatives();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  const creatives = data?.creatives;

  if (isPending || !creatives)
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

  if (!isAuthenticated) {
    navigate("/signin");
  }

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
