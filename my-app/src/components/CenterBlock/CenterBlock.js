import Filter from "../filter/filter";
import './CenterBlock.css'
import PlaylistItem from "../playlistitem/playlistitem";
import CenterBlockSkeleton from "../CenterBlockSkeleton/CenterBlockSkeleton";

function CenterBlock({load}) {
  
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
        <Filter />
      </div>
      <div className="centerblock__content">
      {load ? <CenterBlockSkeleton /> : <PlaylistItem />}
      </div>
    </div>
  );


  
}


export default CenterBlock;