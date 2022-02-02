import './citiesBar.css';
import React, { useState } from 'react';

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
        <div className={HideMenu === false? "wrapper" : "wrapper wrapper-open"}>
            <div className="nav">
                <div className="citiesBar-droprightbutton" onClick={handleClickMenu}>
                    click
                </div>
                <div className="citiesBar-content">
                    cliblablbackdsqdsqdqs
                </div>
                
                
            </div>
        </div>
    );
}

export default CitiesBar;