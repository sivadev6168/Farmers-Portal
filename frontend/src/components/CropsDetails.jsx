import React, { useState } from "react";
import BannerImage from "./BannerImage";
import "../components/css/search.css";
import SelectSearch from "react-select-search";
import { crop } from "../cropsData";
import { HTTP } from "../axios";
import "./css/Crops.css";

const options = crop.map((arr) => {
  return { value: arr.id, name: arr["Crop name"] };
});

function Welcome({ cropDetails, trigerSMS }) {
  //props.currentCrop
  return (
    <section>
      <div className="container my-5 crops-heading">
        <h5> {cropDetails["Crop name"]} </h5>
        <div className="row">
          <div className="col-md-12 flex-col">
            <img
              src={cropDetails["Img url"]}
              className="img-thumbnail"
              alt="farmer"
            />
          </div>
          <div className="col-md-12 centring crops">
            <h5>
              {cropDetails.Description}
              <br />
            </h5>
            <ul>
              <li>Croptype: {cropDetails.Croptype}</li>
              <li>Sowing period: {cropDetails["Sowing period"]}</li>
              <li>Harvesting period: {cropDetails["Harvesting period"]}</li>
              <li>Sowing month: {cropDetails["Sowing month"]}</li>
              <li>Harvesting month: {cropDetails["Harvesting month"]}</li>
              <li>
                Climatic condition suitable for the growth :
                {cropDetails["Climatic condition suitable for the growth"]}
              </li>
              {/* product link notcorrect */}
              {/* <li>buy: <a href={cropDetails['Product link']} target='_blank'>Click to buy crop</a></li> */}
            </ul>
            <div className="col-lg-12">
              <button onClick={trigerSMS} className="crops-btn">
                Notify
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Crops = () => {
  const [currentCrop, setCurrentCrop] = useState(0);
  const currentUserName = sessionStorage.getItem("userName") || "";

  const selectCrop = (e) => {
    let current = crop.filter((el) => el.id === e);
    console.log(current);
    setCurrentCrop(current[0]);
  };

  const currentUserPhone = sessionStorage.getItem("userPhone") || "";

  //   Congratulations user name
  // You have succesfully subscribed for the farming details of crop name from Farmer's Portal.
  const message = currentCrop
    ? `Congratulations ${currentUserName} You have succesfully subscribed for the farming details of ${currentCrop["Crop name"]} from Farmer's Portal`
    : "";

  const prod = {
    authorization:
      "zJGrDQ4Phv7Y0naFXpuklO6TfUyRWLec53K8SqAjtmHI1swdMVeBuJITDt2pqOfmwHN8FkMysRYcxiUl",
    message: message,
    language: "english",
    route: "q",
    numbers: currentUserPhone,
  };

  const test = {
    authorization:
      "zJGrDQ4Phv7Y0naFXpuklO6TfUyRWLec53K8SqAjtmHI1swdMVeBuJITDt2pqOfmwHN8FkMysRYcxiUl",
    sender_id: "TXTIND",
    message: "This is a test message",
    language: "english",
    route: "v3",
    numbers: currentUserPhone,
  };

  const sendSMS = () => {
    HTTP.get(" https://www.fast2sms.com/dev/bulkV2", { params: test })
      .then((res) => {
        alert('notification sent via sms')
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <BannerImage name={"Crop Details"} />
      <div>
        <SelectSearch
          options={options}
          onChange={selectCrop}
          value={currentCrop.id}
          name="crop"
          placeholder="Choose your crop to list details"
        />
      </div>
      {currentCrop ? (
        <Welcome cropDetails={currentCrop} trigerSMS={sendSMS} />
      ) : (
        <center className="section-gap">
          <h1 className="mt-5">No Crop to display</h1>
        </center>
      )}
    </div>
  );
};

export default Crops;
