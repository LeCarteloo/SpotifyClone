import styled, { css } from "styled-components";
import { MdVerified } from "react-icons/md";
import PlayButton from "../buttons/PlayButton";
import FollowButton from "../buttons/FollowButton";
import MoreButton from "../buttons/MoreButton";
import { useParams } from "react-router-dom";
import PlaylistRow from "../playlist/PlaylistRow";
import PlaylistSection from "../sections/PlaylistSection";
import { CurrentSongInterface } from "../../types/types";
import artists from "../../data/artists.json";
import playlists from "../../data/playlists.json";
import UserSection from "../sections/UserSection";

const StyledSection = styled.section<StyledProps>`
  img {
  }
  .artist-img {
    top: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 50vh;
    min-height: 400px;
    ${({ bgImg }) =>
      bgImg &&
      css`
        background-image: url(${bgImg});
      `}
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
      @media (max-width: 480px) {
        min-width: 0;
      }
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

type StyledProps = {
  bgImg: string | undefined;
};

interface ArtistPageProps {
  current: CurrentSongInterface;
  onPlay: (current: CurrentSongInterface) => void;
}

const ArtistPage = ({ current, onPlay }: ArtistPageProps) => {
  const params = useParams();
  const artist = artists.find((artist) => artist.id.toString() === params.id);
  const artistPlaylists = playlists.filter(
    (playlist) => playlist.author.username === artist?.name
  );

  return (
    <StyledSection bgImg={artist?.bgImg}>
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
            isPlaying={
              current.isPlaying &&
              current.song?.artist.id === artist?.id &&
              current.playlist === undefined
            }
            onClick={() =>
              onPlay({
                isPlaying: !(
                  current.isPlaying &&
                  current.song?.artist.id === artist?.id &&
                  current.playlist === undefined
                ),
                song: artist?.albums[0].songList[0],
                playlist: undefined,
                currDuration:
                  current.song?.artist.id === artist?.id
                    ? current.currDuration
                    : 0,
              })
            }
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
                {artist &&
                  artist.albums[0].songList.map((song, i) => (
                    <PlaylistRow
                      key={i}
                      rowNumber={i + 1}
                      song={song}
                      isPlaying={
                        current.song?.id === song.id &&
                        current.isPlaying &&
                        current.song?.artist.id === artist.id &&
                        current.playlist === undefined
                      }
                      isCurrentSong={
                        current.song?.id === song.id &&
                        current.song?.artist.id === artist.id &&
                        current.playlist === undefined
                      }
                      onPlay={() =>
                        onPlay({
                          isPlaying: !(
                            current.song?.id === song.id &&
                            current.isPlaying &&
                            current.playlist === undefined
                          ),
                          song: song,
                          playlist: undefined,
                          currDuration:
                            current.song?.id === song.id
                              ? current.currDuration
                              : 0,
                        })
                      }
                    />
                  ))}
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
        {artistPlaylists.length > 0 && (
          <PlaylistSection
            title={`Featuring ${artist?.name}`}
            playlists={artistPlaylists}
            current={current}
            onPlay={onPlay}
          />
        )}
        {artist?.otherArtists && artist?.otherArtists.length > 0 && (
          <UserSection
            title={"Fans also likes"}
            users={artist?.otherArtists}
            type="Artist"
          />
        )}
      </div>
    </StyledSection>
  );
};

export default ArtistPage;
