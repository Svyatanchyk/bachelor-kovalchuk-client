import { Box, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";
import CreativesPreview from "../CreativeSettings/CreativesPreview";
import {
  StyledModal,
  StyledCreativesPreviewBox,
  StyledIconButton,
} from "./styled";

interface Props {
  children: ReactNode;
  isEditorOpen: boolean;
  handleOpenEditor: () => void;
  handleCloseEditor: () => void;
}

const EditorDialog = ({
  children,
  isEditorOpen,
  handleCloseEditor,
  handleOpenEditor,
}: Props) => {
  return (
    <StyledModal open={isEditorOpen} disableEnforceFocus>
      <Box>
        <Box sx={{ position: "relative" }}>
          <StyledIconButton onClick={handleCloseEditor}>
            <CloseIcon sx={{ color: "common.white" }} />
          </StyledIconButton>

          {children}
        </Box>

        <Container maxWidth="xl">
          <StyledCreativesPreviewBox>
            <CreativesPreview
              isChangeble={true}
              handleOpenEditor={handleOpenEditor}
            />
          </StyledCreativesPreviewBox>
        </Container>
      </Box>
    </StyledModal>
  );
};

export default EditorDialog;
