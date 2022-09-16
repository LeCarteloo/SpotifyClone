import styled from "styled-components";

const StyledMain = styled.main`
  grid-area: main;
  height: 100%;
  width: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>Spotify Clone</h1>
    </StyledMain>
  );
};

export default Main;
