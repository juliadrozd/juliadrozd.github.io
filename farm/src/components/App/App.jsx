import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

import Header from '../Header/Header';
import Calc from '../Calc/Calc.jsx';
import Footer from '../Footer/Footer';

import farm from '../../data/farm.json';

class App extends Component {
    render() {
      

            return ( 
              <div className = 'container' >
                <Header />

                <div className = 'main__wrap' >
                  <Map className = 'map__wrap' center = { farm.centre.coordinates } zoom = { 13 } >

                    <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> {
                      farm.fields.map(field => < GeoJSON key = { field.name } 
                        data = { field.boundary }                         
                    />)} 
                  </Map>

                  <Calc />
                </div>

                <Footer />
              </div>
            );
    }
}

export default App;