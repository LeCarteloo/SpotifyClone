const PlaylistRow = () => {
  return (
    <tr>
      <td className="col-1">1</td>
      <td className="col-2">
        <div className="song-info">
          <img src="https://via.placeholder.com/40" alt="Song cover" />
          <div className="song-title">
            <span>Ocalic od zapomnienia</span>
            <span>Marek Grechuta</span>
          </div>
        </div>
      </td>
      <td className="col-3">Korowod</td>
      <td className="col-4">28 gru 2021</td>
      <td className="col-5">2:40</td>
    </tr>
  );
};

export default PlaylistRow;
