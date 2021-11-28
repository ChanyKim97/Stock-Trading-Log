import React, { useState } from "react";
import LogTable from "../components/LogTable";

const Log = () =>{
    const [records, setRecords] = useState([]);

    const renderRecords = records.length ? records.map(record =>{
        return(
            <>
                
            </>
        );
    }) : '기록 없음';

    return(
        <>
            <h1>log</h1>
            {renderRecords}
        </>
    );
}

export default Log;