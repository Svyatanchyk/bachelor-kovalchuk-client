import { Box, InputLabel, Typography } from "@mui/material";
import { StyledAddImageButton, StyledTextField } from "./styled";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  setLocalImage: Dispatch<SetStateAction<string | null>>;
}

const InputFile = ({ setLocalImage }: Props) => {
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result as string);
        setLocalImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      {/* Associate InputLabel directly with the input */}
      <StyledTextField
        onChange={handleImageUpload}
        id="imageInput"
        type="file"
        sx={{ display: "none" }} // Hide the input element
      />

      <InputLabel htmlFor="imageInput">
        <Typography sx={{ color: "#D6B3FF", textAlign: "left", mb: 1 }}>
          Додати зображення
        </Typography>

        <StyledAddImageButton>
          <AddIcon sx={{ color: "#5B3B81" }} />
        </StyledAddImageButton>
      </InputLabel>
    </Box>
  );
};

export default InputFile;
