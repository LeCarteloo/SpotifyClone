import { useEffect, useState } from "react";
import styled from "styled-components";
import lyricsData from "../../data/songLyrics.json";

const StyledSection = styled.section`
  width: calc(100% - 14.8em);
  padding: 4em 7.4em 0 7.4em;
  p {
    font-size: 2.87em;
    font-weight: 600;
    line-height: 1.57em;
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
