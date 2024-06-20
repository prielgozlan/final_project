import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './comp/Header'
import Profile1 from './comp/profile1'
import Feed from './comp/Feed'
import LogIn from './comp/LogIn'
import LogUp from './comp/LogUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token')==null)
  const props ={isAuthenticated, setIsAuthenticated}

  return (
    <div>

      {/* <LogUp/> */}
      {/* <LogIn/> */}
      {/* <Profile1/> */}
      {/* <Feed/> */}
      <Router>
        <Header props={props}/>
        <Routes>
          {/* <Route path='/' element={<Header/>}> */}
          <Route path='/' element={<Feed />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/Profile' element={<Profile1 />} />
          <Route path='/login' element={<LogIn props={props} />}  />
          <Route path='/logup' element={<LogUp props={props}/>} />
          {/* </Route> */}
        </Routes>
      </Router>



    </div>
  )
}

export default App
