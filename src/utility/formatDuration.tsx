const formatSongDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;
  return `${minutes}:${(0 + seconds.toString()).slice(-2)}`;
};

const formatPlaylistDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;
  return `${minutes}min ${(0 + seconds.toString()).slice(-2)} sec`;
};

export { formatSongDuration, formatPlaylistDuration };
