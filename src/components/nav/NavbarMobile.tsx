import styled from "styled-components";
import { MdHomeFilled } from "react-icons/md";
import { FaSpotify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  display: flex;
  justify-content: space-around;
  /* box-shadow: inset -5px -20px 20px 0 black; */
  /* box-shadow: -5px -20px 20px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.5); */

  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.9),
    #000,
    #000
  );

  a {
    ${({ theme }) => theme.mixins.colorHover};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 0.3em;
    span {
      font-size: 0.7em;
    }
  }
`;

const NavbarMobile = () => {
  return (
    <StyledNav>
      <NavLink to="/" end>
        <MdHomeFilled size={"1.5em"} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/search">
        <FiSearch size={"1.5em"} />
        <span>Search</span>
      </NavLink>
      <NavLink to="/library">
        <VscLibrary size={"1.5em"} />
        <span>Library</span>
      </NavLink>
      <a
        href="https://www.spotify.com/download/windows/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify size={"1.5em"} />
        <span>Download app</span>
      </a>
    </StyledNav>
  );
};

export default NavbarMobile;
