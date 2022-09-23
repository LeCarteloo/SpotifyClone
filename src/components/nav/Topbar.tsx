import styled from "styled-components";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NavButton from "../buttons/NavButton";

const StyledHeader = styled.header`
  grid-area: top-bar;
  width: calc(100% - 3.8em);
  height: 64px;
  background-color: #121212cc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.7em;
  padding: 0 1.9em;
  z-index: 99;

  .nav-buttons {
    display: flex;
    gap: 1.15em;
  }

  .library-links {
    flex-grow: 1;
    display: flex;
    gap: 1.5em;
  }

  .nav-user {
    display: flex;
    gap: 2em;
    .premium-btn {
      ${({ theme }) => theme.mixins.buttonSecondary}
    }
    .profile-btn {
      display: flex;
      padding: 0.1em;
      font-size: 0.875em;
      font-weight: 600;
      align-items: center;
      background-color: var(--essential-press);
      border-radius: var(--radius-big);

      &:hover {
        background-color: var(--background-elevated-highlight);
      }

      .profile-btn-text {
        padding: 0.4em;
        display: flex;
        align-items: center;
        gap: 0.5em;
      }

      img {
        border-radius: 50%;
        height: 28px;
      }
    }
  }
`;

const StyledButton = styled.button`
  background-color: var(--background-press);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBackward = () => {
    if (location.key === "default") {
      return;
    }
    navigate(-1);
  };

  const goForward = () => {
    if (location.key !== "default") {
      return;
    }
    navigate(1);
  };

  if (location.pathname === "/lyrics") {
    return <></>;
  }

  return (
    <StyledHeader>
      <div className="nav-buttons">
        <StyledButton
          onClick={goBackward}
          disabled={location.key === "default"}
        >
          <BsChevronLeft size="1em" />
        </StyledButton>
        <StyledButton onClick={goForward} disabled={true}>
          <BsChevronRight size="1em" />
        </StyledButton>
      </div>
      {location.pathname.includes("/library") && (
        <div className="library-links">
          <NavButton path="/library/playlists" text="Playlists" />
          <NavButton path="/library/podcasts" text="Podcasts" />
          <NavButton path="/library/artists" text="Artists" />
          <NavButton path="/library/albums" text="Albums" />
        </div>
      )}
      <div className="nav-user">
        <button className="premium-btn">Go Premium</button>
        <button className="profile-btn">
          <img src="https://via.placeholder.com/200" alt="User avatar" />
          <div className="profile-btn-text">
            User Name
            <BiCaretDown size="1.4em" />
          </div>
        </button>
      </div>
    </StyledHeader>
  );
};

export default Topbar;
