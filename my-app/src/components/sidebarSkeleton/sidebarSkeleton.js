import React from "react";
import * as S from '../sidebar/Sidebar.styles'
const skeletonCount = [1, 2, 3];

export default function SidebarSkeleton() {
  return (
    <S.Sidebarlist>
      {skeletonCount.map((id) => (
        <S.SidebarItem>
          <img
            src="/img/skeleton/250x150.svg"
            key={id}
            alt="Скелетон плейлиста подборки"
          ></img>
        </S.SidebarItem>
      ))}
    </S.Sidebarlist>
  );
}
