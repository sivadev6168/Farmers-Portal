import React,{useEffect, useState} from "react";
import BannerImage from "./BannerImage";
import "./css/News.css";
import NewsData from "./Json/News.json";

import axios from "axios";

const News = () => {

  const [open, setOpen] = useState(null)

  return (
    <div>
      <BannerImage name={"Farmer's News"}/>
      <section>
        <div className="container my-5">
          <div className="row flex_row">
            <div className="col-md-6 slide-right">
              <img
                src="https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1"
                className="img-thumbnail"
                alt="farmer"
              />
            </div>
            <div className="col-md-6 centring">
              <h1 className="news_h1">
                Cultivators are the most valuable citizens… they are tied to
                their country
                <br />
                <p className="news_p">Thomas Jefferson</p>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <main className="my-5">
      
          <section className="text-center">
            <h1 className="my-5 news_h1_1">News</h1>
            <div className="container">
            <div className="row flex-row_1">
              {NewsData.map((news, index) => {
                return(
                  <div className="col-lg-4 col-md-12 mb-4" key={index}>
                  <div className="card">
                    <div
                      className="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={news['Img url']}
                      className="card-image"
                        alt="banner"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title news-title">{news.News.slice(0, 34)}...</h5>
                     { news.News === open && <p className="card-text">
                        {news.Description}
                      </p>}
                      <a onClick={() => setOpen(prev => news.News === prev ? null : news.News)} className="news-btn mt-3">
                        Show
                      </a>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
            </div>
          </section>
      </main>
    </div>
  );
};

export default News;
