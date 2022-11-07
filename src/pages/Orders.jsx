import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import Return from './return.png';
import EmptyOrders from './orders_empty.png';

export default function Orders ({
    basketItems,
    orders,
    onDeleteItem,
    setBasketItems,
    setOrders
}) {

    return (
        <div className="body">
            {
                orders.length > 0 ? 
                <>
                    <div className="page_goods">
                        <Link to="/">
                            <img className="page_goods_return" src={Return} alt="Return"/>
                        </Link>
                        <div className="page_goods_label">Мои покупки</div>
                    </div>
                    <div className="goods">
                    {
                        orders.map((item) => <Card key={item.id}
                                                {...item} 
                                                basketItems={basketItems} 
                                                setBasketItems={setBasketItems}
                                                onDeleteItem={onDeleteItem}
                                                isFavourite={true}
                                        />)
                    }
                    </div>
                </>
                :
                <div className="page_empty">
                    <img src={EmptyOrders} alt="Orders are empty" />
                    <h3>У вас нет заказов</h3>
                    <p>Оформите хотя бы один заказ.</p>
                    <Link to="/">
                        <Button appearance="green" arrow="left" text="Вернуться назад" stylesForButton="basket_button"/>
                    </Link>
                </div>
            }
        </div>
    );
}