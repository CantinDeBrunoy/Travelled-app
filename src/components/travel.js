import './travel.css';
import React, { useState } from 'react';


function Travel(props) {

    console.log(props.travel.name);

    return (
        <div className="Travel">
            {props.travel.name}
        </div>
    );
}

export default Travel;