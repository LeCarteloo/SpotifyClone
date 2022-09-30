import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import LikeButton from "../buttons/LikeButton";
import PlayButton from "../buttons/PlayButton";
import PlaylistRow from "../playlist/PlaylistRow";
import { useRef } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { CurrentSongInterface } from "../../types/types";
import playlists from "../../data/playlists.json";

const StyledSection = styled.section<StyledProps>`
  .playlist-header {
    ${({ theme }) => theme.mixins.sectionPadding}
    padding-bottom: 1.8em;
    ${({ color }) =>
      color &&
      css`
        background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%),
          ${color};
      `}

    .header-wrapper {
      display: flex;
    }

    .playlist-cover {
      .cover-wrapper {
        position: relative;
        height: 232px;
        width: auto;

        img {
          height: inherit;
          width: inherit;
        }
      }

      &:hover,
      &:focus-within {
        button {
          display: flex;
        }
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
        left: 0;
        display: none;
      }
    }
    .playlist-info {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      justify-content: flex-end;
      margin: 0 1.4em;
      div:first-child {
        font-size: 12px;
      }
      .playlist-title {
        font-size: clamp(36px, 5.5vw, 84px);
        /* line-height: 116px; */
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
      .playlist-desc {
        margin: 1.3em 0 1em 0;
        font-size: 15.5px;
        color: var(--text-subdued);
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

    @media (max-width: 768px) {
      .header-wrapper {
        flex-direction: column;
      }
      .playlist-cover {
        margin: 0 auto;
      }
      .playlist-info {
        margin: 1.5em 0 0 0;
      }
    }
  }

  .playlist-content {
    ${({ theme }) => theme.mixins.innerSectionPadding}
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      ${({ color }) =>
        color &&
        css`
          background: linear-gradient(
              rgba(0, 0, 0, 0.6) 0,
              var(--background-base) 100%
            ),
            ${color};
        `}
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
    table-layout: fixed;
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
    width: 1%;
  }
  .col-2 {
    width: 35%;
  }
  .col-5 {
    text-align: center;
    width: 100px;
  }

  @media (max-width: 1080px) {
    .col-4 {
      display: none;
    }
  }
  @media (max-width: 480px) {
    .col-1 {
      display: none;
    }
    .col-3 {
      display: none;
    }
    .col-5 {
      display: none;
    }
  } ;
`;

interface PlaylistPageProps {
  current: CurrentSongInterface;
  onPlay: (current: CurrentSongInterface) => void;
}

type StyledProps = {
  color?: string;
};

const PlaylistPage = ({ current, onPlay }: PlaylistPageProps) => {
  const tableHeaderRef = useRef<HTMLTableSectionElement>(null);
  const params = useParams();
  const onLike = () => {};

  const playlist = playlists.find(
    (playlist) => playlist.id.toString() === params.id
  );

  const isPlaying = current.playlist?.id === playlist?.id && current.isPlaying;

  return (
    <StyledSection color={playlist?.color}>
      <div className="playlist-header">
        <div className="header-wrapper">
          <div
            className="playlist-cover"
            tabIndex={0}
            aria-label="Choose playlist image"
          >
            <div className="cover-wrapper">
              <img src="https://via.placeholder.com/300" alt="Playlist cover" />
              <button tabIndex={-1}>
                <HiOutlinePencil size={"3em"} />
                Choose image
              </button>
            </div>
          </div>
          <div className="playlist-info">
            <div>PLAYLISTA</div>
            <h1 className="playlist-title">{playlist?.name}</h1>
            <p className="playlist-desc">{playlist?.desc}</p>
            <div className="playlist-author">
              <Link to={`/user/${playlist?.author.id}`}>
                <b>{playlist?.author.username} </b>
              </Link>
              <span>• {playlist?.likes} likes •</span>
              <span> 90 tracks, 6 hr 13 min</span>
            </div>
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
                <th className="col-2">TITLE</th>
                <th className="col-3">ALBUM</th>
                <th className="col-4">DATE ADDED</th>
                <th className="col-5">
                  <BiTime size="1.25em" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
              {playlist?.songList.map((song, i) => (
                <PlaylistRow
                  key={i + 1}
                  rowNumber={i + 1}
                  song={song}
                  isCurrentSong={
                    current.song?.id === song.id &&
                    current.playlist?.id === playlist.id
                  }
                  isPlaying={current.song?.id === song.id && isPlaying}
                  onPlay={() =>
                    onPlay({
                      isPlaying: !(
                        current.song?.id === song?.id && current.isPlaying
                      ),
                      playlist: playlist,
                      song: song,
                      currDuration:
                        current.song?.id === song?.id
                          ? current.currDuration
                          : 0,
                    })
                  }
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
