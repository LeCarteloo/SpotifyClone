import styled from "styled-components";
import LikedTracks from "../playlist/LikedTracks";
import Playlist from "../playlist/Playlist";
import test from "../../data/favoritePlaylists.json";
import { Navigate, Route, Routes } from "react-router-dom";
import LibPlaylists from "../library/LibPlaylists";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionPadding}
`;

const Library = () => {
  return (
    <StyledSection>
      <Routes>
        <Route index element={<Navigate to="/library/playlists" />} />
        <Route path="playlists" element={<LibPlaylists />} />
      </Routes>
    </StyledSection>
  );
};

export default Library;
