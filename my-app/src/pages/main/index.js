import React from "react";
import { useState, useEffect } from "react";
import "../../styles/App.css";
import CenterBlock from "../../components/CenterBlock/CenterBlock";
import Sidebar from "../../components/sidebar/sidebar";
import MusicPlayer from "../../components/musicPlayer/musicPlayer";
import MusicPlayerSkeleton from "../../components/musicPlayerSkeleton/musicPlayerSkeleton";
import MainNav from "../../components/mainNav/mainNav";
import { AppRoutes } from "../../pages/routes";

export const MainPage = () => {
  // Псевдозагрузка
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <CenterBlock load={load}/>
          <Sidebar load={load}/>
        </main>
        {load ? <MusicPlayerSkeleton /> : <MusicPlayer />}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
