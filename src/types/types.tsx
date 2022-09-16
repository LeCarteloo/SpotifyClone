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
