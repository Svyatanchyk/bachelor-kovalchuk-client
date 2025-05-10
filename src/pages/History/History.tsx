import { Box, Container } from "@mui/material";
import { useFetchCreatives } from "../../hooks/useFetchCreatives";
import CreativesPreview from "../GenerateCreative/CreativeSettings/CreativesPreview";
import { StyledHistory } from "./styled";

const History = () => {
  const { data, isLoading } = useFetchCreatives();

  const creatives = data?.creatives;

  return (
    <StyledHistory>
      {isLoading && <Box>Loading ...</Box>}

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
