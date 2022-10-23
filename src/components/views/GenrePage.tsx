import { useParams } from "react-router-dom";
import styled from "styled-components";
import genres from "../../data/genres.json";
import { useEffect, useState } from "react";
import PlaylistSection from "../sections/PlaylistSection";
import { useAppContext } from "../../context/AppContext";

const StyledSection = styled.section`
  padding-top: calc(var(--topbar-height) + 1.2em);
  height: calc(100% - (var(--topbar-height) + 1.2em));
`;

const GenrePage = () => {
  // Type of any for now
  const [genre, setGenre] = useState<any>();
  const params = useParams();

  useEffect(() => {
    const genre = genres.find((genre) => genre.id.toString() === params.id);

    setGenre(genre);
  }, []);

  return (
    <StyledSection>
      {genre &&
        genre.sections.map((section: any, i: number) => (
          <PlaylistSection
            key={i}
            title={section.title}
            playlists={section.playlists}
          />
        ))}
    </StyledSection>
  );
};

export default GenrePage;
