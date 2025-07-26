import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { travels } from '../../commons/bdd';
import TravelCard from './TravelCard';
import './Voyages.css';

const Voyages = () => {
  const [selectedFilter, setSelectedFilter] = useState("2025"); 
  const [filterMode, setFilterMode] = useState('year'); 
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  const getYear = (date) => date?.split(" ")[1] ?? "Autre";

  const colorPalette = [
    '#E63946', '#F4A261', '#F77F00', '#E76F51', '#FF6B6B',
    '#F72585', '#B5179E', '#7209B7', '#3A0CA3', '#4361EE',
    '#4895EF', '#4CC9F0', '#277DA1', '#1D3557', '#457B9D',
    '#A8DADC', '#2A9D8F', '#219EBC', '#00B4D8', '#3D5A80',
    '#264653', '#006D77', '#118AB2', '#073B4C', '#FB5607',
    '#FF006E', '#8338EC', '#3F37C9', '#FF4D6D', '#9D4EDD'
  ];

  const addAlpha = (hex, alpha) => {
    const hexNoHash = hex.replace('#', '');
    const r = parseInt(hexNoHash.slice(0, 2), 16);
    const g = parseInt(hexNoHash.slice(2, 4), 16);
    const b = parseInt(hexNoHash.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const getColorFromPalette = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colorPalette.length;
    return colorPalette[index];
  };

  const filterValues = [...new Set(
    travels.map((t) => filterMode === 'year' ? getYear(t.date) : t.country)
  )].sort();

  const filteredTravels = selectedFilter
    ? travels.filter((t) =>
        filterMode === 'year'
          ? getYear(t.date) === selectedFilter
          : t.country === selectedFilter
      )
    : travels;

  return (
    <div className="voyages">
      <div className="voyages-page">
      <div
  className="filter-button"
  onClick={() => {
    setAnimating(true);
    setTimeout(() => {
      setFilterMode((prev) => (prev === 'year' ? 'country' : 'year'));
      setSelectedFilter(null);
      setAnimating(false); 
    }, 200); 
  }}
>
  {filterMode === 'year' ? 'Année' : 'Pays'}
</div>


        <div className={`filter-buttons ${animating ? 'fade-slide' : ''}`}>
  {filterValues.map((value) => (
    <button
      key={value}
      className={`filter-button ${selectedFilter === value ? 'active' : ''}`}
      onClick={() => setSelectedFilter(selectedFilter === value ? null : value)}
      style={
        selectedFilter === value
          ? {
              backgroundColor: getColorFromPalette(value),
              borderColor: getColorFromPalette(value),
              color: 'white',
            }
          : {
              borderColor: 'transparent',
              color: getColorFromPalette(value),
              backgroundColor: addAlpha(getColorFromPalette(value), 0.1),
            }
      }
    >
      {value}
    </button>
  ))}
</div>

        <div className="tiles-container gridContainer">
          {filteredTravels.map((travel, index) => (
            <TravelCard key={index} travel={travel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voyages;