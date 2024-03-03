import React, { useState, useEffect } from "react";
import BurgerMenu from "../burgerMenu/burgerMenu";
import * as S from "./burger.styles";

export default function Burger() {
  const [visible, setVisible] = useState(false);
  const activeBurger = () => setVisible(!visible);
  return (
    <S.MainNav>
      <S.NavBurger onClick={activeBurger}>
        <S.Burgerline></S.Burgerline>
        <S.Burgerline></S.Burgerline>
        <S.Burgerline></S.Burgerline>
      </S.NavBurger>
      {visible ? <BurgerMenu /> : " "}
    </S.MainNav>
  );
}
