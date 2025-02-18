import { Typography } from "@mui/material";
import { fontSizeType } from "../types";

interface Props {
  fontFamily: string | null;
  textColor: string | null;
  bgColor: string | null;
  fontSize: fontSizeType;
}

const ResultText = ({ fontFamily, textColor, bgColor, fontSize }: Props) => {
  return (
    <Typography
      sx={{
        fontFamily,
        fontSize: `${fontSize?.fontSize}px`,
        color: `${textColor}`,
        backgroundColor: `${bgColor}`,
        border: "1px solid #000",
        padding: 1,
        boxSizing: "border-box",
      }}
    >
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </Typography>
  );
};

export default ResultText;
