import React from 'react'
import '../Css_for_comp/Header.css'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Outlet, Link } from 'react-router-dom'

const Header = ({props}) => {

  const removeLocal = () =>{
    
    localStorage.removeItem('token')
    props.setIsAuthenticated(false)
    alert("התנתקות הצליחה")
}


  return (
    <>
    <div className='box_body'>
    <div className='container box_b'>
      <div className='row'>
        <div className='col-3'>
          <Link to='feed'>
            <img src="Logo.png" className='' />
          </Link>
        </div>

        <div className='col-4 box2'>
          <Link to='feed' className='box2'><FaHome /></Link>


          <Link to="Profile" className='box2'><CgProfile /></Link>
          <Link to="Profile" className='box2'><FaUserFriends /></Link>


        </div>
        <div className='col-4 box row'>
          <div className='col-6'>
          <input type="text" placeholder="Search" />
          </div>
          <div className='col-6 box3'>
            
            {!props.isAuthenticated?  
              (<Link to="login" ><button>התחברות</button></Link>) :
              (<button onClick={removeLocal}>התנתקות</button>)
            }
          </div>
        </div>
        
      </div>
    </div>
    </div>
      <Outlet/>
    </>

  )
}

export default Header