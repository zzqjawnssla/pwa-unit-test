// src/components/QrScanner.js
import React, {useState} from 'react';
import {QrReader} from 'react-qr-reader';

const QrScanner = ({constraints = {facingMode: 'environment'}}) => {
    const [data, setData] = useState('No result');

    const handleScan = (result) => {
        if (result) {
            setData(result);
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    return (
        <div>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        handleScan(result);
                    }

                    if (!!error) {
                        handleError(error);
                    }
                }}
                constraints={constraints} // Use default parameter
                style={{width: '100%'}}
            />
            <p>{data}</p>
        </div>
    );
};

export default QrScanner;