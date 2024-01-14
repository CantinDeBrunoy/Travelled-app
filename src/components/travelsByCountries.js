import './travelsByCountries.css';
import React, { useState, useEffect } from 'react';
import { useCountries } from 'use-react-countries'
import Travel from './travel';



function TravelsByCountries(props) {
    const [Travels, setTravels] = useState();
    const [Country, setCountry] = useState();
    const { countries } = useCountries()
    const [Flag, setFlag] = useState();

    

    useEffect(() => {
        const toto = countries.filter(countrie => countrie.name.includes('United'))
        console.log(toto);

        setTravels(props.travels)
        setCountry(props?.travels[0]?.country)
        const flag = countries.filter((country) => country.name === props?.travels[0]?.country)
        setFlag(flag[0]?.flags.svg);
    }, [])

    return (
        <div className="travelsByCountries">

            <div className='travelsByCountries-Title'>
                <img src={Flag} height="60px" />
                <span className='travelsByCountries-name'>{Country}</span>
            </div>

            <div className='travelsByCountries-AllTravels'>
                {Travels?.map((travel, index) =>
                    <Travel key={index} travel={travel} />
                )}
            </div>

        </div>
    );
}

export default TravelsByCountries;