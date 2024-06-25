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
    const [userCity,setuserCity] = useState(false)
    const [userType,setuserType] = useState(false)
    const [PostsList,setPostsList] = useState([])




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
        setuserCity(jwtDecode(token).user.address)
        setuserType(jwtDecode(token).user.Marital_Status)
        
        }
      else{setuserName("שם משתמש")
           ,setuserType("סטטוס")
           setuserCity("שם עיר")}
  
    
    }, [token]);

    const myPost = async() => {
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

    // const raw = JSON.stringify({
    //     ...pros
        
    // });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        // body: raw,
    };

    try {
        const res = await fetch(
            "http://localhost:3000/users/addFrind",
            requestOptions
        );
        const data = await res.json();
        console.log(data);
        if (data) {
            setPostsList(data);
        
        }
    } catch (error) {
        console.error("Error:", error);
        alert(`שגיאה בשליחת הפוסט ${error.message}`);
    }


      }
      const myFrinds = () => {
        

      }
    
    






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
                <button onClick={{posrs1,myPost}} >פוסטים</button>
            </div>
            <div className='col-1 box_p_5'>
                <button onClick={{frinds1,myFrinds}}>חברים</button>
            </div>
        
        </div>
        <div className='row'>
            <div className='col-7 box_p_7'>
            
            {token? Posts2 ? PostsList.map((props)=><Posts props={props}/>):null:null}
            {token? Posts2 ? PostsList.map((props)=><Frinds props={props}/>):null:null}
            {token? Photos2 ? <Photos/>:null:null}
                
                
            
                
            </div>
            <div className='col-4 box_p_6'>
                <h2>אודות</h2>
                <br/>
                <h5>{userName}</h5>
                <br/>
                <h5>{userType}</h5>
                <br/>
                <h5>{userCity}</h5>
                
            </div>

        </div>






    </div>
  )
}

export default Profile1