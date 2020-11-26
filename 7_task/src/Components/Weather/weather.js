import React, { Component } from 'react';
import axios from 'axios';

const API = "http://api.weatherstack.com/current";
const params = {
  access_key: process.env.REACT_APP_API_KEY,
  query: 'Helsinki',
  units: 'f',
}

class Weather extends Component {
  state = {
    weather: {
      request: {},
      location: {},
      current: {},
      image: []
    },
    isLoading: false,
  }
  componentDidMount() {
    this.setState({ isLoading: true })

    axios
      .get(API, { params })
      .then((response) =>
        this.setState({ weather: response.data, isLoading: false })
      );
  }
  locationFinder() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        axios.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude +
          "&sensor=false", function (data) {
            console.log(data);
          })
        let img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
        this.setState({ image: img });
      });
    }
  };




  render() {
    return this.state.isLoading ? (
      <p>Weather Loading.....</p>
    ) : (
        <p>Current temperature in {this.state.weather.location.name}
         is {this.state.weather.current.temperature}&#8457; and it feels like {this.state.weather.current.feelslike} &#8457; <img src={this.state.weather.current.weather_icons} alt={this.state.weather.current.weather_description} height="20px" />
          <button onClick={this.locationFinder()}>Map</button>{this.state.image}</p>

      );
  }
}

export default Weather;