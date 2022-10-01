import styled from "styled-components";
import { BiTime } from "react-icons/bi";
import PlaylistRow from "./PlaylistRow";
import { SongListType } from "../../types/types";

const StyledTable = styled.table`
  table-layout: fixed;
  position: relative;
  margin-top: 1.8em;
  width: 100%;
  border-collapse: collapse;

  .table-header {
    position: sticky;
    width: 100%;
    top: 64px;
  }

  tbody {
    tr:first-child {
      display: block;
      padding-top: 1.1em;
    }
  }
  &:first-child td:first-child {
    border-top-left-radius: var(--radius-md);
  }
  &:first-child td:last-child {
    border-top-right-radius: var(--radius-md);
  }

  &:last-child td:first-child {
    border-bottom-left-radius: var(--radius-md);
  }
  &:last-child td:last-child {
    border-bottom-right-radius: var(--radius-md);
  }
  th {
    font-weight: normal;
    text-align: left;
    border-bottom: 1px solid var(--essential-subdued);
    padding: 0.2em 1em;
  }
  .song-info {
    display: flex;
    .song-title {
      margin-left: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .col-1 {
    width: 1%;
  }
  .col-2 {
    width: 35%;
  }
  .col-5 {
    text-align: center;
    width: 100px;
  }

  @media (max-width: 1080px) {
    .col-4 {
      display: none;
    }
  }
  @media (max-width: 480px) {
    .col-1 {
      display: none;
    }
    .col-3 {
      display: none;
    }
    .col-5 {
      display: none;
    }
  } ;
`;

const Table = ({ playlist, current, isPlaying, onPlay }: any) => {
  return (
    <StyledTable>
      <thead className="table-header">
        <tr>
          <th className="col-1">#</th>
          <th className="col-2">TITLE</th>
          <th className="col-3">ALBUM</th>
          <th className="col-4">DATE ADDED</th>
          <th className="col-5">
            <BiTime size="1.25em" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        {playlist?.songList.map((song: SongListType, i: number) => (
          <PlaylistRow
            key={i + 1}
            rowNumber={i + 1}
            song={song}
            isCurrentSong={
              current.song?.id === song.id &&
              current.playlist?.id === playlist.id
            }
            isPlaying={current.song?.id === song.id && isPlaying}
            onPlay={() =>
              onPlay({
                isPlaying: !(
                  current.song?.id === song?.id && current.isPlaying
                ),
                playlist: playlist,
                song: song,
                currDuration:
                  current.song?.id === song?.id ? current.currDuration : 0,
              })
            }
          />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
