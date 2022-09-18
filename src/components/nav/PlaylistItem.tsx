import styled from "styled-components";
import { FiVolume2 } from "react-icons/fi";
import { FaPause } from "react-icons/fa";
import { useState } from "react";

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
  ${({ theme }) => theme.mixins.opacityHover}
  font-size: var(--fs-sm);
  padding-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  a {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
      <a href={`/userplaylist/${id}`}>{name}</a>
      {isPlaying && (
        <div
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          {isHovering ? (
            <button onClick={onPause}>
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
