// src/components/NavigationBar.js
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faList, faUser} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const NavigationBar = ({authenticated, setAuthenticated}) => {
    const iconMap = {
        Home: faHome,
        History: faList,
        User: faUser,
    };

    const navigate = useNavigate();

    const handleNavigation = (menu) => {
        switch (menu) {
            case 'Home':
                navigate('/');
                break;
            case 'History':
                navigate('/history');
                break;
            case 'User':
                navigate('/user');
                break;
            default:
                break;
        }
    };

    return (
        <div className="menu-area">
            <ul className="menu-list">
                {Object.keys(iconMap).map((menu, index) => (
                    <li key={index} onClick={() => handleNavigation(menu)}>
                        <FontAwesomeIcon icon={iconMap[menu]}/>
                        <div>{menu}</div>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default NavigationBar;