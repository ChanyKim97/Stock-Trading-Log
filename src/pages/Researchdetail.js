import React from "react";
import DetailTable from "../components/DeatilTable";

const Researchdetail = () => {
    const stockDetails = [
        {
            id: '111111',
            date: '2021-12-02',
            name: '가',
            rate:'+1%',
            high_price: 70600,
            low_price: 70600,
            closing_price: 100000,
            transcate_value: 20,
            transcate_amount:0,
            BPS:1,
            PER:1,
            PBR:1,
            EPS:2,
            market_cap:20,
        },{
            id: '111111',
            date: '2021-12-01',
            name: '가',
            rate:'+1%',
            high_price: 70600,
            low_price: 70600,
            closing_price: 100000,
            transcate_value: 20,
            transcate_amount:0,
            BPS:1,
            PER:1,
            PBR:1,
            EPS:2,
            market_cap:20,
        },{
            id: '111111',
            date: '2021-11-30',
            name: '가',
            rate:'+1%',
            high_price: 70600,
            low_price: 70600,
            closing_price: 100000,
            transcate_value: 20,
            transcate_amount:0,
            BPS:1,
            PER:1,
            PBR:1,
            EPS:2,
            market_cap:20,
        },
    ];

    const renderDetails = () =>{
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Rate</th>
                        <th scope="col">High Price</th>
                        <th scope="col">Low Price</th>
                        <th scope="col">Closing Price</th>
                        <th scope="col">Transcate Value</th>
                        <th scope="col">Transcate Amount</th>
                        <th scope="col">BPS</th>
                        <th scope="col">PER</th>
                        <th scope="col">PBR</th>
                        <th scope="col">EPS</th>
                        <th scope="col">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDetailsbody}
                </tbody>
            </table>
        );
    };

    const renderDetailsbody = stockDetails.map(stock =>{
        return(
            <DetailTable
                stock={stock}
                key={stock.id}
            />
        );
    });

    return (
        <>
            <h1>stock 정보</h1>
            {renderDetails()}
        </>
    );
};

export default Researchdetail;