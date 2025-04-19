import { ReactNode } from "react";
import { StyledListItem, StyledListItemTypography } from "./styled";
import tickIcon from "/images/plans/tick.svg";

interface Props {
  children: ReactNode;
}

const ListItem = ({ children }: Props) => {
  return (
    <StyledListItem disablePadding>
      <img src={tickIcon} alt="Tick icon" />
      <StyledListItemTypography>{children}</StyledListItemTypography>
    </StyledListItem>
  );
};

export default ListItem;
