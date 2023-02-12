import React from 'react';
import './css/News.css';

const News = () => {
  return (
        <div>
{/* <div classNameName="p-5 text-center bg-image" style={{
    backgroundImage: "url(https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    height:"400px"}}>
  <div classNameName="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
    <div classNameName="d-flex justify-content-center align-items-center h-100">
      <div classNameName="text-white">
        <h1 classNameName="mb-3">Heading</h1>
        <h4 classNameName="mb-3">Subheading</h4>
        <a classNameName="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
      </div>
    </div>
  </div>
</div>
<div classNameName="row m-3 justify-content-center">
<div classNameName="col-7 m-4 custom-col_1">
<div classNameName="row justify-content-center  p-4">
<div classNameName="col-8">
<input classNameName="form-control custom-input_1 w-50 center-input my-4" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="San Francisco"/>
  <option value="New York"/>
  <option value="Seattle"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/>
</datalist>
<div classNameName="card">
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" classNameName="card-img-top" alt="Fissure in Sandstone"/>
  <div classNameName="card-body">
    <h5 classNameName="card-title">Card title</h5>
    <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" classNameName="custom-btn_1">Button</a>
  </div>
</div>
</div>
</div>
</div>
  <div classNameName="col-4 m-4 p-4 custom-col_1" style={{background:"url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp)"}}>
  <section >
  <div classNameName=" py-5 h-100">
        <div classNameName="card" style={{background:"rgba(240, 248, 255, 0) !important"}}>
          <div classNameName="card-img-overlay  p-5">
          <div classNameName="input-group rounded">
  <input type="search" classNameName="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span classNameName="input-group-text border-0" id="search-addon">
  <i classNameName="fa fa-search"></i>
  </span>
</div>
            <h4 classNameName="mb-0">Juneau, Alaska, US</h4>
            <p classNameName="display-2 my-1">1.28°C</p>
            <p classNameName="mb-2">Feels Like: <strong>-1.08 °C</strong></p>
            <h5>Snowy</h5>
          </div>
        </div>     
  </div>
</section>
  </div>
</div>
    <div classNameName="col p-5 text-center">
      <div classNameName="card">
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
    </div> */}

<main className="my-5">
    <div className="container">
      <section className="text-center">
        <h4 className="mb-5"><strong>Latest posts</strong></h4>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
        </div>
      </section>


     
      <nav className="my-4" aria-label="...">
        <ul className="pagination pagination-circle justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</div>
  )
}

export default News;