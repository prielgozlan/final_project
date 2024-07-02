import React from 'react'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import "../Css_for_comp/EditPost.css"

const EditPost = ({ hendlePost2 , setNewPost}) => {
    const exit =()=>{
        hendlePost2()
    }
    
  return (
    <div className='box_body_E'>
            <div className='box_E_1'>
                <div className='row box_E_2'>

                    <div className='col-10'>
                        <h2>עריכת פוסט חדש</h2>
                    </div>
                    <div className='col-2'>
                        <button onClick={exit}>X</button>
                    </div>
                    <br />
                    <div>
                    <textarea  type="text" className='box_E_3' placeholder='כתוב פוסט כאן'></textarea>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                    <button >שליחה</button>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default EditPost