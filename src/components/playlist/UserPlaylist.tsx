import styled from "styled-components";

type UserPlaylistProps = {
  id: number;
  name: string;
  playlistURL: string;
};

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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const UserPlaylist = ({ id, name, playlistURL }: UserPlaylistProps) => {
  return (
    <StyledDiv>
      <img src={playlistURL} alt="Playlist cover" />
      <h3>{name}</h3>
    </StyledDiv>
  );
};

export default UserPlaylist;
