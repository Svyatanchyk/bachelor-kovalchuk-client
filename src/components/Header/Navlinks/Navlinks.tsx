import { StyledLink, StyledNavlinksWrapper } from "./styled";

const links = [
  {
    label: "Головна",
    path: "#",
  },
  {
    label: "Генерація",
    path: "#",
  },
  {
    label: "Історія",
    path: "#",
  },
  {
    label: "Контакти",
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
