import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';

export default function Button({stylesForButton, appearance, uppercase, stylesForArrow, arrow, text, ...props}) {

    return (
        <button
            className={cn(styles.button, stylesForButton, {
                [styles.green]: appearance === 'green',
                [styles.uppercase]: uppercase === true
            })}
            {...props}
        >
            {(arrow !== 'none' && arrow === "left") && <ArrowIcon className={cn(styles.arrow, stylesForArrow, styles.arrow__left)} />}
            {text}
            {(arrow !== 'none' && arrow === "right") && <ArrowIcon className={cn(styles.arrow, stylesForArrow, styles.arrow__right)} />}
        </button>
    );
}