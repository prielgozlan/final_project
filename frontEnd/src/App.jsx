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
import {jwtDecode} from 'jwt-decode'
import WritePost from './comp/WritePost'
import FileUpload from './comp/FileUpload '
import Search from './comp/Search'


function App() {
  const token = localStorage.getItem('token')
  const [isAuthenticated, setIsAuthenticated] = useState(token != null)


  const props = { isAuthenticated, setIsAuthenticated }

  return (
    <div>

      <Router>
        <Header props={props} />
        <Routes>
          {/* <Route path='/' element={<Header/>}> */}
          <Route path='/' element={<Feed />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/Profile' element={<Profile1 />} />
          <Route path='/login' element={<LogIn props={props} />} />
          <Route path='/logup' element={<LogUp props={props} />} />
          <Route path='/writePost' element={<WritePost/>} />
          <Route path='/search' element={<Search/>} />
          {/* </Route> */}
        </Routes>
      </Router>

      {/* <FileUpload/> */}

    </div>
  )
}

export default App
