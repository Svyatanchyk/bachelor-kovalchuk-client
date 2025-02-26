import { Box, Button, InputLabel } from "@mui/material";
import { StyledTextField } from "./styled";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
        event.target.files = null;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <StyledTextField
        onChange={handleImageUpload}
        id="imageInput"
        type="file"
      />
      <InputLabel htmlFor="imageInput">
        <Button
          sx={{ width: "100%" }}
          variant="outlined"
          component="span"
          color="primary"
        >
          Add local image
        </Button>
      </InputLabel>
    </Box>
  );
};

export default InputFile;
