export type AuthorType = {
  id: number;
  username: string;
};

export interface ArtistInterface {
  id: number;
  name: string;
  isVerified: boolean;
  listeners: number;
  img?: string;
  bgImg?: string;
  pinnedPlaylist?: {
    id: number;
    name: string;
    img: string;
  };
  albums: any;
  otherArtists: any;
}

export type SongListType = {
  id: number;
  name: string;
  artist: AuthorType;
  album: string;
  date: string;
  songURL: string;
  duration: number;
  plays: number;
  isLiked: boolean;
};

export type UserEssentialType = {
  id: number;
  name: string;
  img?: string;
};

export interface UserInterface {
  id: number;
  name: string;
  isVerified: boolean;
  img?: string;
  likedTracks?: any;
  followers: UserEssentialType[] | [];
  following: UserEssentialType[] | [];
}

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
