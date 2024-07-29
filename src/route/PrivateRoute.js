import React from 'react';
import {Navigate} from 'react-router-dom';
import History from '../pages/core/History';
import UserInfo from "../pages/detail/User-info";
import UseUnit from "../pages/detail/Use-unit";
import UnitDetail from "../pages/detail/Unit-detail"; // Ensure this import is correct

const PrivateRoute = (props) => {
    if (props.authenticated === true) {
        switch (props.component) {
            case 'UserInfoModal':
                return <UserInfo setAuthenticated={props.setAuthenticated}/>;
            case 'History':
                return <History/>;
            case 'Use-Unit':
                return <UseUnit/>;
            case 'Unit-Detail':
                return <UnitDetail/>;
            // default:
            //     return <Navigate to="/login"/>;
        }
    } else {
        return <Navigate to="/login"/>;
    }
};

export default PrivateRoute;