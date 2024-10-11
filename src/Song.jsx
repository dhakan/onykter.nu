import { useParams, Link } from "react-router-dom";

import songs from "../data/songs";

function Song() {
  const { id } = useParams();
  const song = songs[id];

  const randomSong = Math.floor(Math.random() * songs.length);

  return (
    <div>
      <main className="container">
        <header className="header padding">
          <Link to={`/`} className="spin">
            Visa låtar
          </Link>
        </header>
        <Link to={`/songs/${randomSong}`} className="button primary">
          Slumpa fram visa 🥂
        </Link>
        <h1 className="title padding">{song.title}</h1>
        <p className="song-body padding">
          {song.melody && (
            <small className="melody">Melodi: {song.melody}</small>
          )}
          {song.body}
        </p>
      </main>
    </div>
  );
}

export default Song;
