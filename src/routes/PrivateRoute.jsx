import React from 'react';
import { authContextHook } from '../utility/AuthHooks';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = authContextHook();
    if (loading) {
        return <div className='flex justify-center items-center'><p>Loading...</p></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;