import { Link, useParams } from "react-router-dom";
import songs from "../data/songs";

function Song() {
  const { id } = useParams();
  const currentSong = songs[id];

  // Filter out the current song
  const songsExcludingCurrent = songs.filter(
    (_, index) => index !== parseInt(id, 10)
  );

  // Generate a random index based on the filtered list length
  const randomIndex = Math.floor(Math.random() * songsExcludingCurrent.length);

  // Get the random song ID from the filtered list
  const randomSongId = songs.findIndex(
    (song) => song === songsExcludingCurrent[randomIndex]
  );

  return (
    <div>
      <main className="container">
        <header className="header padding">
          <Link to={`/`} className="spin">
            Visa låtar
          </Link>
        </header>
        <Link to={`/songs/${randomSongId}`} className="button primary">
          Slumpa fram visa 🥂
        </Link>
        <h1 className="title padding">{currentSong.title}</h1>
        <p className="song-body padding">
          {currentSong.melody && (
            <small className="melody">Melodi: {currentSong.melody}</small>
          )}
          {currentSong.body}
        </p>
      </main>
    </div>
  );
}

export default Song;
