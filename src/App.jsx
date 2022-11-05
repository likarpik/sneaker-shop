import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import Home from './pages/Home';

function App() {

  const [basketOpened, setBasketOpened] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/goods').then((res) => {
      setGoods(res.data);
    });

    axios.get('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/cart').then((res) => {
      setBasketItems(res.data);
    });

    axios.get('https://63615888af66cc87dc29c2a1.mockapi.io/sneaker/shop/favorites').then((res) => {
      setFavourites(res.data);
    });
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
      </Routes>
    </div>
  );
}

export default App;
