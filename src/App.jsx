import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Basket from './components/Basket/Basket';
import goods from './data/goods';
import { useState } from 'react';

function App() {

  const [basketOpened, setBasketOpened] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="App">
      {basketOpened && <Basket onCloseBasket={() => closeBasket()} 
                                basketItems={basketItems} setBasketItems={setBasketItems}
                                onDeleteItem={onDeleteItem}/>}
      <Header onClickCart={() => openBasket()} />
      <div className="body">
        <div className="all_goods">
          {searchValue ? <div className="all_goods_label">Поиск по запросу: {searchValue}</div> 
                      : <div className="all_goods_label">Все кроссовки</div>}
          <div className="all_goods_search">
            <img className="all_goods_img_search" src="/img/search.svg" alt="Search" />
            {searchValue && <img className="all_goods_img_delete" src="/img/close.png" alt="Delete" onClick={() => setSearchValue('')}/>}
            <input type="text" onChange={onChangeInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        <div className="goods">
          {
            goods
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, i) => <Card key={item.id} id={i} cost={item.cost} title={item.title} alt={item.alt} img={item.img} 
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
