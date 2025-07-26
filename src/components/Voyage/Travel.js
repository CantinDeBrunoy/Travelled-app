import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../../assets/img/markerGreen.png"; 

const travel = {
  name: "La Tranche sur Mer",
  country: "France",
  timeTravelled: 7,
  people: ["RoMayn", "Wayl", "Lucas", "Félix", "Hélory", "Amir", "Théo"],
  pictures: [],
  coordonate: { lat: 46.344059, long: -1.438786 },
  moneySpent: {
    hotel: 0,
    food: 0,
    activities: 0,
    meansOfTransports: 0,
  },
  date: "none",
};

const MapMarker = ({ Marker }) => (
  <img width="40px" src={Marker} alt="marker" />
);

const TravelDetailsPage = () => {
  const mapProps = {
    center: {
      lat: travel.coordonate.lat,
      lng: travel.coordonate.long,
    },
    zoom: 11,
  };

  return (
    <div style={styles.container}>
      {/* BANNER */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>{travel.name}</h1>
        <p style={styles.bannerSubtitle}>{travel.country}</p>
      </div>

      {/* INFO SECTION */}
      <div style={styles.infoSection}>
        <div style={styles.card}>
          <h3>Participants</h3>
          <ul style={styles.ul}>
            {travel.people.map((person) => (
              <li key={person}>{person}</li>
            ))}
          </ul>
        </div>

        <div style={styles.card}>
          <h3>Dépenses</h3>
          <ul style={styles.ul}>
            {Object.entries(travel.moneySpent).map(([key, value]) => (
              <li key={key}>
                {key} : {value} €
              </li>
            ))}
          </ul>
        </div>

        <div style={{ ...styles.card, backgroundColor: "#f44336", color: "white" }}>
          <p>ESPACE POUR LES PHOTOS (Carousel par exemple) ?</p>
        </div>
      </div>

      <div style={styles.mapWrapper}>
        <div style={styles.mapSection}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDKKM12U3DGYq4JUbpUwcaSQh_Vy4bI2nk",
            }}
            defaultCenter={mapProps.center}
            defaultZoom={mapProps.zoom}
          >
            <MapMarker
              lat={travel.coordonate.lat}
              lng={travel.coordonate.long}
              Marker={Marker}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#e8f9ff",
    padding: "1rem",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  banner: {
    background: "linear-gradient(135deg, #36c2f0, #5dd1ff)",
    color: "white",
    padding: "2rem",
    borderRadius: "1rem",
    textAlign: "center",
    marginBottom: "2rem",
  },
  bannerTitle: {
    fontSize: "2.5rem",
    margin: 0,
  },
  bannerSubtitle: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
    opacity: 0.8,
  },
  infoSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 2fr",
    gap: "1.5rem",
    marginBottom: "2rem",
    alignItems: "stretch",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    height: "100%",
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
  },
  mapWrapper: {
    width: "100%",
    marginTop: "1rem", 
  },
  mapSection: {
    marginTop:"8vh",
    backgroundColor:"red",
    height: "45vh",
    width: "50%",
    borderRadius: "1rem",
    overflow: "hidden",
  },
};

export default TravelDetailsPage;