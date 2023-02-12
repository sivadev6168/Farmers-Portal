import React from 'react';
import './css/Crops.css';

const Crops = () => {
  return (
        <div>
<div className="p-5 text-center bg-image" style={{
    backgroundImage: "url(https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    height:"400px"}}>
  <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Heading</h1>
        <h4 className="mb-3">Subheading</h4>
        <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
      </div>
    </div>
  </div>
</div>
<div className="row m-3 justify-content-center">
<div className="col-7 m-4 custom-col_1">
<div className="row justify-content-center  p-4">
<div className="col-8">
<input className="form-control custom-input_1 w-50 center-input my-4" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="San Francisco"/>
  <option value="New York"/>
  <option value="Seattle"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/>
</datalist>
<div className="card">
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" className="custom-btn_1">Button</a>
  </div>
</div>
</div>
</div>
</div>
  <div className="col-4 m-4 p-4 custom-col_1" style={{background:"url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp)"}}>
  <section >
  <div className=" py-5 h-100">
        <div className="card" style={{background:"rgba(240, 248, 255, 0) !important"}}>
          <div className="card-img-overlay  p-5">
          <div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
  <i className="fa fa-search"></i>
  </span>
</div>
            <h4 className="mb-0">Juneau, Alaska, US</h4>
            <p className="display-2 my-1">1.28°C</p>
            <p className="mb-2">Feels Like: <strong>-1.08 °C</strong></p>
            <h5>Snowy</h5>
          </div>
        </div>     
  </div>
</section>
  </div>
</div>
    <div className="col p-5 text-center">
      <div className="card">
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
    <h2>text</h2>
      </div>
    </div>
</div>
  )
}

export default Crops