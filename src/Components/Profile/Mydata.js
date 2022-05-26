import React from 'react';

const Mydata = (props) => {
    const {city,education,phone}=props.data;
    return (
        <div>
            <h5>Location : {city}</h5>
            <h5>Education : {education}</h5>
            <h5>Mobile : {phone}</h5>

            
        </div>
    );
};

export default Mydata;