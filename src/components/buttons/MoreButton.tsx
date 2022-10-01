import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
`;

const MoreButton = () => {
  return (
    <StyledButton>
      <BsThreeDots size="1.55em" />
    </StyledButton>
  );
};

export default MoreButton;
