import React, { useState } from "react";
import ResearchTable from "../components/ResearchTable.";
import ResearchFavorTable from "../components/ResearchFavorTable";

const Research = () =>{
    //임시정보
    const stocks = [
        {
            id: '111111',
            name: '가',
            rate: '+1%',
            current_price: 70600,
            trading_volume: 100000,
            market_cap: 20
        },{
            id: '222222',
            name: '다',
            rate: '+2%',
            current_price: 130000,
            trading_volume: 1000000,
            market_cap: 1450
        },{
            id: '333333',
            name: '가',
            rate: '+4%',
            current_price: 234600,
            trading_volume: 3150,
            market_cap: 231
        },{
            id: '444444',
            name: '라',
            rate: '-7%',
            current_price: 75400,
            trading_volume: 35000,
            market_cap: 6
        },{
            id: '555555',
            name: '바',
            rate: '+5%',
            current_price: 2500,
            trading_volume: 1004210,
            market_cap: 202
        },{
            id: '666666',
            name: '마',
            rate: '-3%',
            current_price: 200,
            trading_volume: 1012,
            market_cap: 2032
        },
    ];

    const [favorStocks, setFavorStocks] = useState([]);
    

    const addFavorStock = (stock) =>{
        setFavorStocks([
            ...favorStocks,
            stock
        ]);
    };

    const removeFavorStock = (id) =>{
        setFavorStocks(favorStocks.filter(stock=>{
            return stock.id !== id;
        }))
    };

    const renderStocks = () =>{
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Current Price</th>
                        <th scope="col">Trading Volume</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {renderStocksbody}
                </tbody>
            </table>
        );
    };

    const renderStocksbody = stocks.map(stock =>{
        return(
            <ResearchTable
                stock={stock}
                key={stock.id}
                addFavorStock={addFavorStock}
            />
        );
    });

    const renderFavorStocks = () =>{
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Current Price</th>
                        <th scope="col">Trading Volume</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {renderFavorStocksbody}
                </tbody>
            </table>
        );
    }

    const renderFavorStocksbody = favorStocks.map(stock =>{
        return(
            <ResearchFavorTable 
                stock={stock}
                key={stock.id}
                removeFavorStock={removeFavorStock}
            />
        );
    });

    return(
        <>
            <h1>Research</h1>
            {renderStocks()}
            <h1>Favorite</h1>
            {renderFavorStocks()}
        </>
    );
}

export default Research;