import React from 'react'
import logo from '../assets/Ds-1.jpeg'
const DataScience = () => {
  const courses=[
    {
      Title:"Machine Learning 101",
      Description:"81263 Enrolled",
      Duration:"3Hrs",
    },
    {
      Title:"Data Analytics Using Pandas",
      Description:"21263 Enrolled",
      Duration:"3Hrs",
    },
    {
      Title:"Data Engineering ",
      Description:"2126 Enrolled",
      Duration:"5Hrs",
    },
    {
      Title:"Bigdata",
      Description:"2126 Enrolled",
      Duration:"6Hrs",
    },
    {
      Title:"Datascience",
      Description:"5126 Enrolled",
      Duration:"10Hrs",
    },
    {
      Title:"R Programming",
      Description:"19126 Enrolled",
      Duration:"6Hrs",
    },
  ]
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-between">
        {
            courses.map((e,id)=>(
              <div className="col-lg-3 col-sm-6 mb-4 "key={id} >
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

export default DataScience