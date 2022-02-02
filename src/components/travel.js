import './travel.css';
import React, { useState } from 'react';


function Travel(props) {

    return (
        <div className="Travel">
            {props.travel.name}
        </div>
    );
}

export default Travel;