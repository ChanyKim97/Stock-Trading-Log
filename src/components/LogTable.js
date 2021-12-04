import React from "react";

const LogTable = ({record}) =>{
    return(
        <tr>
            <td>{record.Stock_Name}</td>
            <td>{record.Trade_price}</td>
            <td>{record.Trade_quantity}</td>
            <td>{record.Trade_type}</td>
            <td>{record.Trade_date}</td>
            <td>{record.Memo}</td>
        </tr>
    );
};

export default LogTable;