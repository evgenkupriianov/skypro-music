import './musicPlayer.css'
import * as S from "./MusicPlayer.styles";


function MusicPlayer() {
  return (
    <S.Bar>
      <S.BarContent>
       <S.BarPlayerProgress />
         <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <div className="player__btn-prev">
                <svg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div className="player__btn-play _btn">
                <svg className="player__btn-play-svg" alt="play">
                  <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <div className="player__btn-next">
                <svg className="player__btn-next-svg" alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div className="player__btn-repeat _btn-icon">
                <svg className="player__btn-repeat-svg" alt="repeat">
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    Ты та...
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    Баста
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <div className="track-play__like _btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </div>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}

export default MusicPlayer;