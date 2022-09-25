import styled from "styled-components";
import LikeButton from "../buttons/LikeButton";
import { BsThreeDots, BsFillPlayFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa";

const StyledTr = styled.tr`
  &:hover {
    background-color: var(--essential-tinted);
  }

  &:focus-within {
    background-color: var(--essential-gray);
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.25em;
  }

  .hide {
    visibility: hidden;
  }

  &:hover,
  &:focus-within {
    .number {
      display: none;
    }
    .hide {
      visibility: visible;
    }
  }

  .col-1 {
    position: relative;
  }
  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
  }
  td {
    padding: 0.47em 1em;
  }
`;

const PlaylistRow = () => {
  return (
    <StyledTr onDoubleClick={() => console.log("Double-click")} tabIndex={0}>
      <td className="col-1">
        <span className="number">1</span>
        <button className="play-btn hide">
          {false ? <BsFillPlayFill size={"1.5em"} /> : <FaPause size={"1em"} />}
        </button>
      </td>
      <td className="col-2">
        <div className="song-info">
          <img src="https://via.placeholder.com/40" alt="Song cover" />
          <div className="song-title">
            <span>Ocalic od zapomnienia</span>
            <span>Marek Grechuta</span>
          </div>
        </div>
      </td>
      <td className="col-3">Korowod</td>
      <td className="col-4">28 gru 2021</td>
      <td className="col-5">
        <div className="buttons">
          <div className="hide">
            <LikeButton isLiked={false} onClick={() => {}} />
          </div>
          <span>2:40</span>
          <div className="hide">
            <button>
              <BsThreeDots />
            </button>
          </div>
        </div>
      </td>
    </StyledTr>
  );
};

export default PlaylistRow;
