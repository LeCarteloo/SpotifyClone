import { useEffect, useState } from "react";
import styled from "styled-components";
import lyricsData from "../../data/songLyrics.json";

const StyledSection = styled.section`
  /* width: calc(100% - 14.8em); */
  /* padding: 8em 8.5em 0 8.5em; */
  width: 83%;
  margin: 4em auto auto auto;
  p {
    font-size: clamp(1.2em, 4vw, 2.87em);
    font-weight: 600;
    line-height: 1.57em;
    ${({ theme }) => theme.mixins.opacityHover}
    cursor: pointer;
  }

  div {
    padding: 4em 0 3em 0;
  }

  .no-lyrics {
    text-align: center;
  }
`;

type LyricsProps = {
  songName: string | undefined;
};

const Lyrics = ({ songName }: LyricsProps) => {
  const [lyrics, setLyrics] = useState<string[]>();

  // Sample data, could be API call
  useEffect(() => {
    const lyrics = lyricsData.find((lyrics) => lyrics.name === songName);
    const separatedLyrics = lyrics?.lyrics.split("|");
    setLyrics(separatedLyrics);
  }, []);

  return (
    <StyledSection>
      {lyrics ? (
        <>
          {lyrics.map((line, i) => (
            <p key={`line-${i}`}>{line}</p>
          ))}
          <div>Lyrics provided by Placeholder</div>
        </>
      ) : (
        <div className="no-lyrics">
          <h2>This song doesn't have lyrics</h2>
        </div>
      )}
    </StyledSection>
  );
};

export default Lyrics;
