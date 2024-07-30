import React from 'react'
import {Modal} from "react-bootstrap";
import BarcodeScannerComponent from "../../components/Barcode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const BarcodeScanModal = (props) => {
    return (
        <Modal show={props.open} fullscreen className="black-background">
            <div style={{textAlign: 'center', color: 'white'}}>
                <div style={{margin: '10px', textAlign: 'right'}}>
                    <FontAwesomeIcon icon={faClose} onClick={props.onHide}/>
                </div>
                <div style={{marginTop: '30px',}}>
                    <h1>Barcode Scanner</h1>
                </div>
                <div>
                    <BarcodeScannerComponent/>
                </div>
            </div>
        </Modal>
    )
}

export default BarcodeScanModal