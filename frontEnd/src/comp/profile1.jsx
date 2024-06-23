import React from 'react'
import { FaCamera } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import {jwtDecode} from 'jwt-decode'
import { useState , useEffect } from 'react'


import "../Css_for_comp/profile1.css"

import Posts from './Posts';
import Frinds from './Frinds';
import Photos from './Photos';

const Profile1 = () => {

    const token = localStorage.getItem('token')

    const [userName,setuserName] = useState(false)
    const [Posts2,setPosts] = useState(false)
    const [Frinds2,setFrinds] = useState(false)
    const [Photos2,setPhotos2] = useState(false)

    const posrs1 = ()=>{
        setPosts(true)
        setFrinds(false)
        setPhotos2(false)
    }
    const frinds1 = ()=>{
        setPosts(false)
        setFrinds(true)
        setPhotos2(false)
    }
    const photos1 = ()=>{
        setPhotos2(true)
        setPosts(false)
        setFrinds(false)
    }
  
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
                <button onClick={photos1}>תמונות</button>
            </div>
            <div className='col-1 box_p_5'>
                <button onClick={posrs1}>פוסטים</button>
            </div>
            <div className='col-1 box_p_5'>
                <button onClick={frinds1}>חברים</button>
            </div>
        
        </div>
        <div className='row'>
            <div className='col-7 box_p_7'>
                {Posts2 ? <Posts/>:null}
                {Frinds2 ? <Frinds/>:null}
                {Photos2 ? <Photos/>:null}
                
                
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