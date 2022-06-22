import { Link } from "react-router-dom";

import songs from "../data/songs";

function App() {
  return (
    <main className="app-main container">
      {songs.map((song, index) => (
        <Link key={index} to={`songs/${index}`} className="button">{song.title}</Link>
      ))}
    </main>
  );
}

export default App;
