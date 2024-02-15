import SingerPopUp from "../filterPopUps/singerPopUp";
import "../filter/filter.css"
export default function FilterSinger({ isActive, onShow, onHide }) {
  return (
    <div className="filter__button_container">
      <div
        className="filter__button button-author _btn-text"
        onClick={isActive ? onHide : onShow}
      >
        исполнителю
      </div>
      {isActive ? <SingerPopUp /> : ""}
    </div>
  );
}