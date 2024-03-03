import Filter from "../filter/filter";
import * as S from './CenterBlock.styles'
import PlaylistItem from "../playlistitem/playlistitem";
import CenterBlockSkeleton from "../CenterBlockSkeleton/CenterBlockSkeleton";

function CenterBlock({load}) {
  
  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
       <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
       />
      </S.CenterBlockSearch>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterBlockFilter>
        <Filter />
      </S.CenterBlockFilter>
      <S.CenterBlockContent>
      {load ? <CenterBlockSkeleton /> : <PlaylistItem />}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );


  
}


export default CenterBlock;