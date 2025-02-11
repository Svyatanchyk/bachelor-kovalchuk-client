import { Box, Button, Typography } from "@mui/material";
import { StyledTypography } from "../styled";
import { StyledGenerationBlock } from "./styled";
import { useState } from "react";

import { FORMATS } from "./constants";
import { generateCreative } from "../creatives";
import { Link } from "react-router-dom";

const CreativeSettings = () => {
  const [creativeFormats, setCreativeFormats] = useState<
    Record<string, boolean>
  >({
    square: true,
    portrait: false,
  });

  const [generatedCreatives, setGeneratedCreatives] = useState<any[]>([]);

  const handleToogleButton = (key: string) => {
    setCreativeFormats((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGenerateCreative = async () => {
    const result = await generateCreative({
      text: "Unleash joy with our toys! Click to explore endless fun!",
      fontColor: "red",
      fontSize: 32,
      bgColor: "blue",
      addImage: true,
    });

    console.log(result);
    setGeneratedCreatives((prev) => [...prev, result]);
    localStorage.setItem("creative", JSON.stringify(result));
  };

  return (
    <StyledGenerationBlock>
      <StyledTypography>Creative Settings</StyledTypography>

      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={{ marginTop: 2 }}>
          <Typography sx={{ marginBottom: 2 }}>Choose format</Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            {FORMATS.map(({ key, label }) => (
              <Button
                key={key}
                onClick={() => handleToogleButton(key)}
                variant="outlined"
                sx={{
                  backgroundColor: creativeFormats[key]
                    ? "#1976D2"
                    : "transparent",
                  color: creativeFormats[key] ? "#fff" : "#1976D2",
                  borderColor: creativeFormats[key] ? "#1976D2" : "gray",
                  "&:hover": {
                    backgroundColor: creativeFormats[key]
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
      </Box>

      <Button
        onClick={handleGenerateCreative}
        sx={{ marginTop: 10 }}
        variant="contained"
      >
        Generate
      </Button>

      <Box>
        {generatedCreatives.map(() => (
          <Link to="/editor">View creative</Link>
        ))}
      </Box>
    </StyledGenerationBlock>
  );
};

export default CreativeSettings;
