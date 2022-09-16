import styled from "styled-components";
import { UserPlaylistType } from "../../types/types";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #0000004f;
  border-radius: var(--radius-small);
  height: 70px;
  img {
    height: 100%;
    width: auto;
    border-radius: var(--radius-small) 0 0 var(--radius-small);
  }
  h3 {
    margin-left: 1em;
  }
`;

const UserPlaylist = ({ name, photoURL }: UserPlaylistType) => {
  return (
    <StyledDiv>
      <img src={photoURL} alt="Playlist cover" />
      <h3>{name}</h3>
    </StyledDiv>
  );
};

export default UserPlaylist;
