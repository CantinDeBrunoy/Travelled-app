import './travelsByCountries.css';
import React, { useState, useEffect } from 'react';
import arrow from "../assets/img/arrow.svg"
import './travel.css';
import activity from "../assets/img/activity.svg"
import hotel from "../assets/img/hotel.svg"
import food from "../assets/img/restaurant.svg"
import plane from "../assets/img/plane.svg"


function Travel(props) {
    const [PrintInfoTravel, setPrintInfoTravel] = useState(false);
    const [MoreDetails, setMoreDetails] = useState(false);
    const [TotalBudjet, setTotalBudjet] = useState(0);



    const handleClickArrow = () => {
        if (PrintInfoTravel === false) {
            setPrintInfoTravel(true)
        }
        else {
            setPrintInfoTravel(false)
        }
    }

    const handleClickMoreDetails = () => {
        if (MoreDetails === false) {
            setMoreDetails(true)
        }
        else {
            setMoreDetails(false)
        }
    }

    useEffect(() => {
        setTotalBudjet(
            props.travel.moneySpent.activities +
            props.travel.moneySpent.food +
            props.travel.moneySpent.hotel +
            props.travel.moneySpent.meansOfTransports
        )
    }, [])

    console.log(PrintInfoTravel);
    return (
        <div className="Travel">
            <div className='Travel-importInfo'>
                <span>{props.travel.name}</span>
                <img className={PrintInfoTravel === true ? "Travel-arrow Travel-arrow-open" : "Travel-arrow "} src={arrow} height="40px" onClick={handleClickArrow} />
            </div>
            <div className={PrintInfoTravel === true ? "Travel-infos Travel-open" : "Travel-infos "}>
                <div className='Travel-TextTravelInfo'>
                    <span>
                        <span className='Travel-infos-subtitle'>Duration : </span>
                        {props.travel.timeTravelled} days
                    </span>
                    <span>
                        <span className='Travel-infos-subtitle'>Date : </span>
                        {props.travel.date}
                    </span>
                    <span>
                        <span className='Travel-infos-subtitle'>People : </span>
                        {props.travel?.people.map((someone, index) =>
                            <span key={index}>{someone},</span>
                        )}
                    </span>
                    <span>
                        <span className='Travel-infos-subtitle'>Money Spent :</span> {TotalBudjet}€<br />
                        <div className="Travel-buton-more-details"><div className="Travel-upper-buton-more-details" onClick={handleClickMoreDetails}>{MoreDetails === true ? "Less Details" : "More Details"}</div></div>
                        <div className={MoreDetails === true ? "Travel-budjet Travel-budjet-open" : "Travel-budjet "}>
                            <div className='Travel-infos-subinfos'><img src={activity} height="50px" />{props.travel.moneySpent.activities}€</div>
                            <div className='Travel-infos-subinfos'><img src={food} height="50px" />{props.travel.moneySpent.food}€</div>
                            <div className='Travel-infos-subinfos'><img src={hotel} height="60px" />{props.travel.moneySpent.hotel}€</div>
                            <div className='Travel-infos-subinfos'><img src={plane} height="60px" />{props.travel.moneySpent.meansOfTransports}€</div>
                        </div>
                    </span>
                </div>
            </div>

        </div>
    );

}

export default Travel;