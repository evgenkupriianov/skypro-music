import React, {useState, useEffect} from 'react';
import BurgerMenu from "../burgerMenu/burgerMenu";
import './burger.css';



export default function Burger() {
  const [visible, setVisible] = useState(false);
  const activeBurger = () => setVisible(!visible);
  return (
    <nav className="main__nav nav">
        <div className="nav__burger burger" onClick={activeBurger}>
         <span className="burger__line"></span>
         <span className="burger__line"></span>
         <span className="burger__line"></span>
      </div>
     {visible ? <BurgerMenu /> : " "}
    </nav>
  );
}
