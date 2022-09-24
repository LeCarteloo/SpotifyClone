import { NavLink } from "react-router-dom";
import styled from "styled-components";

type NavButtonProps = {
  path: string;
  text: string;
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--text-base);
  padding: 1em;
  border-radius: var(--radius-md);
  transition: background-color 0.1s ease-in-out;
  font-size: var(--fs-sm);
  font-weight: bold;
  &.active {
    background-color: var(--background-elevated-highlight);
  }
`;

const NavButton = ({ path, text }: NavButtonProps) => {
  return <StyledNavLink to={path}>{text}</StyledNavLink>;
};

export default NavButton;
