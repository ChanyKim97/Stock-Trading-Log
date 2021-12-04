import React from "react";

const DetailTable = ({stock}) => {
    return(
        <tr>
            <th scope="row">{stock.date}</th>
            <td>{stock.rate}</td>
            <td>{stock.high_price}</td>
            <td>{stock.low_price}</td>
            <td>{stock.closing_price}</td>
            <td>{stock.transcate_value}</td>
            <td>{stock.transcate_amount}</td>
            <td>{stock.BPS}</td>
            <td>{stock.PER}</td>
            <td>{stock.PBR}</td>
            <td>{stock.EPS}</td>
            <td>{stock.market_cap}</td>
        </tr>
    );
};

export default DetailTable;