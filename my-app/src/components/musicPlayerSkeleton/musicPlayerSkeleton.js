import React from "react";
import * as S from "../musicPlayer/MusicPlayer.styles";
export default function MusicPlayerSkeleton() {
    return (
      <S.Bar>
        <S.BarContent>
          <S.BarPlayerProgress></S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <div className="player__btn-prev">
                  <svg className="player__btn-prev-svg" alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className="player__btn-play _btn">
                  <svg className="player__btn-play-svg" alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className="player__btn-next">
                  <svg className="player__btn-next-svg" alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                  <svg className="player__btn-repeat-svg" alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                  <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </S.PlayerControls>
  
              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <img src="/img/skeleton/122x51.svg"></img>
                </S.TrackPlayContain>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
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