import React from "react";
import '../../styles/style.css'
import * as S from './burgerMenu.styles'



export default function BurgerMenu() {

    return (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="http://">
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
    );
  }