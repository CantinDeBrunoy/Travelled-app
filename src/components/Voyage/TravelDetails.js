import React from 'react';
import styles from './TravelStyle.module.css';

const TravelDetails = ({ travel }) => {


  return (
    <div className={styles.details}>
      <h3>{travel.name}</h3>
      <p>{travel.date}</p>
    </div>
  );
};

export default TravelDetails;
