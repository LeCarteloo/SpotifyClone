import styled from "styled-components";
import GenreBlock from "../blocks/GenreBlock";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionPadding};

  h2 {
    margin-top: 1.65em;
    margin-bottom: 1em;
  }

  .search-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5em;
    @media (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const Search = () => {
  return (
    <StyledSection>
      <h2>Browse all</h2>
      <div className="search-grid">
        <GenreBlock
          id={1}
          name="Podcasty"
          img="https://via.placeholder.com/200"
          bgColor="darkmagenta"
        />
        <GenreBlock
          id={1}
          name="Podcasty"
          img="https://via.placeholder.com/200"
          bgColor="darkred"
        />
        <GenreBlock
          id={1}
          name="Podcasty"
          img="https://via.placeholder.com/200"
          bgColor="green"
        />
        <GenreBlock
          id={1}
          name="Podcasty"
          img="https://via.placeholder.com/200"
          bgColor="darkgreen"
        />
      </div>
    </StyledSection>
  );
};

export default Search;
