import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";
import users from "../../data/users.json";
import playlists from "../../data/playlists.json";
import PlaylistSection from "../sections/PlaylistSection";
import { CurrentSongInterface } from "../../types/types";
import UserBlock from "../blocks/UserBlock";
import UserSection from "../sections/UserSection";
import { useParams } from "react-router-dom";

const StyledSection = styled.section`
  width: 100%;
  .user-header {
    ${({ theme }) => theme.mixins.sectionPadding}
    padding-bottom: 1.8em;
    display: flex;
    gap: 1.4em;
    background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%),
      rgb(192, 80, 136);
    .user-avatar {
      border-radius: 50%;
      height: 232px;
      width: auto;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .profile {
        display: flex;
        align-items: center;
        span {
          margin-left: 0.5em;
        }
      }
      .user-name {
        font-size: clamp(36px, 5.5vw, 84px);
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
      .user-stats {
        margin-top: 2.5em;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .user-avatar {
        margin: 0 auto;
      }
    }
  }
  .user-content {
    position: relative;
    &::before {
      content: "";
      background: linear-gradient(
          rgba(0, 0, 0, 0.6) 0,
          var(--background-base) 100%
        ),
        rgb(192, 80, 136);
      position: absolute;
      width: 100%;
      height: 240px;
      left: 0;
      z-index: -1;
    }
    .user-buttons {
      display: flex;
      gap: 2em;
      padding: 1.25em 1.9em;
      width: calc(100% - 3.8em);
      button:first-child {
        font-weight: bold;
        padding: 0.5em 1em;
        font-size: 0.87rem;
        border-radius: var(--radius-md);
        border: 1px solid var(--essential-base);
      }
    }
  }
  .user-list {
    display: flex;
    gap: 1.6em;
    overflow: auto;
    padding-bottom: 0.5em;
    min-height: 100%;
    margin: 0 1.9em;
    @media (max-width: 480px) {
      margin: 0;
      padding: 0 1.9em;
    }
  }
`;

interface UserPageProps {
  current: CurrentSongInterface;
  onPlay: (current: CurrentSongInterface) => void;
}

const UserPage = ({ current, onPlay }: UserPageProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const params = useParams();

  const onFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const playlist = playlists.filter(
    (playlist) => playlist.author.id.toString() === params.id
  );

  const user = users.find((user) => user.id.toString() === params.id);

  return (
    <StyledSection>
      <div className="user-header">
        <img
          className="user-avatar"
          src="https://via.placeholder.com/300"
          alt="User avatar"
        />
        <div className="user-info">
          <div className="profile">
            {user?.isVerified && (
              <MdVerified size={"1.9em"} color={"#0c67d3"} />
            )}
            <span>PROFILE</span>
          </div>
          <h1 className="user-name">{user?.name}</h1>
          <div className="user-stats">
            <span>{user?.playlists.length} public playlists • </span>
            <span>{user?.followers.length} followers • </span>
            <span>{user?.following.length} following</span>
          </div>
        </div>
      </div>
      <div className="user-content">
        <div className="user-buttons">
          <button onClick={onFollow}>
            {isFollowing ? "FOLLOWING" : "FOLLOW"}
          </button>
          <button>
            <BsThreeDots size="1.55em" />
          </button>
        </div>
        {playlist && playlist.length > 0 && (
          <PlaylistSection
            title={"Public playlists"}
            playlists={playlist}
            current={current}
            onPlay={onPlay}
          />
        )}
        {user && user?.following.length > 0 && (
          <UserSection title={"Following"} users={user.following} />
        )}
        {user && user?.followers.length > 0 && (
          <UserSection title={"Followers"} users={user.followers} />
        )}
      </div>
    </StyledSection>
  );
};

export default UserPage;
