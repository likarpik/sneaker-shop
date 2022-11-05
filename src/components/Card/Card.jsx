import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';
import UIButton from '../UIButtons/UIButton';
import { useState } from 'react';
import axios from 'axios';

export default function Card({id, title, img, alt, cost, basketItems, setBasketItems, onDeleteItem, favourites, setFavourites}) {
    
    const [favourite, setFavourite] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    
    const cardObj = {
        id: id,
        title: title,
        img: img,
        alt: alt,
        cost: cost
    };

    const changeFavouriteButton = (obj) => {
        setFavourite(!favourite);

        if (!favourite) {
            axios.post('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/favorites', obj);
            setFavourites([...favourites, obj]);
        } else {
            onDeleteItem(obj.id, 'favourites');
        }
    }

    const changeAddedButton = (obj) => {
        setIsAddedToCart(!isAddedToCart);
        
        if (!isAddedToCart) {
            axios.post('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/cart', obj);
            setBasketItems([...basketItems, obj]);
        } else {
            onDeleteItem(obj.id, 'basket');
        }
    }

    return (
        <div className={cn(styles.card)}>
            <UIButton color={favourite ? "red" : "white"} icon={favourite ? "RedHeart" : "Heart"} 
                    className={styles.button_favorite}
                    choosedAction="Favourite"
                    onClickFavourite={() => changeFavouriteButton(cardObj)}/>
            <img className={styles.card_image} src={img} alt={alt} />
            <h5 className={styles.card_name}>{title}</h5>
            <div className={cn(styles.card_description)}>
                <div className={cn(styles.card_cost)}>
                    <span className={cn(styles.card_label_cost)}>Цена:</span>
                    <div className={cn(styles.card_act_cost)}>{cost}</div>
                </div>
                <UIButton color={isAddedToCart ? "green" : "white"} 
                        icon={isAddedToCart ? "Done" : "Plus"}
                        choosedAction="Add"
                        onClickAddToCart={() => changeAddedButton(cardObj)}/>
            </div>
        </div>
    );
}