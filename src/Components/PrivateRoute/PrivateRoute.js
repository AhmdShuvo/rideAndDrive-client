import React from 'react';

import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Loader from '../Shared/Loader/Loader';



const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    
    if (isLoading) {
        return (
            <Loader></Loader>
        );
    }
    if (!user.email) {
        return <Navigate to='/login' state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;