import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const UserInfo = (props) => {

    // const navigate = useNavigate();

    const userData = {
        first_name: "홍길동",
        username: "N0000000",
        region_name: "담당명",
        team_name: "팀명",
        storage: "창고명",
    }

    const handleLogout = () => {
        props.setAuthenticated(false)
        // navigate('/login')

    }

    return (
        <div className="standard">
            <div className="title">
                사용자 정보
            </div>
            <p>이름: {userData.first_name}</p>
            <p>사번: {userData.username}</p>
            <p>담당: {userData.region_name}</p>
            <p>팀: {userData.team_name}</p>
            <p>창고: {userData.storage}</p>
            <Button onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOut}/> 로그아웃
            </Button>
        </div>
    );
};

export default UserInfo;