import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: bold;
  padding: 0.5em 1em;
  font-size: 0.87rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--essential-base);
`;

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const onClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <StyledButton onClick={onClick}>
      {isFollowing ? "FOLLOWING" : "FOLLOW"}
    </StyledButton>
  );
};

export default FollowButton;
