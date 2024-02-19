import React from "react";

const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function CenterBlockSkeleton() {
  return (
    <div className="content__playlist playlist">
      <div className="playlist__item">
        {skeletonCount.map((id) => (
          <img
            src="/img/skeleton/1107x51.svg"
            key={id}
            alt="Скелетон трека"
          ></img>
        ))}
      </div>
    </div>
  );
}
