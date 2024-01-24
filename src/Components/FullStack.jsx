import React from 'react'
import logo from '../assets/fl-1.jpg'
const FullStack = () => {

  const courses=[
    {
      Title:"JavaScript for Beginners",
      Description:"2126 Enrolled",
      Duration:"6Hrs",
    },
    {
      Title:"HTML & CSS",
      Description:"2196 Enrolled",
      Duration:"7Hrs",
    },
    {
      Title:"MY SQL",
      Description:"2714 Enrolled",
      Duration:"3Hrs",
    },
    {
      Title:"JavaScript Advanced",
      Description:"3589 Enrolled",
      Duration:"8Hrs",
    },
    {
      Title:"React for Beginners",
      Description:"2126 Enrolled",
      Duration:"7Hrs",
    },
    {
      Title:"Advanced React",
      Description:"2126 Enrolled",
      Duration:"4Hrs",
    },
    {
      Title:"NodeJS",
      Description:"2026 Enrolled",
      Duration:"4Hrs",
    },
    {
      Title:"ExpressJs",
      Description:"2436 Enrolled",
      Duration:"4Hrs",
    },
    {
      Title:"MongoDB",
      Description:"1945 Enrolled",
      Duration:"3Hrs",
    },
    {
      Title:"redux",
      Description:"2126 Enrolled",
      Duration:"8Hrs",
    },
    
    
  ]

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          {
            courses.map((e,id)=>(
              <div className="col-lg-3 mt-5 col-sm-6 "key={id} >
              <div className="card h-100" style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} >
                <img src={logo} alt="" className="card-img-top" />
              <div className="card-body">
                <h3>{e.Title}</h3>
                <p><i class="fa-solid fa-user-plus"></i>{e.Description}</p>
                <p><i class="fa-regular fa-clock"></i>{e.Duration}</p>
                <select name="language" id="language">
                  <option value="Tamil">Tamil</option>
                  <option value="English">English</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Hindhi">Hindhi</option>
                  <option value="Marathi">Marathi</option>
                </select>
                </div></div>
          </div>
          
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FullStack