import React, { useState, useEffect } from "react";
import BannerImage from "./BannerImage";
import Chart from "react-apexcharts";
import {HTTP} from '../axios'

import "./css/Weather.css";
const api = {
  key: "f2748a2a99b415ae803ebd966ed3124b",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("kochi");
  const [weather, setWeather] = useState({});

  useEffect(() => {searchPressed()}, [])

  const options = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  };
  const series = [
    {
      name: "humidity",
      data: [24, 40, 25, 50, 49, 21, 70].sort((a, b) => 0.5 - Math.random()),
    },
    {
      name: "wind speed",
      data: [2, 12, 4, 6, 3, 6, 8].sort((a, b) => 0.5 - Math.random()),
    },
    {
      name: "Precipitation",
      data: [2, 2, 5, 7, 2, 9, 7].sort((a, b) => 0.5 - Math.random()),
    },
  ];

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    if(!search) return
    HTTP.get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((result) => {
        setWeather(result.data);
      });
  };

  const get30daysWeather = () => {
    HTTP.get(`${api.base}forecast/climate?lat=${76.3264}&lon=${9.49}&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div>
      <BannerImage name={"Weather"} />
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-12">
              <div
                className="card bg-white text-white"
                style={{ borderRadius: "40px" }}
              >
                <div className="bg-image" style={{ borderRadius: "30px 30px 0px 0px",  }}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                    className="card-img"
                    alt="weather"
                    height={500}
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                  ></div>
                </div>
                <div className="card-img-overlay text-dark p-5">
                  <div className="input-group rounded py-3">
                    <input
                    value={search}
                      type="search"
                      className="form-control rounded"
                      placeholder="Enter location name"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                      onClick={searchPressed}
                    >
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                  {typeof weather.main !== "undefined" ?
                 ( <>
                  <h4 className="mb-0">{weather.name}</h4>
                  <p className="display-2 my-3">{weather.main.temp}°C</p>
                  <p className="mb-2">
                    Feels like: <strong>{weather.main.feels_like}</strong>
                  </p>
                  <h5>{weather.weather[0].main}</h5>
                  <p>({weather.weather[0].description})</p>
                  </>) : ('')}
                </div> 
                <Chart options={options} series={series} type="area" />;
              </div>
            </div>
          </div>
        </div>
        <button onClick={get30daysWeather}>test</button>
        
      </section>
      
    </div>
  );
};

export default Weather;
