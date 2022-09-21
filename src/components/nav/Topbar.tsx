import styled from "styled-components";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const StyledHeader = styled.header`
  grid-area: top-bar;
  width: calc(100% - 3.8em);
  height: 64px;
  background-color: #121212cc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.9em;

  .nav-buttons {
    display: flex;
    gap: 1.15em;
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
`;

const Topbar = () => {
  return (
    <StyledHeader>
      <div className="nav-buttons">
        <StyledButton>
          <BsChevronLeft size="1em" />
        </StyledButton>
        <StyledButton>
          <BsChevronRight size="1em" />
        </StyledButton>
      </div>
      <div className="nav-user">
        <button className="premium-btn">Przejdź</button>
        <button className="profile-btn">
          <img src="https://via.placeholder.com/200" alt="User avatar" />
          <div className="profile-btn-text">
            Pog Champ
            <BiCaretDown size="1.4em" />
          </div>
        </button>
      </div>
    </StyledHeader>
  );
};

export default Topbar;
