import React, {useState, useEffect} from 'react';
import "./styles/App.css";
import CenterBlock from "./components/CenterBlock/CenterBlock";
import CenterBlockSkeleton from "./components/CenterBlockSkeleton/CenterBlockSkeleton";
import Sidebar from "./components/sidebar/sidebar";
import SidebarSkeleton from "./components/sidebarSkeleton/sidebarSkeleton";
import MusicPlayer from "./components/musicPlayer/musicPlayer";
import MusicPlayerSkeleton from "./components/musicPlayerSkeleton/musicPlayerSkeleton";
import MainNav from "./components/mainNav/mainNav";
import loadingDelay from "./components/loading/loading";


function App() {

  // Псевдозагрузка
  const [load, setLoad] = useState(true);
  useEffect(() => {
    loadingDelay(load, setLoad, 2000)
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          {load ? <CenterBlockSkeleton/> : <CenterBlock/>}
          {load ? <SidebarSkeleton/> : <Sidebar/>}
        </main>
          {load ? <MusicPlayerSkeleton/> : <MusicPlayer/>}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
export default App;