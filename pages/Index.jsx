import React from "react";
import axios from "axios";
import Head from "next/head";

import Global from "../components/Global";
import SearchBar from "../components/navigations/SearchBar";
import CurrentWeather from "../components/sections/CurrentWeather";
import Forecast from "../components/sections/Forecast";
import DetailedInfo from "../components/sections/DetailInfo";

require("dotenv").config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_API_URL = process.env.WEATHER_API_URL;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: "Jakarta",
      user: null,
      forecast: [],
      temperatureUnits: "metric",
      temperatureClass: "",
      savedCities: null,
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.apiRequest = this.apiRequest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertTemperature = this.convertTemperature.bind(this);
    this.setTemperatureClass = this.setTemperatureClass.bind(this);
    this.changeUnits = this.changeUnits.bind(this);
    this.handleAddCity = this.handleAddCity.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  /** Mount original city  */
  async componentDidMount() {
    await this.apiRequest(this.state.activeCity);
  }

  /** Yahoo! Weather API request  */
  async apiRequest(cityName) {
    this.setState({ loading: true });
    const locationUrl = `${WEATHER_API_URL}/weather?q=${cityName}&units=${
      this.state.temperatureUnits
    }&appid=${WEATHER_API_KEY}`;

    await axios
      .get(locationUrl)
      .then(result => {
        const currentConditions = result.data;
        this.setState({
          cityName: currentConditions.name,
          temp: currentConditions.main.temp,
          iconId: currentConditions.weather[0].id,
          description: currentConditions.weather[0].main,
          humidity: currentConditions.main.humidity,
          time: currentConditions.dt,
          high: currentConditions.main.temp_max,
          low: currentConditions.main.temp_min,
          sunrise: currentConditions.sys.sunrise,
          sunset: currentConditions.sys.sunset,
          windSpeed: `${currentConditions.wind.speed} ${
            this.state.temperatureUnits === "metric" ? "m/s" : "mph"
          }`
        });
        this.setTemperatureClass();
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
    const forecastUrl = `${WEATHER_API_URL}/forecast?q=${cityName}&units=${
      this.state.temperatureUnits
    }&appid=${WEATHER_API_KEY}`;

    axios.get(forecastUrl).then(result => {
      this.setState({ forecast: result.data.list, loading: false });
    });
  }

  /** App city search bar functions  */
  handleChange(e) {
    e.preventDefault();
    this.setState({
      activeCity: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.apiRequest(this.state.activeCity);
  }

  /** Set temperature class for color combos  */
  convertTemperature() {
    if (this.state.temperatureUnits === "metric") {
      return (this.state.temp * 9) / 5 + 32;
    } else {
      return this.state.temp;
    }
  }

  setTemperatureClass() {
    let temp = this.convertTemperature();
    if (temp >= 100) {
      this.setState({
        temperatureClass: "boiling"
      });
    }
    if (temp < 100 && temp >= 85) {
      this.setState({
        temperatureClass: "hot"
      });
    }
    if (temp < 85 && temp >= 65) {
      this.setState({
        temperatureClass: "warm"
      });
    }
    if (temp < 65 && temp >= 50) {
      this.setState({
        temperatureClass: "perfect"
      });
    }
    if (temp < 50 && temp >= 32) {
      this.setState({
        temperatureClass: "cool"
      });
    }
    if (temp < 32) {
      this.setState({
        temperatureClass: "freezing"
      });
    }
  }

  /** Toggle Celsius and Fahrenheit */
  changeUnits() {
    setTimeout(() => {
      this.state.temperatureUnits === "imperial"
        ? this.setState({ temperatureUnits: "metric" })
        : this.setState({ temperatureUnits: "imperial" });
      this.apiRequest(this.state.activeCity);
    });
  }

  /** Add city to database */
  handleAddCity(e) {
    e.preventDefault();
    if (this.state.user != null) {
      this.citiesRef.push({
        city: this.state.activeCity,
        user: this.state.user.email
      });
    }
    this.handleSavedCities();
  }

  handleCityClick(city) {
    this.setState({ activeCity: city });
    this.apiSearch(city);
  }

  render() {
    return (
      <Global>
        <Head>
          <title>Next Weather</title>
        </Head>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          activeCity={this.state.activeCity}
        />
        <CurrentWeather
          city={this.state.cityName}
          temp={this.state.temp}
          iconId={this.state.iconId}
          description={this.state.description}
          loading={this.state.loading}
        />
        <Forecast
          forecast={this.state.forecast}
          tempClass={this.state.temperatureClass}
        />
        <DetailedInfo
          high={this.state.high}
          low={this.state.low}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          windSpeed={this.state.windSpeed}
          humidity={this.state.humidity}
          time={this.state.time}
        />
      </Global>
    );
  }
}
