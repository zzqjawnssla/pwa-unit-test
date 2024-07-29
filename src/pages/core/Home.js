import React from 'react'

import '../../App.css'
import {useNavigate} from "react-router-dom";
// import {Button} from "react-bootstrap";

// import QrScanner from '../../components/QrScanner'; // Import QrScanner component


const Home = () => {
    const navigate = useNavigate();
    // const [showScanner, setShowScanner] = useState(false); // State to control QR scanner visibility
    //
    // const handleQRScanner = () => {
    //     setShowScanner(true); // Show QR scanner
    // }

    const handleUse = () => {
        navigate('/use-unit')
    }

    const handleReturn = () => {
        alert('미구현')
    }

    const handleSearch = () => {
        alert('미구현')
    }

    const handleIn = () => {
        alert('미구현')
    }

    const handleOut = () => {
        alert('미구현')
    }

    const handleCreate = () => {
        alert('미구현')
    }

    return (
        <div className="standard">
            <div className="title">
                유니트관리 시스템
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'start',
                width: '320px',
                height: '600px'
            }}>
                <div className="main-items" onClick={handleUse}>
                    창고 <br/>
                    입고/출고
                </div>

                <div className="main-items" onClick={handleReturn}>
                    장착/탈거 <br/>(미구현)
                </div>
                <div className="main-items" onClick={handleSearch}>
                    Unit 조회 <br/>(미구현)
                </div>
                <div className="main-items" onClick={handleIn}>
                    수리사<br/> 입고/출고 <br/>(미구현)
                </div>
                <div className="main-items" onClick={handleOut}>
                    기타2 <br/>(미구현)
                </div>
                <div className="main-items" onClick={handleCreate}>
                    기타3 <br/>(미구현)
                </div>
                {/*<Button onClick={handleQRScanner}>QR</Button>*/}
            </div>
            {/*{showScanner && <QrScanner/>} /!* Conditionally render QrScanner *!/*/}

        </div>
    )
}

export default Home