import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import { MdOutlinePodcasts, MdOutlineAlbum } from "react-icons/md";
import { PlaylistInterface } from "../../types/types";
import LibPlaylists from "../library/LibPlaylists";
import LibNoData from "../library/LibNoData";
import LibArtists from "../library/LibArtists";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionPadding}
`;

interface LibraryProps {
  userPlaylists: PlaylistInterface[];
}

const Library = ({ userPlaylists }: LibraryProps) => {
  return (
    <StyledSection>
      <Routes>
        <Route index element={<Navigate to="/library/playlists" replace />} />
        <Route
          path="playlists"
          element={<LibPlaylists userPlaylists={userPlaylists} />}
        />
        <Route
          path="podcasts"
          element={
            <LibNoData
              icon={<MdOutlinePodcasts size={"5em"} />}
              title={"Start following your first podcast"}
              text={"Follow podcasts you like, by clicking Follow button."}
              btnText={"Find podcasts"}
              onClick={() => {}}
            />
          }
        />
        <Route path="artists" element={<LibArtists />} />
        <Route
          path="albums"
          element={
            <LibNoData
              icon={<MdOutlineAlbum size={"5em"} />}
              title={"Start following your first album"}
              text={"Save albums, by clicking the heart icon."}
              btnText={"Find albums"}
              onClick={() => {}}
            />
          }
        />
      </Routes>
    </StyledSection>
  );
};

export default Library;
