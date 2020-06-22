import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div className="row RowTodayForecast">
      <div className="col-5 DataCeld">
        <h2 className="City"> {props.data.city} </h2>
        <div className="Main">
          <ul>
            <li> Precipitation: {props.data.humidity} % </li>
            <li> Wind : {props.data.wind} km/hr </li>
          </ul>
        </div>
      </div>
      <div className="col-2 TempCeld">
        <WeatherTemperature temperature={props.data.temperature} />
      </div>
      <div className="col-5 WeatherImageCeld">
        <img src={props.data.icon} alt="" id="weather-icon" />
        <p className="WeatherDescrip">{props.data.description}</p>
      </div>
    </div>
  );
}
