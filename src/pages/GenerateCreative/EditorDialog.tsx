import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";
import CreativesPreview from "./CreativeSettings/CreativesPreview";

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
    <Modal
      open={isEditorOpen}
      onClose={handleCloseEditor}
      sx={{
        width: "100%",
        overflowY: "auto",
        backgroundColor: "#000",
      }}
    >
      <Box>
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleCloseEditor}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {children}
        </Box>

        <Box sx={{ height: 500 }}>
          <CreativesPreview handleOpenEditor={handleOpenEditor} />
        </Box>
      </Box>
    </Modal>
  );
};

export default EditorDialog;
