import * as S from '../filter/Filter.stayles';
import '../filter/Filter.stayles';

export default function YearPopUp() {
    return (
      <div className="filter__pop-up small__pop-up">
        <S.FilterPopUpList>
          <S.FilterPopUpItem>По умолчанию</S.FilterPopUpItem>
          <S.FilterPopUpItem>Сначала новые</S.FilterPopUpItem>
          <S.FilterPopUpItem>Сначала старые</S.FilterPopUpItem>
        </S.FilterPopUpList>
      </div>
    );
  }