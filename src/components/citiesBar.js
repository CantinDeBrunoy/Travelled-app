import './citiesBar.css';
import React, { useState, useEffect } from 'react';
import TravelsByCountries from "./travelsByCountries"
import { travels } from "../commons/bdd.js"
import { countriesName } from "../commons/bdd"
import whiteArrow from "../assets/img/test.png"

function CitiesBar() {
    const [HideMenu, setHidenMenu] = useState(false);
    const [Travels, setTravels] = useState([]);
    const tab = [];



    useEffect(() => {



        countriesName.map((country, indexC) => {

            tab.push(travels.filter((travel) => travel.country === country.name))
        })
        setTravels(tab)


    }, [])




    const handleClickMenu = () => {
        if (HideMenu === true) {
            setHidenMenu(false);
        }
        else {
            setHidenMenu(true);
        }
    }
    if (Travels) {
        return (
            <div className={HideMenu === false ? "citiesBar-wrapper" : "citiesBar-wrapper citiesBar-wrapper-open"}>
                <div className="citiesBar-nav">
                    <div className="citiesBar-droprightbutton" onClick={handleClickMenu}>
                        <img className={HideMenu === false ? "citiesBar-arrow" : "citiesBar-arrow citiesBar-arrow-open"} src={whiteArrow} width="75px" />
                    </div>
                    <div className="citiesBar-content">
                        <div className='citiesBar-Title'>All my travels</div>
                        <div className='citiesBar-TravelsByCountries' >
                            {Travels.map((travelCountry, index) =>
                                <TravelsByCountries key={index} travels={travelCountry} />
                            )}
                        </div>
                    </div>


                </div>
            </div>
        );

    }
    else {
        return (
            <div>
                chargement
            </div>
        )
    }

}

export default CitiesBar;