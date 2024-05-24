import React, { useState } from "react";
import cn from "classnames";
// mENU
import telegram from "../assets/telegram.svg";
import mail from "../assets/mail.svg";
import Time from "./Time";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
  };
  return (
    <header className="header">
      <div className="header__info">
        <h1 className="header__logo">JB</h1>
        <div className="marquee header__marquee">
          <div className="marquee__first">
            <span>Johnny Bichevski loh</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
          </div>
          <div className="marquee__second">
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
            <span>Johnny Bichevski</span>
          </div>
        </div>
        <Time className="header__time"/>
        {/* <span className="time header__time">12:00</span> */}
      </div>
      <div className="header__menus">
        <div className={cn("header-menu", { open: isMenuOpen })}>
          <button
            type="button"
            className="header-menu__btn"
            onClick={toggleMenu}
          >
            Меню
          </button>
          <ul className="header-menu__list">
            <li className="header-menu__item">
              <a href="#">Home</a>
            </li>
            <li className="header-menu__item">
              <a href="#">Gallery</a>
            </li>
            <li className="header-menu__item">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <ul className="header-links">
          <li className="header-links__link">
            <a href="https://t.me/bichevski" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li className="header-links__link">
            <a href="mailto:myrravka@gmail.com">
              <img src={mail} alt="mail" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
