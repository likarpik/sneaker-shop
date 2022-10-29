import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';

export default function Button({stylesForButton, appearance, uppercase, stylesForArrow, arrow, text}) {

    return (
        <button
            className={cn(styles.button, stylesForButton, {
                [styles.green]: appearance === 'green',
                [styles.uppercase]: uppercase === true
            })}
        >
            {text}
            {arrow !== 'none' && <ArrowIcon className={cn(styles.arrow, stylesForArrow, {
                [styles.arrow__right]: arrow === 'right',
                [styles.arrow__left]: arrow === 'left'
            })} />}
        </button>
    );
}