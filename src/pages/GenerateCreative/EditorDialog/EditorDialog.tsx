import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";
import CreativesPreview from "../CreativeSettings/CreativesPreview";
import { saveAllAsPng } from "../../../utils/canvasUtils";
import { useCreativesContext } from "../../../context/CreativesContext";
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
  const { creatives } = useCreativesContext();

  return (
    <StyledModal open={isEditorOpen} disableEnforceFocus>
      <Box>
        <Box sx={{ position: "relative" }}>
          <StyledIconButton onClick={handleCloseEditor}>
            <CloseIcon />
          </StyledIconButton>

          {children}
        </Box>

        <StyledCreativesPreviewBox>
          <CreativesPreview
            isChangeble={true}
            handleOpenEditor={handleOpenEditor}
          />

          <Button
            onClick={() => saveAllAsPng(creatives)}
            sx={{ mt: 5, color: "common.white" }}
            variant="contained"
          >
            Save All
          </Button>
        </StyledCreativesPreviewBox>
      </Box>
    </StyledModal>
  );
};

export default EditorDialog;
