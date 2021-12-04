import React, { useState } from 'react';
import InputField from './InputField';

const LogForm = ({addRecord}) => {
    const [recordStock, setRecordStock] = useState('');
    const [recordPrice, setRecordPrice] = useState('');
    const [recordAmount, setRecordAmount] = useState('');
    const [recordType, setRecordType] = useState('');
    const [recordDate, setRecordDate] = useState('');
    const [recordMemo, setRecordMemo] = useState('');

    const resetForm= () =>{
        setRecordStock('');
        setRecordPrice('');
        setRecordAmount('');
        setRecordType('');
        setRecordDate('');
        setRecordMemo('');
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        addRecord({
            id:Date.now(),
            Stock_Name : recordStock,
            Trade_price : recordPrice,
            Trade_quantity: recordAmount,
            Trade_type : recordType,
            Trade_date : recordDate,
            Memo : recordMemo,
        })
        resetForm();
    };

    return (
        <form onSubmit={onSubmit}>
            <InputField
                type ="text"
                value={recordStock}
                placeholder="주식명"
                onChange={e=> setRecordStock(e.target.value)}
            />
            <InputField
                type ="number"
                value={recordPrice}
                placeholder="매매가"
                onChange={e=> setRecordPrice(e.target.value)}
            /><InputField
                type ="number"
                value={recordAmount}
                placeholder="수량"
                onChange={e=> setRecordAmount(e.target.value)}
            /><InputField
                type ="text"
                value={recordType}
                placeholder="B or S"
                onChange={e=> setRecordType(e.target.value)}
            /><InputField
                type ="text"
                value={recordDate}
                placeholder="day"
                onChange={e=> setRecordDate(e.target.value)}
            /><InputField
                type ="text"
                value={recordMemo}
                placeholder="memo"
                onChange={e=> setRecordMemo(e.target.value)}
            />
            <button type="submit">기록 추가</button>
        </form>
    )
};

export default LogForm;