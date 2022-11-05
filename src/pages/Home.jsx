import Card from '../components/Card/Card';

export default function Home ({
    basketItems,
    favourites,
    searchValue,
    goods,
    onDeleteItem,
    onChangeInput,
    setBasketItems,
    setFavourites,
    setSearchValue
}) {
    return (
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
                .map((item, i) => <Card key={item.id} 
                                        id={item.id} 
                                        cost={item.cost} 
                                        title={item.title} 
                                        alt={item.alt} 
                                        img={item.img} 
                                        basketItems={basketItems} 
                                        setBasketItems={setBasketItems}
                                        onDeleteItem={onDeleteItem}
                                        favourites={favourites} 
                                        setFavourites={setFavourites}
                                />)
            }
            </div>
        </div>
    );
}