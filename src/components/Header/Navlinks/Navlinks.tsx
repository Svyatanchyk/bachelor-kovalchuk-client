import { StyledLink, StyledNavlinksWrapper } from "./styled";

const links = [
  {
    label: "Підписки",
    path: "#",
  },
  {
    label: "Підписки",
    path: "#",
  },
  {
    label: "Підписки",
    path: "#",
  },
  {
    label: "Підписки",
    path: "#",
  },
];

const Navlinks = () => {
  return (
    <StyledNavlinksWrapper>
      {links.map((link) => (
        <StyledLink to={link.path}>{link.label}</StyledLink>
      ))}
    </StyledNavlinksWrapper>
  );
};

export default Navlinks;
