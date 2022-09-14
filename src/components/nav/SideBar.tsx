import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus, AiFillHeart } from "react-icons/ai";
import Logo from "../../assets/logo.svg";
import React from "react";

const StyledNav = styled.nav`
  height: calc(100% - 2.4em);
  width: var(--sidebar-width);
  background-color: var(--background-press);
  font-size: 16px;
  padding: 1.2em;
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
    height: 500px;
    ul {
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
    }
    li {
      ${({ theme }) => theme.mixins.opacityHover}
      font-size: var(--fs-sm);
      margin-bottom: 0.5em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

interface PlaylistItem {
  id: number;
  name: string;
}

type SidebarProps = {
  playlists?: PlaylistItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ playlists }) => {
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
          <div className="playlist-list">
            <ul>
              {playlists?.map((playlist) => (
                <li key={playlist.id}>
                  <a href={`/playlist/${playlist.id}`}>{playlist.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StyledAside>
    </StyledNav>
  );
};

export default Sidebar;
