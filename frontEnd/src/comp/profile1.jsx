import React from 'react'
import { FaCamera } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import {jwtDecode} from 'jwt-decode'
import { useState , useEffect } from 'react'


import "../Css_for_comp/profile1.css"
const Profile1 = () => {

    const token = localStorage.getItem('token')
    const [userName,setuserName] = useState("שם משתמש")
      
  
    useEffect(() => {
      if (token) 
        {setuserName(jwtDecode(token).user.name)
        
        }
      else{setuserName("שם משתמש")}
  
  
    }, [token]);






  return (
    <div className='container'>
        <div className='box_p_1'>
          <button>עריכת תמונת רקיע <FaCamera/></button>      
        </div>
        <div className='row'>
            
            <div className='col-2 box_p_2'>
                <img src=''/>
            </div>
            <div className='col-3 box_p_3'>
                <h2>{userName}</h2>
            </div>
            <div className='col-7 box_p_4'>
                <button>עריכת פרופיל <MdOutlineSettings/></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-1 box_p_5'>
                <a href='#'>תמונות</a>
            </div>
            <div className='col-1 box_p_5'>
                <a href='#'>פוסטים</a>
            </div>
            <div className='col-1 box_p_5'>
                <a href='#'>חברים</a>
            </div>
            {/* <div className='col-1 box_p_5'>
                <a href='#'>אודות</a>
            </div> */}
        </div>
        <div className='row'>
            <div className='col-7 box_p_7'>
                
            </div>
            <div className='col-4 box_p_6'>
                <h2>אודות</h2>
                <br/>
                <h5>{userName}</h5>
                <br/>
                <h5>:מצב משפחתי</h5>
                <br/>
                <h5>:מקום מגורים</h5>
                
            </div>

        </div>






    </div>
  )
}

export default Profile1