import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import LikeButton from "../buttons/LikeButton";
import PlayButton from "../buttons/PlayButton";
import PlaylistRow from "../playlist/PlaylistRow";
import { useEffect, useRef } from "react";

const StyledSection = styled.section`
  .playlist-header {
    display: flex;
    ${({ theme }) => theme.mixins.sectionPadding}
    background: linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),rgb(200, 40, 48);

    .playlist-cover {
      height: 232px;
      width: auto;
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
    table {
      position: relative;
      margin-top: 1.8em;
      width: 100%;
      border-collapse: collapse;

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
      tr:hover {
        background-color: var(--essential-gray);
      }
      th {
        font-weight: normal;
        text-align: left;
        padding-bottom: 0.2em;
        border-bottom: 1px solid var(--essential-subdued);
      }
      .col-1 {
        text-align: center;
        width: 50px;
      }
      .col-2 {
        width: 40%;
      }
      .col-3 {
        width: 27.5%;
      }
      .col-4 {
        width: 25%;
      }
      td {
        padding: 0.47em 0;
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
  }

  .table-header {
    position: sticky;
    width: 100%;
    top: 64px;
  }
`;

const PlaylistPage = () => {
  const tableHeaderRef = useRef(null);
  const onPlay = () => {};
  const onLike = () => {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        e.target.classList.toggle("is-pinned", e.intersectionRatio < 1);
        console.log(e.intersectionRatio);
      },
      { threshold: [1] }
    );

    if (tableHeaderRef.current) {
      observer.observe(tableHeaderRef.current);
    }
  }, [tableHeaderRef]);

  return (
    <StyledSection>
      <div className="playlist-header">
        <img
          src="https://via.placeholder.com/300"
          className="playlist-cover"
          alt="Playlist cover"
        />
        <div className="playlist-info">
          <div>PLAYLISTA</div>
          <h1 className="playlist-title">Polskie przeboje wszech czasów</h1>
          <p className="playlist-desc">
            Legendarne polskie piosenki na jednej playliście.
          </p>
          <div className="playlist-author">
            <Link to="/user/spotify">
              <b>Spotify</b> •
            </Link>
            <span>198 655 polubień •</span>
            <span>90 utworów, 6 godz. 13 min</span>
          </div>
        </div>
      </div>
      <div className="playlist-content">
        <div className="playlist-controls">
          <PlayButton
            isPlaying={false}
            onClick={onPlay}
            isGreen={true}
            size="3.5em"
          />
          <LikeButton isLiked={false} onClick={onLike} size="2em" />
          <button>
            <BsThreeDots size="1.55em" />
          </button>
        </div>
        <div>
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
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
              <PlaylistRow />
            </tbody>
          </table>
        </div>
      </div>
    </StyledSection>
  );
};

export default PlaylistPage;
