import React from "react";
import Filter from "../filter/filter";
import Palaylistitem from "../playlistitem/playlistitem";


export default function TrackListSkeleton() {
  return (
    <div className="main__centerblock centerblock">
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <Palaylistitem />
        <div className="content__playlist playlist">
          <div className="playlist__item">
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}