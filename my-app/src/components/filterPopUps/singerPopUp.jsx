import getUnicItems from "../getUnicltems";
import * as S from "./styles";

export default function SingerPopUp(arr) {
  const allSingers = [arr.arr.map((item) => item.author)];
  const Items = getUnicItems(allSingers[0]).map((item) => (
    <S.FilterPopUpItem key={getUnicItems(allSingers[0]).indexOf(item)}>{item}</S.FilterPopUpItem>
  ))
  return (
    <S.WrapperPopUp>
      <S.FilterPopUp>
        <S.FilterPopUpList>
{Items}
        </S.FilterPopUpList>
      </S.FilterPopUp>
    </S.WrapperPopUp>
  );
}