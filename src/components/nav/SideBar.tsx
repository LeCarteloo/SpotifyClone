import styled from "styled-components";
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus, AiFillHeart } from "react-icons/ai";
import Logo from "../../assets/logo.svg";
import React from "react";
import PlaylistItem from "./PlaylistItem";
import { CurrentSongInterface, PlaylistInterface } from "../../types/types";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  grid-area: side-bar;
  height: 100%;
  width: var(--sidebar-width);
  background-color: var(--background-press);
  font-size: 16px;
  padding: 1.5em;

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
      width: 131px;
      height: 40px;
    }
  }

  .nav-list {
    padding: 1.8em 0;
    li {
      &:not(:first-child) {
        margin-top: 1em;
      }
      a {
        ${({ theme }) => theme.mixins.opacityHover}
        display: flex;
        align-items: center;
        &.active {
          opacity: 1;
        }
        span {
          margin-left: 1.1em;
        }
      }
    }
  }
  .button-group {
    margin-top: 0.7em;
    display: flex;
    flex-direction: column;
    gap: 1.1em;

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
        margin-left: 1.1em;
      }
    }
  }
  hr {
    margin: 1em 0;
    height: 1px;
    border: none;
    background-color: var(--text-subdued);
  }
  .playlist-list {
    width: 100%;
    overflow: auto;
  }
`;

type SidebarProps = {
  current: CurrentSongInterface;
  playlists?: PlaylistInterface[];
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
            <NavLink to="/" end>
              <MdHomeFilled size="24px" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <FiSearch size="24px" />
              <span>Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library">
              <VscLibrary size="24px" />
              <span>Library</span>
            </NavLink>
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
