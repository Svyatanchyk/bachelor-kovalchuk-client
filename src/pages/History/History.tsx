import { Box, Container } from "@mui/material";
import { useFetchCreatives } from "../../hooks/useFetchCreatives";
import CreativesPreview from "../GenerateCreative/CreativeSettings/CreativesPreview";
import { StyledHistory } from "./styled";
import Loader from "../../components/Loader";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const History = () => {
  const { data, isPending } = useFetchCreatives();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const creatives = data?.creatives;

  if (isPending)
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
      <Container maxWidth="md">
        <CreativesPreview
          creativesOptions={creatives}
          handleOpenEditor={() => {}}
        />
      </Container>
    </StyledHistory>
  );
};

export default History;
