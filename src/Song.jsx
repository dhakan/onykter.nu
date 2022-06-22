import { useParams } from "react-router-dom";

import songs from "../data/songs";

function Song() {
  const { id } = useParams();
  const song = songs[id];

  return (
    <main className="song-main container">
      <h1 className="title">{song.title}</h1>
      {song.melody && <small className="melody">Melodi: {song.melody}</small>}
      <p className="song-body">{song.body}</p>
    </main>
  );
}

export default Song;
