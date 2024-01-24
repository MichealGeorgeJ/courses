import React from 'react'
import logo from '../assets/c-2.jpg'
const Career = () => {

  
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-3 col-sm-6 mt-5">
              <div className="card">
                <img src={logo} alt="" className="card-img-top" />
              <div className="card-body">
                <h3>Career Opportunities</h3>
                <p><i class="fa-regular fa-hand-point-right"></i> Trusted by200+ companies</p>
                <p><span><h4>Companies:</h4></span>PayPal,JusPay,chargbee,scapic</p>
                
                </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career