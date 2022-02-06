import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../assets/img/marker.png"
import HomeMarker from "../assets/img/home-marker.png"
import { travels } from "../commons/bdd.js"
import "./map.css"

const AnyReactComponent = ({ Marker }) => <img  className="imgMarker" width="50px" src={Marker} />;

class Map extends Component {
    constructor(props) {
        super(props);
        this.initMarker();
      }
    
    static defaultProps = {
        center: {
            lat: 48.8566,
            lng: 2.3522
        },
        zoom: 11
    };

    initMarker =() =>{
        console.log(travels);
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDKKM12U3DGYq4JUbpUwcaSQh_Vy4bI2nk" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={48.6981}
                        lng={2.5045}
                        Marker={HomeMarker}
                    />
                    <AnyReactComponent
                        lat={43.4525}
                        lng={ 5.8640}
                        Marker={HomeMarker}
                    />
                    {travels.map((travel)=>
                        <AnyReactComponent
                        lat={travel.coordonate.lat}
                        lng={travel.coordonate.long}
                        Marker={Marker}
                    />
                    )}
                    
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;

//AIzaSyDKKM12U3DGYq4JUbpUwcaSQh_Vy4bI2nk