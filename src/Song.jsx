import { useParams } from "react-router-dom";

import songs from "../data/songs";

function Song() {
  const { id } = useParams();
  const song = songs[id];

  return (
    <main className="container">
      <h1 className="title padding">{song.title}</h1>
      {song.melody && <small className="melody padding">Melodi: {song.melody}</small>}
      <p className="song-body padding">{song.body}</p>
    </main>
  );
}

export default Song;
