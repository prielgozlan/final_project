import React from 'react'
import { FaCamera } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";


import "../Css_for_comp/profile1.css"
const Profile1 = () => {
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
                <h2>priel gozlan</h2>
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
                <p>:שם פרטי</p>
                <p>:שם משפחה</p>
                <p>:מצב משפחתי</p>
                <p>:מקום מגורים</p>
                
            </div>

        </div>






    </div>
  )
}

export default Profile1