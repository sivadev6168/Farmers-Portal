import React from 'react'

const BannerImage = () => {
  return (
    <div><div className="p-5 text-center bg-image" style={{
        backgroundImage: "url(https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        height:"600px"}}>
      <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Farmer's Newsz</h1> 
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default BannerImage