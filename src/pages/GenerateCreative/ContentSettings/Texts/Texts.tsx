import { Box, TextField } from "@mui/material";
import { StyledGeneratedTextBox } from "./styled";
import { TextType } from "../../../../context/types";

type Props = {
  textVariations: TextType;
  handleChangeText: (key: number, index: number, value: string) => void;
};

const Texts = ({ textVariations, handleChangeText }: Props) => {
  return (
    <StyledGeneratedTextBox>
      {Object.keys(textVariations).map((key) => (
        <Box key={key}>
          {textVariations[Number(key)].map((text, index) => (
            <TextField
              key={index}
              type="text"
              value={text}
              onChange={(e) =>
                handleChangeText(Number(key), index, e.target.value)
              }
            />
          ))}
        </Box>
      ))}
    </StyledGeneratedTextBox>
  );
};

export default Texts;
