import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import { MdOutlinePodcasts, MdOutlineAlbum } from "react-icons/md";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";
import LibPlaylists from "../library/LibPlaylists";
import LibNoData from "../library/LibNoData";
import LibArtists from "../library/LibArtists";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionPadding}
`;

interface LibraryProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  onPlay: (current: CurrentSongInterface) => void;
}

const Library = ({ userPlaylists, current, onPlay }: LibraryProps) => {
  return (
    <StyledSection>
      <Routes>
        <Route index element={<Navigate to="/library/playlists" replace />} />
        <Route
          path="playlists"
          element={
            <LibPlaylists
              userPlaylists={userPlaylists}
              current={current}
              onPlay={onPlay}
            />
          }
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
