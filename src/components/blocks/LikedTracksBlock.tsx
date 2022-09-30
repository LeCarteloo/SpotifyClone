import styled from "styled-components";

const StyledDiv = styled.div`
  background: linear-gradient(135deg, #450af5, #c4efd9 160%);
  border-radius: var(--radius-md);
  /* height: 230px;
  width: 348px; */
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  gap: 0em;
  /* max-width: 300px; */
  grid-column: 1/3;

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
    <StyledDiv>
      <div className="list">
        <p>
          Author - Title, Author- title Author - Title, Author- title Author -
          Title, Author- title Title, Author- title Title, Author- title Title,
          Author- title Author- title Author- title Author- title Author- title
          Author- title Author- title Author- title Author- title Author- title
          Author- title Author- title Author- title Author- title Author- title
          Author- title Author- title Author-
          titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        </p>
      </div>
      <div className="info">
        <h1>Liked tracks</h1>
        <span>7 liked tracks</span>
      </div>
    </StyledDiv>
  );
};

export default LikedTracksBlock;
