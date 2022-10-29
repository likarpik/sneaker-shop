import React from 'react';
import cn from 'classnames';
import styles from './Basket.module.scss';
import Close from './img/close.png';
import Button from '../Button/Button';
import UIButton from '../UIButtons/UIButton';


export default function Basket({basketItems=[], onDeleteItem, onCloseBasket}) {
    return (
        <div className={cn(styles.basket_overlay)}>
            <div className={styles.basket}>
                <div className={styles.basket_header}>
                    <h2>Корзина</h2>
                    <img className={styles.basket_close_button} src={Close} alt="Close" onClick={onCloseBasket}/>
                </div>
                <div className={styles.basket_all_items}>
                    {basketItems.map(item => 
                        <div key={item.id} className={styles.basket_item}>
                            <img className={styles.basket_item_img} src={item.img} alt={item.alt} />
                            <div className={styles.basket_item_description}>
                                <div>{item.title}</div>
                                <b>{item.cost}</b>
                            </div>
                            <UIButton className={styles.basket_item_del_but} color="white" icon="Cross" 
                            choosedAction="Delete"
                            onClickDel={() => onDeleteItem(item.id)}/>
                        </div>
                    )}
                </div>
                <div className={styles.basket_total}>
                    <div className={styles.basket_total_item}>
                        <div>Итого:</div>
                        <div className={styles.basket_total_dash}></div>
                        <div>21 498 руб.</div>
                    </div>
                    <div className={styles.basket_total_item}>
                        <div>Налог 5%:</div>
                        <div className={styles.basket_total_dash}></div>
                        <div>1074 руб.</div>
                    </div>
                </div>
                <Button appearance="green" arrow="right" text="Оформить заказ" stylesForButton={styles.basket_button}/>
            </div>
        </div>
    );
}