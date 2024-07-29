import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBackspace,
} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import {useNavigate} from "react-router-dom";

const TopBar = ({authenticated,}) => {
    const navigate = useNavigate()

    const handleBack = () => {
        //이전 페이지로 이동
        navigate(-1)
    }


    return (
        <div className="top-area">
            <FontAwesomeIcon icon={faBackspace} onClick={handleBack}/>

        </div>
    );
};

export default TopBar;