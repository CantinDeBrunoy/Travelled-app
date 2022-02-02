import './citiesBar.css';
import React, { useState } from 'react';
import Travel from './travel';
import {travels} from "../commons/bdd.js"
import {countries} from "../commons/bdd"

function CitiesBar() {

    let tab = [];


    countries.map((country,indexC) =>{

        tab.push(travels.filter((travel)=> travel.country === country.name))
    })
    console.log(tab);
    

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
        
                     
                </div>
                
                
            </div>
        </div>
    );
}

export default CitiesBar;