import { useState } from "react";
import styled from "styled-components";
import LikeButton from "../buttons/LikeButton";

const StyledFooter = styled.footer`
  position: absolute;
  padding: 1em;
  bottom: 0;
  background-color: var(--background-elevated-base);
  width: 100%;
  height: var(--playbar-height);
  align-items: center;

  display: flex;

  .current-song {
    display: flex;
    align-items: center;
    height: 100%;
    width: 176px;
    img {
      margin-right: 0.5em;
    }
    h4 {
      font-size: var(--fs-xs);
    }
    h5 {
      font-size: var(--fs-xxs);
    }
  }
`;

const Playbar = () => {
  const [liked, setLiked] = useState(false);

  const onLike = () => {
    setLiked(!liked);
  };

  return (
    <StyledFooter>
      <div className="current-song">
        <img
          src="https://via.placeholder.com/50"
          alt="Song cover"
          width="50px"
          height="50px"
        />
        <div className="current-info">
          <h4>A Reason to Fight</h4>
          <h5>Disturbed</h5>
        </div>
      </div>
      <LikeButton isLiked={liked} onClick={onLike} />
    </StyledFooter>
  );
};

export default Playbar;
