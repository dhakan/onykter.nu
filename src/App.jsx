import { Link } from "react-router-dom";

import songs from "../data/songs";

function App() {
  const randomSong = Math.floor(Math.random() * songs.length);

  return (
    <div className="container">
      <header className="header padding"><span className="spin">Bli onykter nu 😍</span></header>
      <main className="app-main">
        <Link to={`/songs/${randomSong}`} className="button primary">
          Slumpa fram visa 🥂
        </Link>
        {songs.map((song, index) => (
          <Link key={index} to={`songs/${index}`} className="button">
            {song.title}
          </Link>
        ))}
      </main>
    </div>
  );
}

export default App;
