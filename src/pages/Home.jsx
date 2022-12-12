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
                .map((item) => <Card key={item.id} 
                                        {...item}
                                        basketItems={basketItems} 
                                        setBasketItems={setBasketItems}
                                        onDeleteItem={onDeleteItem}
                                        favourites={favourites} 
                                        setFavourites={setFavourites}
                                        isFavourite={favourites.some(fav => Number(fav.id) === Number(item.id))}
                                        isAdded={basketItems.some(bask_item => Number(bask_item.id) === Number(item.id))}
                                />)
            }
            </div>
        </div>
    );
}