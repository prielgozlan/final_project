import React from 'react'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import "../Css_for_comp/EditPost.css"


const EditPost = ({ hendlePost2 , setNewPost ,props}) => {
   
    const navigate = useNavigate()
    const textPost = useRef()
    const exit =()=>{
        hendlePost2()
    }
    const postUpdate = async () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

        const raw = JSON.stringify({
            content: textPost.current.value,
            
            
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
        };
        
        try {
            const res = await fetch(
                `http://localhost:3000/posts/${props._id}`,
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            if (data) {
                console.log(data);
                alert("נשמר הפוסט בהצלחה")
                setNewPost(true)
                hendlePost2()
                // navigate("/");
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`שגיאה בשליחת הפוסט ${error.message}`);
        }



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
                    <textarea  type="text" ref={textPost} className='box_E_3' placeholder='כתוב פוסט כאן'></textarea>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                    <button onClick={postUpdate}>שליחה</button>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default EditPost