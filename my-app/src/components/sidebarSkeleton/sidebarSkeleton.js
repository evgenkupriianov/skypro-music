import React from "react";
const skeletonCount = [1, 2, 3];

export default function SidebarSkeleton() {
  return (
    <div className="sidebar__list">
      {skeletonCount.map((id) => (
        <div className="sidebar__item">
          <img
            src="/img/skeleton/250x150.svg"
            key={id}
            alt="Скелетон плейлиста подборки"
          ></img>
        </div>
      ))}
    </div>
  );
}
