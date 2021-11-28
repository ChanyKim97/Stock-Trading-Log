import React from "react";
import {Link} from "react-router-dom";

const ResearchTable = ({stock}) => {
    return(
        <tr>
            <th scope="row">{stock.name}</th>
            <td>{stock.rate}</td>
            <td>{stock.current_price}</td>
            <td>{stock.trading_volume}</td>
            <td>{stock.market_cap}</td>
            <td><Link to={`/research/${stock.id}`}><button type="button" className="btn btn-secondary">Detail</button></Link></td>
        </tr>
    );
};

export default ResearchTable;