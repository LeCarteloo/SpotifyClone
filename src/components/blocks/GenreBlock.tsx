import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["bgColor"].includes(prop),
})<StyleProps>`
  max-width: 180px;
  max-height: 180px;
  aspect-ratio: 1/1;
  width: 100%;
  height: calc(100% - 2em);
  padding: 1em;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--radius-md);
  color: var(--text-base);
  text-decoration: none;
  background-color: var(--essential-gray);

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}

  h3 {
    font-size: 1.4em;
  }

  img {
    position: absolute;
    width: 100px;
    height: 100px;
    transform: rotate(25deg);
    bottom: -4px;
    right: -17px;
    z-index: -1;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 10px;
  }
`;

type GenreBlockProps = {
  id: number;
  name: string;
  img: string;
  bgColor: string;
};

type StyleProps = {
  bgColor: string;
};

const GenreBlock = ({ id, name, img, bgColor }: GenreBlockProps) => {
  return (
    <StyledDiv>
      <StyledLink to={`/genre/${id}`} bgColor={bgColor}>
        <h3>{name}</h3>
        <img src={img} alt="Genre cover" />
      </StyledLink>
    </StyledDiv>
  );
};

export default GenreBlock;
