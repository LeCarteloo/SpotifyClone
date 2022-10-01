import { Link } from "react-router-dom";
import styled from "styled-components";
import songs from "../../data/songs.json";

const StyledLink = styled(Link)`
  background: linear-gradient(135deg, #450af5, #c4efd9 160%);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  gap: 0em;
  /* max-width: 300px; */
  grid-column: 1/3;
  text-decoration: none;
  color: var(--text-base);

  .list {
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    flex: 1;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      max-height: 147px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      margin-bottom: 1em;
      line-height: 1.5em;
      .subdued {
        color: var(--essential-gray);
      }
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 63px;
    h1 {
      font-size: 2em;
      line-height: 2.5em;
    }
  }
`;

const LikedTracksBlock = () => {
  return (
    <StyledLink to="/library/tracks">
      <div className="list">
        <p>
          {songs &&
            songs.map((song) => (
              <>
                <span>{song.artist}</span>
                <span className="subdued"> • </span>
                <span className="subdued">{song.name} </span>
              </>
            ))}
        </p>
      </div>
      <div className="info">
        <h1>Liked tracks</h1>
        <span>{songs.length} liked tracks</span>
      </div>
    </StyledLink>
  );
};

export default LikedTracksBlock;
