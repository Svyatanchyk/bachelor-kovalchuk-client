import { Box, Button, Typography } from "@mui/material";
import { ToogleSelectorOptionType } from "../types";

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
      <Typography sx={{ marginBottom: 2 }}>{label}</Typography>

      <Box sx={{ display: "flex", gap: 1.5 }}>
        {options.map(({ key, label }) => (
          <Button
            key={key}
            onClick={() => handleToogleButton(key)}
            variant="outlined"
            sx={{
              backgroundColor: key === state ? "#1976D2" : "transparent",
              color: key === state ? "#fff" : "#1976D2",
              borderColor: key === state ? "#1976D2" : "gray",
              "&:hover": {
                backgroundColor:
                  key === state ? "#1565C0" : "rgba(25, 118, 210, 0.1)",
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
