import React from "react";
import './stylesBm.css';
import '../../styles/style.css';
import * as S from './burgerMenu.styles';
import { Link } from "react-router-dom";


export default function BurgerMenu() {

    return (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
            <Link className="MenuLink" to="/">Главное</Link>
            </S.MenuItem>
            <S.MenuItem>
            <Link className="MenuLink" to="/favorites">Мой плейлист</Link>
            </S.MenuItem>
            <S.MenuItem>
            <Link className="MenuLink" to="/login">Войти</Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
    );
  }