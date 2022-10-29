import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Basket from './components/Basket/Basket';
import goods from './data/goods';
import { useState } from 'react';

function App() {

  const [basketOpened, setBasketOpened] = useState(false);
  const [basketItems, setBasketItems] = useState([]);

  const openBasket = () => {
    setBasketOpened(true);
    document.body.style.overflow="hidden";
  }

  const closeBasket = () => {
    setBasketOpened(false);
    document.body.style.overflow="auto";
  }

  const onDeleteItem = (id) => {
    setBasketItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  }

  return (
    <div className="App">
      {basketOpened && <Basket onCloseBasket={() => closeBasket()} 
                                basketItems={basketItems} setBasketItems={setBasketItems}
                                onDeleteItem={onDeleteItem}/>}
      <Header onClickCart={() => openBasket()} />
      <div className="body">
        <div className="label_all_goods">Все кроссовки</div>
        <div className="goods">
          {
            goods.map((item, i) => <Card key={item.id} id={i} cost={item.cost} title={item.title} alt={item.alt} img={item.img} 
                                    basketItems={basketItems} setBasketItems={setBasketItems}
                                    onDeleteItem={onDeleteItem}
                              />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
