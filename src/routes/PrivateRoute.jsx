import React from 'react';
import { authContextHook } from '../utility/AuthHooks';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = authContextHook();
    const location = useLocation();
    console.log('this is the location from private route: ', location);
    // if (loading) {
    //     return <div className='flex justify-center items-center'><p>Loading...</p></div>
    // }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;