import React from 'react'
import BarcodeScannerComponent from "../../components/Barcode";

const History = () => {
    return (
        <div className="standard">
            <div className="title">
                이력관리
            </div>
            <div>
                <BarcodeScannerComponent/>
            </div>
        </div>
    )
}

export default History