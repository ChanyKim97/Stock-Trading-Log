import React from "react";

const Researchdetail = () => {
    const stockDetails = [
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
        },
    ];

    return (
        <>
            <h1>stock 정보</h1>
        </>
    );
};

export default Researchdetail;