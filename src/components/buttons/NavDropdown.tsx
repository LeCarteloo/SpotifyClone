import { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import styled from "styled-components";
import NavButton from "./NavButton";

type NavDropdownProps = {
  state: string | undefined;
};

const StyledDiv = styled.div`
  position: relative;
  button {
    background-color: var(--background-elevated-highlight);
    padding: 0.57em 1em;
    border-radius: var(--radius-md);
  }
  .btn-items {
    display: flex;
    align-items: center;
    gap: 0.5em;
    span {
      font-size: var(--fs-sm);
      font-weight: 800;
      text-transform: capitalize;
    }
  }
  .options {
    position: absolute;
    display: none;
    top: 3em;
    left: 0;
    width: 100%;
    background-color: var(--background-elevated-base);
    border-radius: var(--radius-md);
  }
  &.open {
    .options {
      display: flex;
      flex-direction: column;
    }
  }
`;

const NavDropdown = ({ state }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDiv className={`${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className="btn-items">
          <span>{state}</span>
          {isOpen ? <BiCaretUp size="1.4em" /> : <BiCaretDown size="1.4em" />}
        </div>
      </button>
      <div className="options">
        <NavButton path="/library/playlists" text="Playlists" />
        <NavButton path="/library/podcasts" text="Podcasts" />
        <NavButton path="/library/artists" text="Artists" />
        <NavButton path="/library/albums" text="Albums" />
      </div>
    </StyledDiv>
  );
};

export default NavDropdown;
