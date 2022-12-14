import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Orders from './pages/Orders';

function App() {

  const [basketOpened, setBasketOpened] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const goodsResult = await axios.get('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/goods');
      const favouritesResult = await axios.get('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/favorites');
      const basketResult = await axios.get('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/cart');

      setBasketItems(basketResult.data);
      setFavourites(favouritesResult.data);
      setGoods(goodsResult.data);
    }
    fetchData();
  }, []);

  const openBasket = () => {
    setBasketOpened(true);
    document.body.style.overflow="hidden";
  }

  const closeBasket = () => {
    setBasketOpened(false);
    document.body.style.overflow="auto";
  }

  const onDeleteItem = (id, arrayParametr) => {
    switch(arrayParametr) {
      case 'basket':
        axios.delete(`https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/cart/${id}`);
        setBasketItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        break;
      case 'favourites':
        axios.delete(`https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/favorites/${id}`);
        setFavourites((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        break;
      default:
        break;
    }
  }

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="App">
      {basketOpened && <Basket onCloseBasket={() => closeBasket()} 
                                      basketItems={basketItems} 
                                      setBasketItems={setBasketItems}
                                      onDeleteItem={onDeleteItem}/>}
      <Header onClickCart={() => openBasket()} />
      
      <Routes>
        <Route path="/" exact element={
          <Home basketItems={basketItems}
                favourites={favourites}
                searchValue={searchValue}
                goods={goods}
                onDeleteItem={onDeleteItem}
                onChangeInput={onChangeInput}
                setBasketItems={setBasketItems}
                setFavourites={setFavourites}
                setSearchValue={setSearchValue}/>
          }>
        </Route>
        <Route path="/favourites" exact element={
          <Favourites basketItems={basketItems}
                favourites={favourites}
                onDeleteItem={onDeleteItem}
                setBasketItems={setBasketItems}
                setFavourites={setFavourites}/>
          }>
        </Route>
        <Route path="/orders" exact element={
          <Orders basketItems={basketItems}
                onDeleteItem={onDeleteItem}
                setBasketItems={setBasketItems}
                orders={orders}
                setOrders={setOrders}/>
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
