import { useLocation } from "react-router-dom";
import { StyledLink, StyledNavlinksWrapper } from "./styled";
import { links } from "./links";

const Navlinks = () => {
  const { pathname } = useLocation();

  return (
    <StyledNavlinksWrapper>
      {links.map((link) => (
        <StyledLink isActive={link.path === pathname} to={link.path}>
          {link.label}
        </StyledLink>
      ))}
    </StyledNavlinksWrapper>
  );
};

export default Navlinks;
