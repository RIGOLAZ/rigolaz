import React, {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const Private = () => {
    const {user} = useContext(AuthContext);
    console.log('PRIVATE',user);

    if(!user){
        return <Navigate to='/' />
    }
    return (
        <div>
            <Outlet className='container'/>
        </div>
    );
};

export default Private;