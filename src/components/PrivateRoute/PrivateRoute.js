import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const PrivateRoute = ({ children, redirectTo }) => {

    const navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return loggedInUser.email ? children : <Navigate to={redirectTo} />;
    // return loggedInUser.email ? children : navigate(redirectTo);
}

export default PrivateRoute;