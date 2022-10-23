import styled from "styled-components";
import { CurrentSongInterface } from "../../types/types";
import LibNoData from "../library/LibNoData";
import PlaylistRow from "../playlist/PlaylistRow";
import { BsList } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionPadding}
  h4 {
    margin-top: 2.5em;
    opacity: 0.5;
  }
`;

const StyledTable = styled.table`
  ${({ theme }) => theme.mixins.table}
  margin-top: 0.5em;
`;

const Queue = () => {
  const { currentSong, onPlay } = useAppContext();

  return (
    <StyledSection>
      {currentSong.song ? (
        <>
          <h2>Queue</h2>
          <h4 className="title">Now playing</h4>
          <StyledTable>
            <tbody>
              <PlaylistRow
                rowNumber={1}
                song={currentSong.song}
                isCurrentSong={true}
                isPlaying={currentSong.isPlaying}
                onPlay={() =>
                  onPlay({
                    isPlaying: !currentSong.isPlaying,
                    playlist: currentSong.playlist,
                    song: currentSong.song,
                    currDuration: currentSong.currDuration,
                  })
                }
              />
            </tbody>
          </StyledTable>
          {currentSong.playlist && currentSong.playlist.songList.length > 1 && (
            <>
              <h4 className="title">Next from: {currentSong.playlist?.name}</h4>
              <StyledTable>
                <tbody>
                  {currentSong.playlist.songList.map(
                    (song, i) =>
                      currentSong.song &&
                      song.id !== currentSong?.song.id && (
                        <PlaylistRow
                          key={i}
                          rowNumber={i + 2}
                          song={song}
                          isCurrentSong={false}
                          isPlaying={false}
                          onPlay={() =>
                            onPlay({
                              isPlaying: true,
                              playlist: currentSong.playlist,
                              song: song,
                              currDuration: 0,
                            })
                          }
                        />
                      )
                  )}
                </tbody>
              </StyledTable>
            </>
          )}
        </>
      ) : (
        <LibNoData
          icon={<BsList size={"5em"} />}
          title="Add to your queue"
          text="Tap 'Add to queue' from a track's menu to see it here"
          btnText="Find something to play"
          onClick={() => {}}
        />
      )}
    </StyledSection>
  );
};

export default Queue;
{
}
