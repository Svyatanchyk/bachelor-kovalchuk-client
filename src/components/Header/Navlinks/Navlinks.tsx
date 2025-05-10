import { StyledLink, StyledNavlinksWrapper } from "./styled";

const links = [
  {
    label: "Головна",
    path: "/",
  },
  {
    label: "Генерація",
    path: "/generate-creative",
  },
  {
    label: "Переклад",
    path: "#",
  },
  {
    label: "Історія",
    path: "/history",
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
