import styled, { css } from "styled-components";
import PlayButton from "../buttons/PlayButton";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";
import { Link } from "react-router-dom";

interface UserPlaylistProps {
  isPlaying: boolean;
  playlist: PlaylistInterface;
  currDuration: number;
  onPlay: (current: CurrentSongInterface) => void;
}

type StyledProps = {
  isPlaying: boolean;
};

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["isPlaying"].includes(prop),
})<StyledProps>`
  display: flex;
  align-items: center;
  background-color: var(--background-elevated-base);
  border-radius: var(--radius-small);
  height: 70px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: var(--text-base);

  img {
    height: 100%;
    width: auto;
    border-radius: var(--radius-small) 0 0 var(--radius-small);
  }

  h3 {
    margin-left: 0.5em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: clamp(0.8em, 1.5vw, 1.17em);
  }

  .play-button {
    position: absolute;
    right: 0.5em;
    transition: 0.2s ease-in-out;
    ${({ isPlaying }) =>
      isPlaying
        ? css`
            .play-button {
              transform: translateY(0px);
              opacity: 1;
            }
          `
        : css`
            transform: translateY(5px);
            opacity: 0;
          `}
  }

  &:hover,
  &:focus-within {
    background-color: var(--background-elevated-highlight);
    .play-button {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const UserPlaylist = ({
  isPlaying,
  playlist,
  onPlay,
  currDuration,
}: UserPlaylistProps) => {
  return (
    <StyledLink to={`/playlist/${playlist.id}`} isPlaying={isPlaying}>
      <img src={playlist.playlistURL} alt="Playlist cover" />
      <h3>{playlist.name}</h3>
      <div className="play-button">
        <PlayButton
          isPlaying={isPlaying}
          onClick={() =>
            onPlay({
              isPlaying: !isPlaying,
              playlist: playlist,
              song: playlist.songList[0],
              currDuration: currDuration,
            })
          }
          isGreen={true}
          size="2.5em"
        />
      </div>
    </StyledLink>
  );
};

export default UserPlaylist;
