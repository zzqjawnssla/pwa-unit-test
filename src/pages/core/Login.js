// src/pages/core/Login.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignIn} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Login = ({setAuthenticated}) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        setAuthenticated(true);
        navigate('/');
    };

    return (

        <div className="standard" style={{padding: '20px'}}>
            <div>
                <h1>로그인</h1>
            </div>
            <div style={{marginTop: '20px', marginBottom: '30px'}}>
                <Container>
                    <Row style={{marginBottom: '10px'}}>
                        <Col sm={2} style={{textAlign: 'left'}}>
                            <Form.Label>아이디</Form.Label>
                        </Col>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="아이디" size="lg"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} style={{textAlign: 'left'}}>
                            <Form.Label>비밀번호</Form.Label>
                        </Col>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="비밀번호" size="lg"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{marginTop: '10px'}}>
                <Button onClick={handleLogin}>
                    <FontAwesomeIcon icon={faSignIn}/> 로그인
                </Button>
            </div>
        </div>
    );
};

export default Login;