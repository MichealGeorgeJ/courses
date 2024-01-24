import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllCourses from './Components/AllCourses'
import FullStack from './Components/FullStack'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import NavBar from './Components/NavBar'
import Career from './Components/Career'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AllCourses/>} />
        <Route path='/FullStack' element={<FullStack/>} />
        <Route path='/DataScience' element={<DataScience/>} />
        <Route path='/CyberSecurity' element={<CyberSecurity/>} />
        <Route path='/Career' element={<Career/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App