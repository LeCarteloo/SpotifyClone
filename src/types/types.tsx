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

export type AuthorType = {
  id: number;
  username: string;
};

export interface PlaylistInterface {
  id: number;
  name: string;
  playlistURL: string;
  desc?: string;
  author: AuthorType;
  likes: number;
  isLiked?: boolean;
  color?: string;
  songList: SongListType[];
}

export interface CurrentSongInterface {
  isPlaying: boolean;
  playlist?: PlaylistInterface;
  song?: SongListType;
  currDuration: number;
}
