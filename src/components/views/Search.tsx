import styled from "styled-components";
import GenreBlock from "../blocks/GenreBlock";
import genres from "../../data/genres.json";

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
  // const [genres, setGenres] = useState();

  return (
    <StyledSection>
      <h2>Browse all</h2>
      <div className="search-grid">
        {genres &&
          genres.map((genre) => (
            <GenreBlock
              key={genre.id}
              id={genre.id}
              name={genre.name}
              img={genre.img}
              bgColor={genre.color}
            />
          ))}
      </div>
    </StyledSection>
  );
};

export default Search;
