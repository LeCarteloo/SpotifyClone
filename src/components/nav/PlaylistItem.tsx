import styled from "styled-components";
import { FiVolume2 } from "react-icons/fi";
import { FaPause } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type PlaylistItemProps = {
  id: number;
  name: string;
  isPlaying?: boolean;
  onPause: () => void;
};

type StyleProps = {
  isPlaying?: boolean;
};

const StyledListItem = styled.li<StyleProps>`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 1.5em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  a {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({ theme }) => theme.mixins.opacityHover}
    &.active {
      opacity: 1;
    }
  }
  .volume-icon {
    color: var(--text-bright-accent);
  }
`;

const PlaylistItem = ({ id, name, isPlaying, onPause }: PlaylistItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const onHover = (isHovering: boolean) => {
    setIsHovering(isHovering);
  };

  return (
    <StyledListItem isPlaying={isPlaying}>
      <NavLink to={`/playlist/${id}`}>{name}</NavLink>
      {isPlaying && (
        <div
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          {isHovering ? (
            <button
              onClick={() => {
                onPause();
                setIsHovering(false);
              }}
            >
              <FaPause className="pause-icon" />
            </button>
          ) : (
            <FiVolume2 className="volume-icon" />
          )}
        </div>
      )}
    </StyledListItem>
  );
};

export default PlaylistItem;
