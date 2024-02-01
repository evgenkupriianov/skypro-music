import "./styles/style.css";
import CenterBlock from "./components/CenterBlock/CenterBlock";
import Sidebar from "./components/sidebar/sidebar";
import MusicPlayer from "./components/musicPlayer/musicPlayer";
import MainNav from "./components/mainNav/mainNav";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <CenterBlock />
          <Sidebar />
          <MusicPlayer />
        </main>
      </div>
    </div>
  );
}

export default App;