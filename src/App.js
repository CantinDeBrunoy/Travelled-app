import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Map from './components/Map/map';
import Voyage from './components/Voyage/Voyages';
import Travel from './components/Voyage/Travel';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/voyages" />} />
        <Route path="/map" element={<Map />} />
        <Route path="/voyages" element={<Voyage />} />
        <Route path="/voyages/:pays" element={<Travel/>} />
      </Routes>
    </Router>
  );
};

export default App;