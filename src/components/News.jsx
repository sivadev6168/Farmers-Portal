import React from 'react';
import BannerImage from './BannerImage';
import './css/News.css';
import NewsData from './Json/News.json'

const News = () => {
  return (
       <div>
<BannerImage />
<center className='my-5'>
  <h1>Farmer's Portal</h1>
</center>
          <section>
          <div className="container my-5">
  <div className="row">
    <div className="col-md-6">
      <img src="https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1"  className="img-thumbnail" alt="farmer" />
    </div>
    <div className="col-md-6 centring">
      <h1>Cultivators are the most valuable citizens… they are tied to their country<br/><h2>Thomas Jefferson</h2></h1>
    </div>
  </div>
</div>
          </section>

<main className="my-5">
    <div className="container">
      <section className="text-center">
      <h1 className='my-5'>News</h1>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" alt='banner'/>
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
    </div>
  </main>
  </div>
  )
}

export default News;