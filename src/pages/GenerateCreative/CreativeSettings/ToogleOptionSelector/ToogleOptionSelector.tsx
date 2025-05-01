import { Box, Typography } from "@mui/material";
import { ToogleSelectorOptionType } from "../types";
import { StyledButton } from "../styled";

interface Props {
  options: ToogleSelectorOptionType[];
  handleToogleButton: (key: string) => void;
  state: string;
  label: string;
}

const ToogleOptionSelector = ({
  options,
  handleToogleButton,
  state,
  label,
}: Props) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography sx={{ marginBottom: 1, color: "#D6B3FF" }}>
        {label}
      </Typography>

      <Box sx={{ display: "flex", gap: 1.5 }}>
        {options.map(({ key, label }) => (
          <StyledButton
            isActive={key === state}
            key={key}
            onClick={() => handleToogleButton(key)}
            variant="outlined"
          >
            {label}
          </StyledButton>
        ))}
      </Box>
    </Box>
  );
};

export default ToogleOptionSelector;
