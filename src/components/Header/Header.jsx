import React from 'react';
import style from './Header.module.scss';
import Logo from './img/logo.png';
import Basket from './img/basket.svg';
import Heart from './img/heart.svg';
import Profile from './img/profile.svg';


export default function Header({onClickCart}) {
  return (
    <header className={style.header}>
        <div className={style.compony_logo}>
            <img className={style.logo} src={Logo} alt="Sneakers" />
            <div className={style.compony_name}>
                <h1>React Sneakers</h1>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className={style.menu}>
            <li><img src={Basket} alt="Basket" onClick={onClickCart} /></li>
            <li><img src={Heart} alt="Favorites" /></li>
            <li><img src={Profile} alt="Profile" /></li>
        </ul>
    </header>
  );
}