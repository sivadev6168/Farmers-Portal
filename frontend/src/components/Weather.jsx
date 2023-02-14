import React from 'react'
import BannerImage from './BannerImage'
import './css/Weather.css'

const Weather = () => {
  return (
<div>
  <BannerImage name={'Weather'}/>
 
  <section>
  <div className="container py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-10 col-lg-8 col-xl-6">

        <div className="card bg-dark text-white" style={{borderRadius:"40px"}}>
          <div className="bg-image" style={{borderRadius:"35px"}}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
              className="card-img" alt="weather" />
            <div className="mask" style={{backgroundColor:"rgba(190, 216, 232, .5)"}}></div>
          </div>
          <div className="card-img-overlay text-dark p-5">
          <div className="input-group rounded py-3">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
  <i className="fa fa-search"></i>
  </span>
</div>
            <h4 className="mb-0">Juneau, Alaska, US</h4>
            <p className="display-2 my-3">1.28°C</p>
            <p className="mb-2">Feels Like: <strong>-1.08 °C</strong></p>
            <h5>Snowy</h5>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

  </div>
  )
}

export default Weather