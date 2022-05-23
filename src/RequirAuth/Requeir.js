import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../src/friebase.init';
import Loading from '../../src/Components/Loading/Loading';

const Requeir = ({children}) => {

    const [user,lodaing]=useAuthState(auth);
    const location=useLocation('');
    if(lodaing){
        return <Loading></Loading>
    }
    if(!user){

        return <Navigate  to='/login' state={{from:location}} replace></Navigate>
    }

    return children;
   
};

export default Requeir;