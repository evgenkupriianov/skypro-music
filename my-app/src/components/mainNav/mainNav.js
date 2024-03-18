import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../burger/burger";
import BurgerMenu from "../burgerMenu/burgerMenu";
import * as S from './MainNav.Stales'


function MainNav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.MainNav>
      <S.NavLogo>
      <Link to="/">
          <S.LogoImage src="img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <Burger onClick={toggleVisibility} />
      {visible && <BurgerMenu />}
    </S.MainNav>
  );
}

export default MainNav;