import React, {useEffect, useRef, useState} from 'react';
import {BarcodeScanner} from 'react-barcode-scanner';
import 'react-barcode-scanner/polyfill';

const BarcodeScannerComponent = () => {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        // Check for camera permission
        navigator.permissions.query({name: 'camera'}).then((result) => {
            if (result.state === 'granted') {
                // Permission already granted
                startCamera();
            } else if (result.state === 'prompt') {
                // Request permission
                navigator.mediaDevices.getUserMedia({video: true})
                    .then((stream) => {
                        // Permission granted
                        startCamera(stream);
                    })
                    .catch((err) => {
                        // Permission denied or no camera found
                        if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                            setError('No camera found on this device.');
                        } else {
                            setError('Camera permission denied or no camera found');
                        }
                        console.error('Camera permission denied:', err);
                    });
            } else {
                // Permission denied
                setError('Camera permission denied');
                console.error('Camera permission denied');
            }
        });
    }, []);

    const startCamera = (stream) => {
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    };

    const handleDetected = (result) => {
        setResult(result);
        console.log('Detected:', result);
    };

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    <video ref={videoRef} autoPlay style={{display: 'none'}}/>
                    <BarcodeScanner onDetected={handleDetected}/>
                    {result && <p>Detected: {result}</p>}
                </>
            )}
        </div>
    );
};

export default BarcodeScannerComponent;