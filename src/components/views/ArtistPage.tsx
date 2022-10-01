import styled from "styled-components";
import { MdVerified } from "react-icons/md";
import PlayButton from "../buttons/PlayButton";
import FollowButton from "../buttons/FollowButton";
import MoreButton from "../buttons/MoreButton";
import artists from "../../data/artists.json";
import { useParams } from "react-router-dom";
import PlaylistRow from "../playlist/PlaylistRow";

const StyledSection = styled.section`
  width: 100%;
  img {
  }
  .artist-img {
    top: -10%;
    right: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 50vh;
    min-height: 400px;
    background-image: url(https://i.scdn.co/image/ab67618600001016db6a510c647f79e3a4ce544d);
    background-position: 50% 15%;
    background-size: cover;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 400px;
      width: 100%;

      background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
      display: block;
    }
  }

  .artist-header {
    ${({ theme }) => theme.mixins.sectionPadding};
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    .artist-name {
      font-size: clamp(36px, 5.5vw, 84px);
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }
    div:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      span {
        margin-left: 0.5em;
      }
    }
    .artist-listeners {
      margin: 2.2em 0 1.8em 0;
    }
  }
  .artist-controls {
    ${({ theme }) => theme.mixins.innerSectionPadding};
    padding-top: 1.5em;
    display: flex;
    gap: 2em;
    align-items: center;
  }
  .artist-content {
    height: 5000px;
    width: 100%;
    background-color: var(--background-base);
  }
  .artist-popular {
    ${({ theme }) => theme.mixins.innerSectionPadding};
    padding-top: 1.8em;
    display: flex;
    gap: 1.55em;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
    table {
      table-layout: fixed;
      position: relative;
      width: 100%;
      border-collapse: collapse;
      margin-top: 1em;

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
      }
    }
    .artist-pick {
      min-width: 385px;
      .pick-info {
        display: flex;
        gap: 1em;
        margin-top: 1.7em;
        img {
          width: 75px;
          height: auto;
        }
        .pick-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .posted {
          display: flex;
          flex-direction: row;
          gap: 0.5em;
          align-items: center;
          img {
            width: 25px;
            height: auto;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

const ArtistPage = () => {
  const params = useParams();
  const artist = artists.find((artist) => artist.id.toString() === params.id);
  return (
    <StyledSection>
      <div className="artist-img"></div>
      <div className="artist-header">
        <div>
          {artist?.isVerified ? (
            <>
              <MdVerified size={"1.5em"} color={"#0c67d3"} />
              <span>Verified artist</span>
            </>
          ) : (
            <span>Artist</span>
          )}
        </div>
        <h1 className="artist-name">{artist?.name}</h1>
        <span className="artist-listeners">
          {artist?.listeners.toLocaleString()} monthly listeners
        </span>
      </div>
      <div className="artist-content">
        <div className="artist-controls">
          <PlayButton
            isPlaying={false}
            onClick={() => {}}
            isGreen={true}
            size="3.5em"
          />
          <FollowButton />
          <MoreButton />
        </div>
        <div className="artist-popular">
          <div>
            <h2>Popular</h2>
            <table>
              <tbody>
                {artist && (
                  <PlaylistRow
                    rowNumber={1}
                    song={artist?.albums[0].songList[0]}
                    isPlaying={false}
                    isCurrentSong={false}
                    onPlay={() => {}}
                  />
                )}
              </tbody>
            </table>
          </div>
          <div className="artist-pick">
            <h2>Artist pick</h2>
            <div className="pick-info">
              <img src="https://via.placeholder.com/100" alt="Artist pick" />
              <div className="pick-text">
                <div className="posted">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Artist avatar"
                  />
                  <span>Posted by Linkin Park</span>
                </div>
                <div>Linkin Park Complete Playlist</div>
                <div>Playlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default ArtistPage;
