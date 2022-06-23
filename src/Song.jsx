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
          <Link to={`/`}>Visa låtar</Link>
        </header>
        <h1 className="title padding">{song.title}</h1>
        {song.melody && (
          <small className="melody padding">Melodi: {song.melody}</small>
        )}
        <p className="song-body padding">{song.body}</p>
        <Link to={`/songs/${randomSong}`} className="button primary top-margin">
          Slumpa fram visa 🥂
        </Link>
      </main>
    </div>
  );
}

export default Song;
