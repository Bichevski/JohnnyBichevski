import React, { useState } from "react";
import cn from "classnames";
// mENU
import telegram from "../assets/telegram.svg";
import mail from "../assets/mail.svg";
import Time from "./Time";
import { Link } from "react-router-dom";

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
        {/* <span className="time header__time">12:00</span>МенюОкружение */}
      </div>
      <div className="header__menus">
        <div className={cn("header-menu", { open: isMenuOpen })}>
          <button
            type="button"
            className="header-menu__btn"
            onClick={toggleMenu}
          >
            Menu
          </button>
          <ul className="header-menu__list">
            <li className="header-menu__item">
              <Link to="/JohnnyBichevski" href="#">Home</Link>
            </li>
            <li className="header-menu__item">
              <Link to="/JohnnyBichevski/gallery">Gallery</Link>
            </li>
            <li className="header-menu__item">
              <Link to="/JohnnyBichevski?ScrollToAbout">About</Link>
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
// /
export default Header;
// ?abouta/JohnnyBichevski#skillsa