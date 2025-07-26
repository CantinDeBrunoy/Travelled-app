import React from 'react';
import { useNavigate } from 'react-router-dom';
import TravelFlag from './TravelFlag';
import TravelDetails from './TravelDetails';
import styles from './TravelStyle.module.css';

const TravelCard = ({ travel }) => {
  const navigate = useNavigate();

  const NavigateToDetails = () => {
    const destination = travel.name.replace(" ","");
    navigate(`/voyages/${destination}`);
  };

  return (
    <div
      onClick={NavigateToDetails}
      className={styles.card}
      style={{ backgroundColor: travel.color || '#f0f0f0' }}
    >
      <TravelFlag code={travel.country} />
      <TravelDetails travel={travel} />
    </div>
  );
};

export default TravelCard;
