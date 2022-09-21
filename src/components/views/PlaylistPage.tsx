import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import LikeButton from "../buttons/LikeButton";
import PlayButton from "../buttons/PlayButton";

const StyledSection = styled.section`
  width: 100%;
  height: 100%;

  .playlist-header {
    display: flex;
    width: 100%;
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
    .playlist-controls {
      padding-top: 1.3em;
      display: flex;
      gap: 1.9em;
    }
  }
`;

const PlaylistPage = () => {
  const onPlay = () => {};
  const onLike = () => {};

  return (
    <StyledSection>
      <div className="playlist-header">
        <img src="https://via.placeholder.com/300" className="playlist-cover" />
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
        <div></div>
      </div>
    </StyledSection>
  );
};

export default PlaylistPage;
