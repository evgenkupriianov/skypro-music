import { useState } from "react";
import logo from "../../logo.png";
import Burger from "../burger/burger";
import BurgerMenu from "../burgerMenu/burgerMenu";
import './mainNav.css'
function MainNav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <Burger onClick={toggleVisibility} />
      {visible && <BurgerMenu />}
    </nav>
  );
}

export default MainNav;