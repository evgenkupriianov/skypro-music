import NotFoundError from "../../components/notFound.js/notFound";
import * as S from "../../pages/styles";
import Burger from "../../components/burger/burger";
import AudioPlayerSkeleton from "../../components/musicPlayerSkeleton/musicPlayerSkeleton.js";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Burger />
          <NotFoundError />
        </S.Main>
        <AudioPlayerSkeleton />
      </S.Container>
    </S.Wrapper>
  );
};