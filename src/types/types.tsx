export type SongListType = {
  id: number;
  name: string;
  artist: string;
  album: string;
  date: string;
  songURL: string;
  duration: number;
  plays: number;
  isLiked: boolean;
};

export interface PlaylistInterface {
  id: number;
  name: string;
  playlistURL: string;
  songList: SongListType[];
}

export interface CurrentSongInterface {
  isPlaying: boolean;
  playlist?: PlaylistInterface;
  song?: SongListType;
  currDuration: number;
}
