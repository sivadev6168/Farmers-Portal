import React,{useState} from 'react'
import BannerImage from './BannerImage';
import { Search } from './search';
import SelectSearch from 'react-select-search';
import { crop } from '../cropsData';

const options = crop.map(arr => {
  return {value: arr.id, name : arr['Crop name']}
})

function Welcome({cropDetails}) { //props.currentCrop
  return(
    <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={cropDetails['Img url']}
                className="img-thumbnail"
                alt="farmer"
              />
            </div>
            <div className="col-md-6 centring">
              <h5>
                {cropDetails.Description}
                <br />
              </h5>
              <ul>
                <li>Croptype: {cropDetails.Croptype}</li>
                <li>Sowing period: {cropDetails['Sowing period']}</li>
                <li>Harvesting period: {cropDetails['Harvesting period']}</li>
                <li>Sowing month: {cropDetails['Sowing month']}</li>
                <li>Harvesting month: {cropDetails['Harvesting month']}</li>
                <li>Climatic condition suitable for the growth :{cropDetails['Climatic condition suitable for the growth']}</li>
                {/* product link notcorrect */}
                {/* <li>buy: <a href={cropDetails['Product link']} target='_blank'>Click to buy crop</a></li> */} 
              </ul>
              <center>

              <a href="#!" className="btn btn-primary">
                        Notify Farmer
                      </a>
              </center>
              
            </div>
          </div>
          
        </div>
      </section>
  )
}

const Crops = () => {

  const [currentCrop, setCurrentCrop] = useState(0)

  const selectCrop = (e) => {
    let current = crop.filter(el => el.id == e)
    setCurrentCrop(current[0])
  }

  return (
    <div>
       <BannerImage name={'Crop Details'}/>
       <div >
       <SelectSearch options={options} onChange={selectCrop} value={currentCrop.id} name="crop" placeholder="Choose your crop to list details" />
       </div>
      {currentCrop ? <Welcome cropDetails={currentCrop}/> : <center><h1 className="mt-5">No Crop to display</h1></center>}
      </div>
  )
}

export default Crops
