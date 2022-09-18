import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus, AiFillHeart } from "react-icons/ai";
import Logo from "../../assets/logo.svg";
import React from "react";
import PlaylistItem from "./PlaylistItem";
import { CurrentSongInterface } from "../../types/types";

const StyledNav = styled.nav`
  grid-area: side-bar;
  height: 100%;
  width: var(--sidebar-width);
  background-color: var(--background-press);
  font-size: 16px;
  padding: 1.2em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--text-base);
    img {
      width: 58%;
    }
  }
  .nav-list {
    padding: 1.5em 0;
    li {
      ${({ theme }) => theme.mixins.opacityHover}
      &:not(:first-child) {
        margin-top: 0.75em;
      }
      a {
        display: flex;
        align-items: center;
        span {
          margin-left: 0.7em;
        }
      }
    }
  }
  .button-group {
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.8em;

    button {
      text-align: left;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      ${({ theme }) => theme.mixins.opacityHover}

      &.button-add {
        ${({ theme }) => theme.mixins.buttonAdd}
      }
      &.button-liked {
        ${({ theme }) => theme.mixins.buttonLiked}
      }
      span {
        margin-left: 0.7em;
      }
    }
  }
  hr {
    margin: 0.8em 0;
  }
  .playlist-list {
    width: 100%;
    overflow: auto;
    li {
      ${({ theme }) => theme.mixins.opacityHover}
      font-size: var(--fs-sm);
      padding-bottom: 0.5em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

interface Playlist {
  id: number;
  name: string;
}

type SidebarProps = {
  current: CurrentSongInterface;
  playlists?: Playlist[];
  onPlaylistPause: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  current,
  playlists,
  onPlaylistPause,
}) => {
  return (
    <StyledNav>
      <StyledAside>
        <a href="/" aria-current="page">
          <img src={Logo} alt="Spotify Logo" />
        </a>
        <ul className="nav-list">
          <li>
            <a href="/">
              <MdHomeFilled size="24px" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/search">
              <MdSearch size="24px" />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="/library">
              <VscLibrary size="24px" />
              <span>Library</span>
            </a>
          </li>
        </ul>
        <div>
          <div className="button-group">
            <button className="button-add">
              <div>
                <AiOutlinePlus />
              </div>
              <span>Create playlist</span>
            </button>
            <button className="button-liked">
              <div>
                <AiFillHeart />
              </div>
              <span>Liked tracks</span>
            </button>
          </div>
          <hr></hr>
        </div>
        <div className="playlist-list">
          <ul>
            {playlists?.map((playlist) => (
              <PlaylistItem
                key={playlist.id}
                id={playlist.id}
                name={playlist.name}
                isPlaying={
                  current.playlist &&
                  playlist.id === current.playlist!.id &&
                  current.isPlaying
                }
                onPause={onPlaylistPause}
              />
            ))}
          </ul>
        </div>
      </StyledAside>
    </StyledNav>
  );
};

export default Sidebar;
