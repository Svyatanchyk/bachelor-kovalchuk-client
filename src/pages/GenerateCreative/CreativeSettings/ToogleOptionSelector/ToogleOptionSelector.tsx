import { Box, Button, Typography } from "@mui/material";
import { ToogleSelectorOptionType } from "../types";

interface Props {
  options: ToogleSelectorOptionType[];
  handleToogleButton: (key: string) => void;
  state: Record<string, boolean>;
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
      <Typography sx={{ marginBottom: 2 }}>{label}</Typography>

      <Box sx={{ display: "flex", gap: 1.5 }}>
        {options.map(({ key, label }) => (
          <Button
            key={key}
            onClick={() => handleToogleButton(key)}
            variant="outlined"
            sx={{
              backgroundColor: state[key] ? "#1976D2" : "transparent",
              color: state[key] ? "#fff" : "#1976D2",
              borderColor: state[key] ? "#1976D2" : "gray",
              "&:hover": {
                backgroundColor: state[key]
                  ? "#1565C0"
                  : "rgba(25, 118, 210, 0.1)",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ToogleOptionSelector;
