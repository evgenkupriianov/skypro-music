import React from "react";
import sidebarImg from "../../playlist01.png";
import sidebarImg2 from "../../playlist02.png";
import sidebarImg3 from "../../playlist03.png";
import "./sidebar.css";
import SidebarSkeleton from "../sidebarSkeleton/sidebarSkeleton";

function Sidebar({ load }) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Evgeniy.Kupriianov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        {load ? (
          <SidebarSkeleton />
        ) : (
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="/">
                <img
                  className="sidebar__img"
                  src={sidebarImg}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="/">
                <img
                  className="sidebar__img"
                  src={sidebarImg2}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="/">
                <img
                  className="sidebar__img"
                  src={sidebarImg3}
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
