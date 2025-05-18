import {
  StyledButton,
  StyledButtonsBox,
  StyledVariationsBox,
  StyledVariationsTypography,
} from "./styled";
import { MAX_TEXTS } from "./constants";
import { useUser } from "../../../../context/UserContext";
import { Box, Typography } from "@mui/material";

type Props = {
  activeButtonIndex: number;
  handleChangeNumberOfTexts: (activeButtonIndex: number) => void;
};

const VariationsSelector = ({
  activeButtonIndex,
  handleChangeNumberOfTexts,
}: Props) => {
  const { subscription } = useUser();

  const maxNumberOfVariations =
    subscription?.status === "active" && subscription.subType === "Proffesional"
      ? MAX_TEXTS
      : 1;

  return (
    <StyledVariationsBox>
      <StyledVariationsTypography>Варіації</StyledVariationsTypography>
      <StyledButtonsBox>
        {Array.from({ length: maxNumberOfVariations }).map((_, index) => (
          <StyledButton
            onClick={() => handleChangeNumberOfTexts(index + 1)}
            isActive={activeButtonIndex === index + 1}
          >
            {index + 1}
          </StyledButton>
        ))}
      </StyledButtonsBox>

      {subscription?.status !== "active" &&
        subscription?.status !== "Proffesional" && (
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ color: "#6a39a5", fontSize: "0.9rem" }}>
              Оформіть підписку{" "}
              <Box component="span" sx={{ fontWeight: 700 }}>
                Proffesional
              </Box>
              , щоб мати можливість генерувати більше варіацій за раз
            </Typography>
          </Box>
        )}
    </StyledVariationsBox>
  );
};

export default VariationsSelector;
