
import React from "react";
import sidebarImg from "../../playlist01.png";
import sidebarImg2 from "../../playlist02.png";
import sidebarImg3 from "../../playlist03.png";
import "./sidebar.css";
import SidebarSkeleton from "../sidebarSkeleton/sidebarSkeleton";
import * as S from './Sidebar.styles'



function Sidebar({ load }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Evgeniy.Kupriianov</S.SidebarPersonalName>
        <S.SidebarAvatar></S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        {load ? (
          <SidebarSkeleton />
        ) : (
          <S.Sidebarlist>
            <S.SidebarItem>
              <S.SidebarLink href="/">
                <S.SidebarImg
                  src={sidebarImg}
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="/">
                <S.SidebarImg
                  src={sidebarImg2}
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="/">
                <S.SidebarImg
                  src={sidebarImg3}
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
          </S.Sidebarlist>
        )}
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default Sidebar;
