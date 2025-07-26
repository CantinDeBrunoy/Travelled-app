import React from 'react';
import { useCountries } from 'use-react-countries';
import styles from './TravelStyle.module.css';

const TravelFlag = ({ code }) => {
  const { countries } = useCountries();
  // console.log(countries[0].flags.svg);
  // console.log(code);
  const country = countries.find(c => c.name === code);

  return country ? (
    <img
      src={country.flags.svg}
      alt={`${country.name.common} flag`}
      className={styles.flag}
    />
  ) : null;
};

export default TravelFlag;
