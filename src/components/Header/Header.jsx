import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import Logo from './img/logo.png';
import Basket from './img/basket.svg';
import Heart from './img/heart.svg';
import Profile from './img/profile.svg';


export default function Header({onClickCart}) {
  return (
    <header className={style.header}>
        <Link to="/">
          <div className={style.compony_logo}>
              <img className={style.logo} src={Logo} alt="Sneakers" />
              <div className={style.compony_name}>
                  <h1>React Sneakers</h1>
                  <p>Магазин лучших кроссовок</p>
              </div>
          </div>
        </Link>
        <nav>
          <ul className={style.menu}>
              <li><img src={Basket} alt="Basket" onClick={onClickCart} /></li>
              <Link to="/favourites">
                <li><img src={Heart} alt="Favorites" /></li>
              </Link>
              <li><img src={Profile} alt="Profile" /></li>
          </ul>
        </nav>
    </header>
  );
}