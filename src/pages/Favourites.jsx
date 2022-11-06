import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import Return from './return.png';
import EmptyFavourites from './favourites_empty.png';

export default function Favourites ({
    basketItems,
    favourites,
    onDeleteItem,
    setBasketItems,
    setFavourites
}) {

    return (
        <div className="body">
            {
                favourites.length > 0 ? 
                <>
                    <div className="favourites_goods">
                        <Link to="/">
                            <img className="favourites_goods_return" src={Return} alt="Return"/>
                        </Link>
                        <div className="favourites_goods_label">Мои закладки</div>
                    </div>
                    <div className="goods">
                    {
                        favourites.map((item) => <Card key={item.id}
                                                {...item} 
                                                basketItems={basketItems} 
                                                setBasketItems={setBasketItems}
                                                onDeleteItem={onDeleteItem}
                                                favourites={favourites} 
                                                setFavourites={setFavourites}
                                                isFavourite={true}
                                        />)
                    }
                    </div>
                </>
                :
                <div className="page_empty">
                    <img src={EmptyFavourites} alt="Favourites are empty" />
                    <h3>Закладок нет</h3>
                    <p>Вы ничего не добавляли в закладки</p>
                    <Link to="/">
                        <Button appearance="green" arrow="left" text="Вернуться назад" stylesForButton="basket_button"/>
                    </Link>
                </div>
            }
        </div>
    );
}