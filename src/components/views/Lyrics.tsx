import { useEffect, useState } from "react";
import styled from "styled-components";
import lyricsData from "../../data/songLyrics.json";

const StyledSection = styled.section`
  width: calc(100% - 8.8em);
  padding: 0 4.4em;
  p {
    font-size: 40px;
    /* line-height: 72px; */
    font-weight: bold;
    ${({ theme }) => theme.mixins.opacityHover}
    cursor: pointer;
  }

  div {
    padding: 4em 0 3em 0;
  }
`;

const Lyrics = () => {
  const [lyrics, setLyrics] = useState<string[]>();

  useEffect(() => {
    const separatedLyrics = lyricsData.lyrics.split("|");
    setLyrics(separatedLyrics);
  }, []);

  return (
    <StyledSection>
      {lyrics && lyrics.map((line) => <p>{line}</p>)}
      <div>Lyrics provided by Placeholder</div>
    </StyledSection>
  );
};

export default Lyrics;
