import React from 'react';
import cn from 'classnames';
import styles from './UIButton.module.scss';
import {ReactComponent as HeartIcon} from './img/heart.svg';
import {ReactComponent as PlusIcon} from './img/plus.svg';
import {ReactComponent as DoneIcon} from './img/done.svg';
import {ReactComponent as CrossIcon} from './img/cross.svg';
import {ReactComponent as BorderHeart} from './img/border_heart.svg';

export default function UIButton({icon, color, choosedAction, onClickAddToCart, onClickFavourite, onClickDel, ...props}) {
    let renderIcon = (icn) => {
        switch(icn) {
            case "RedHeart":
                return <HeartIcon />
            case "Plus":
                return <PlusIcon />
            case "Done":
                return <DoneIcon />
            case "Cross":
                return <CrossIcon />
            case "Heart":
                return <BorderHeart />
            default:
                return;
        }
    }

    const isChoosed = (action) => {
        switch(action) {
            case "Add":
                return onClickAddToCart;
            case "Favourite":
                return onClickFavourite;
            case "Delete":
                return onClickDel;
            default:
                return;
        }
    }

    return (
        <button
            className={cn(styles.ui_button, props.className, {
                [styles.ui_button__green]: color === "green",
                [styles.ui_button__red]: color === "red",
                [styles.ui_button__white]: color === "white"
            })}
            onClick={isChoosed(choosedAction)}
        >
        <span className={cn(styles.ui_button__icon, {
            [styles.ui_button__icon__heart]: icon === "RedHeart"
        })}>
            { renderIcon(icon) }
        </span>
        </button>
        
    );
}