import PlaylistItem from "../playlistitem/playlistitem";
import FilterBlock from "../filterBlock/filterBlock";

export default function CenterBlockSkeleton() {
    return (
        <div className="main__centerblock centerblock">
          <div className="centerblock__search search">
            <svg className="search__svg">
              <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </svg>
           <input
              className="search__text"
              type="search"
              placeholder="Поиск"
              name="search"
           />
          </div>
          <h2 className="centerblock__h2">Треки</h2>
          <div className="centerblock__filter filter">
            <FilterBlock />
          </div>
        <div className="centerblock__content">
          <PlaylistItem />
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