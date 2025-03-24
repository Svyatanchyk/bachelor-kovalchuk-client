import { Box, Button, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";
import CreativesPreview from "./CreativeSettings/CreativesPreview";
import { saveAllAsPng } from "../../utils/canvasUtils";
import { useCreativesContext } from "../../context/CreativesContext";

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
    <Modal
      open={isEditorOpen}
      onClose={handleCloseEditor}
      sx={{
        width: "100%",
        overflowY: "auto",
        backgroundColor: "#ffff",
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

        <Box
          sx={{
            paddingY: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CreativesPreview handleOpenEditor={handleOpenEditor} />

          <Button
            onClick={() => saveAllAsPng(creatives)}
            sx={{ mt: 5, color: "common.white" }}
            variant="contained"
          >
            Save All
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditorDialog;
