import { useState } from "react";
import logo from "../../logo.png";
import Burger from "../burger/burger";
import BurgerMenu from "../burgerMenu/burgerMenu";
import * as S from './MainNav.Stales'


function MainNav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src={logo} alt="logo" />
      </S.NavLogo>
      <Burger onClick={toggleVisibility} />
      {visible && <BurgerMenu />}
    </S.MainNav>
  );
}

export default MainNav;