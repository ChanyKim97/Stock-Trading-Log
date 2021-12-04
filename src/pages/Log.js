import React, { useState } from "react";
import LogForm from "../components/LogForm";
import LogTable from "../components/LogTable";

const Log = () =>{
    const [records, setRecords] = useState([{
        id : 1,
        Stock_Name : '가',
        Trade_price : 70000,
        Trade_quantity: 100,
        Trade_type : 'B',
        Trade_date : "2021-10-30",
        Memo : "매매수수",
    }]);

    const addRecord = (record) =>{
        setRecords([
            ...records,
            record
        ]);
    };

    const renderRecords = () =>{
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Stock Name</th>
                        <th scope="col">Trade Price</th>
                        <th scope="col">Trade Quantity</th>
                        <th scope="col">Trade Type</th>
                        <th scope="col">Trade Date</th>
                        <th scope="col">Memo</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLogsbody}
                </tbody>
            </table>
        );
    };

    const renderLogsbody = records.map(record =>{
        return(
            <LogTable
                record={record}
                key={record.id}
            />
        );
    });

    return(
        <>
            <h1>Log</h1>
            <LogForm addRecord={addRecord}/>
            {renderRecords()}
        </>
    );
}

export default Log;