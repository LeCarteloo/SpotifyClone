import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import LikeButton from "../buttons/LikeButton";
import PlayButton from "../buttons/PlayButton";
import PlaylistRow from "../playlist/PlaylistRow";
import { useRef } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { CurrentSongInterface } from "../../types/types";
import playlists from "../../data/userPlaylists.json";

const StyledSection = styled.section`
  .playlist-header {
    display: flex;
    ${({ theme }) => theme.mixins.sectionPadding}
    background: linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),rgb(200, 40, 48);
    .playlist-cover {
      position: relative;
      height: 232px;
      width: auto;
      &:hover,
      &:focus-within {
        button {
          display: flex;
        }
      }
      img {
        height: inherit;
        width: inherit;
      }
      button {
        position: absolute;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(12, 12, 12, 0.6);
        top: 0;
        display: none;
      }
    }
    .playlist-info {
      padding: 1.8em 0 1.8em 1.4em;
      div:first-child {
        font-size: 12px;
      }
      .playlist-title {
        font-size: 84px;
        line-height: 116px;
      }
      .playlist-desc {
        margin: 1.3em 0 1em 0;
        font-size: 15.5px;
      }
      .playlist-author {
        font-size: 14.2px;
        a {
          color: var(--text-base);
          text-decoration: none;
          ${({ theme }) => theme.mixins.underlineHover}
        }
      }
    }
  }
  .playlist-content {
    ${({ theme }) => theme.mixins.innerSectionPadding}
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      background: linear-gradient(
          rgba(0, 0, 0, 0.6) 0,
          var(--background-base) 100%
        ),
        rgb(200, 40, 48);
      position: absolute;
      width: 100%;
      height: 240px;
      left: 0;
    }

    background-color: var(--background-base);
    .playlist-controls {
      padding-top: 1.3em;
      display: flex;
      gap: 1.9em;
      position: relative;
    }
  }

  table {
    position: relative;
    margin-top: 1.8em;
    width: 100%;
    border-collapse: collapse;

    .table-header {
      position: sticky;
      width: 100%;
      top: 64px;
    }

    tbody {
      tr:first-child {
        display: block;
        padding-top: 1.1em;
      }
    }
    &:first-child td:first-child {
      border-top-left-radius: var(--radius-md);
    }
    &:first-child td:last-child {
      border-top-right-radius: var(--radius-md);
    }

    &:last-child td:first-child {
      border-bottom-left-radius: var(--radius-md);
    }
    &:last-child td:last-child {
      border-bottom-right-radius: var(--radius-md);
    }
    th {
      font-weight: normal;
      text-align: left;
      border-bottom: 1px solid var(--essential-subdued);
      padding: 0.2em 1em;
    }
    .song-info {
      display: flex;
      .song-title {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  .col-1 {
    width: 2% !important;
  }
  .col-5 {
    text-align: center;
  }
`;

interface PlaylistPageProps {
  current: CurrentSongInterface;
  onPlay: (current: CurrentSongInterface) => void;
}

const PlaylistPage = ({ current, onPlay }: PlaylistPageProps) => {
  const tableHeaderRef = useRef<HTMLTableSectionElement>(null);
  const params = useParams();
  // const onPlay = () => {};
  const onLike = () => {};

  const playlist = playlists.find(
    (playlist) => playlist.id.toString() === params.id
  );

  const isPlaying = current.playlist?.id === playlist?.id && current.isPlaying;

  return (
    <StyledSection>
      <div className="playlist-header">
        <figure
          className="playlist-cover"
          tabIndex={0}
          aria-label="Choose playlist image"
        >
          <img src="https://via.placeholder.com/300" alt="Playlist cover" />
          <button tabIndex={-1}>
            <HiOutlinePencil size={"3em"} />
            Choose image
          </button>
        </figure>
        <div className="playlist-info">
          <div>PLAYLISTA</div>
          <h1 className="playlist-title">
            {playlist?.name}
            {/* Polskie przeboje wszech czasów */}
          </h1>
          <p className="playlist-desc">
            Legendarne polskie piosenki na jednej playliście.
          </p>
          <div className="playlist-author">
            <Link to="/user/spotify">
              <b>Spotify </b>
            </Link>
            <span>• 198 655 polubień •</span>
            <span> 90 utworów, 6 godz. 13 min</span>
          </div>
        </div>
      </div>
      <div className="playlist-content">
        <div className="playlist-controls">
          <PlayButton
            isPlaying={isPlaying}
            onClick={() =>
              onPlay({
                isPlaying: !isPlaying,
                playlist: playlist,
                song: playlist?.songList[0],
                currDuration:
                  current.playlist?.id === playlist?.id
                    ? current.currDuration
                    : 0,
              })
            }
            isGreen={true}
            size="3.5em"
          />
          <LikeButton isLiked={false} onClick={onLike} size="2em" />
          <button>
            <BsThreeDots size="1.55em" />
          </button>
        </div>
        <div>
          {/* <div className="test-header">
            <div>#</div>
            <div>TYTUŁ</div>
            <div>ALBUM</div>
            <div>DATA DODANIA</div>
            <div>
              <BiTime size="1.25em" />
            </div>
          </div> */}
          <table>
            <thead className="table-header" ref={tableHeaderRef}>
              <tr>
                <th className="col-1">#</th>
                <th className="col-2">TYTUŁ</th>
                <th className="col-3">ALBUM</th>
                <th className="col-4">DATA DODANIA</th>
                <th className="col-5">
                  <BiTime size="1.25em" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
              {playlist?.songList.map((song, i) => (
                <PlaylistRow
                  rowNumber={i + 1}
                  song={song}
                  isPlaying={current.song?.id === song.id && isPlaying}
                  onPlay={onPlay}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StyledSection>
  );
};

export default PlaylistPage;
