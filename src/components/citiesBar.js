import './citiesBar.css';
import React, { useState } from 'react';
import Travel from './travel';
import {travels} from "../commons/bdd.js"

function CitiesBar() {

    

    const [HideMenu,setHidenMenu] = useState(false)

    const handleClickMenu = () => {
        if(HideMenu===true){
            setHidenMenu(false);
        }
        else{
            setHidenMenu(true);
        }
        console.log(HideMenu);
    }
    return (
        <div className={HideMenu === false? "citiesBar-wrapper" : "wrapper citiesBar-wrapper-open"}>
            <div className="citiesBar-nav">
                <div className="citiesBar-droprightbutton" onClick={handleClickMenu}>
                    click
                </div>
                <div className="citiesBar-content">
                    {travels.map((travel,index)=>
                        <Travel key={index} travel={travel}/>
                    )}  
                </div>
                
                
            </div>
        </div>
    );
}

export default CitiesBar;