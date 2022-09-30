import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding: 0.85em;
  width: calc(100% - 0.85em * 2);
  min-width: 125px;
  max-width: 160px;
  overflow: hidden;
  text-decoration: none;
  color: var(--text-base);
  border-radius: var(--radius-md);
  background-color: var(--background-highlight);

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 0px 200px 0px var(--background-press);
  }

  h4 {
    margin-top: 0.7em;
    margin-bottom: 0.7em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover,
  &:focus-within {
    background-color: var(--background-elevated-highlight);
  }
`;

type UserBlockProps = {
  id: number;
  name: string;
  type: string;
};

const UserBlock = ({ id, name, type }: UserBlockProps) => {
  return (
    <StyledLink to={`/user/${id}`}>
      <img src="https://via.placeholder.com/200" alt="User avatar" />
      <h4>{name}</h4>
      <span>{type}</span>
    </StyledLink>
  );
};

export default UserBlock;
