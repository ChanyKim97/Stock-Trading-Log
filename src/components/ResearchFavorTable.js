import React from "react";
import {Link} from "react-router-dom";

const ResearchFavorTable = ({stock, removeFavorStock}) => {
    return(
        <tr>
            <th scope="row">
                <button 
                    type="button"
                    class="btn btn-outline-primary" 
                    onClick={()=>{removeFavorStock(stock.id)}}
                >Delete</button>
            </th>
            <td>{stock.name}</td>
            <td>{stock.rate}</td>
            <td>{stock.current_price}</td>
            <td>{stock.trading_volume}</td>
            <td>{stock.market_cap}</td>
            <td><Link to={`/research/${stock.id}`}><button type="button" className="btn btn-secondary">Detail</button></Link></td>
        </tr>
    );
};

export default ResearchFavorTable;