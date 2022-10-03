import styled from "styled-components";
import { CurrentSongInterface } from "../../types/types";
import LibNoData from "../library/LibNoData";
import PlaylistRow from "../playlist/PlaylistRow";
import { BsList } from "react-icons/bs";

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

interface QueueProps {
  current: CurrentSongInterface;
  onPlay: (current: CurrentSongInterface) => void;
}

const Queue = ({ current, onPlay }: QueueProps) => {
  return (
    <StyledSection>
      {current.song ? (
        <>
          <h2>Queue</h2>
          <h4 className="title">Now playing</h4>
          <StyledTable>
            <tbody>
              <PlaylistRow
                rowNumber={1}
                song={current.song}
                isCurrentSong={true}
                isPlaying={current.isPlaying}
                onPlay={() =>
                  onPlay({
                    isPlaying: !current.isPlaying,
                    playlist: current.playlist,
                    song: current.song,
                    currDuration: current.currDuration,
                  })
                }
              />
            </tbody>
          </StyledTable>
          {current.playlist && current.playlist.songList.length > 1 && (
            <>
              <h4 className="title">Next from: {current.playlist?.name}</h4>
              <StyledTable>
                <tbody>
                  {current.playlist.songList.map(
                    (song, i) =>
                      current.song &&
                      song.id !== current?.song.id && (
                        <PlaylistRow
                          rowNumber={i + 2}
                          song={song}
                          isCurrentSong={false}
                          isPlaying={false}
                          onPlay={() =>
                            onPlay({
                              isPlaying: true,
                              playlist: current.playlist,
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
