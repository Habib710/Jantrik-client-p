import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../Login/Login.css';

const Loading = () => {
    return (
        <div className='container App py-5 my-5'>
            <Spinner className='custom-css-spiner text-center m-5 p-5' animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
            
        </div>
    );
};

export default Loading;