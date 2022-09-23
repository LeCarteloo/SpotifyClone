import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import LibPlaylists from "../library/LibPlaylists";
import LibNoData from "../library/LibNoData";
import { HiMusicNote } from "react-icons/hi";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionPadding}
`;

const Library = () => {
  return (
    <StyledSection>
      <Routes>
        <Route index element={<Navigate to="/library/playlists" />} />
        <Route path="playlists" element={<LibPlaylists />} />
        <Route
          path="podcasts"
          element={
            <LibNoData
              icon={<HiMusicNote size={"5em"} />}
              title={"Create your first playlist"}
              text={"It's easy, we'll help you."}
              btnText={"Create playlist"}
              onClick={() => {}}
            />
          }
        />
      </Routes>
    </StyledSection>
  );
};

export default Library;
