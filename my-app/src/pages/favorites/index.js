import * as S from "../../styles/styles.js";
import { useEffect, useState } from "react";
import MusicPlayer from "../../components/musicPlayer/musicPlayer.js";
import MusicPlayerSkeleton from "../../components/musicPlayerSkeleton/musicPlayerSkeleton.js";
import Sidebar from "../../components/sidebar/sidebar.js";
import SidebarSkeleton from "../../components/sidebarSkeleton/sidebarSkeleton.js";
import CenterBlockSkeleton from "../../components/CenterBlockSkeleton/CenterBlockSkeleton.js";
import CenterBlock from "../../components/CenterBlock/CenterBlock.js"
import Burger from "../../components/burger/burger.js"
import loadingDelay from "../../components/loading";



export const FavoritesPage = () => {

  // Псевдозагрузка
  const [load, setLoad] = useState(true);
  useEffect(() => {
    loadingDelay(load, setLoad, 2000);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Burger />
          {load ? <CenterBlockSkeleton /> : <CenterBlock/>}
          {load ? <SidebarSkeleton /> : <Sidebar />}
        </S.Main>
        {load ? <MusicPlayerSkeleton /> : <MusicPlayer />}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
};