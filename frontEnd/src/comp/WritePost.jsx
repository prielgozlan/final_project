import React from 'react'
import "../Css_for_comp/WritePost.css"
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
const WritePost = ({ hendlePost2 , setNewPost}) => {

    const apiUrl = import.meta.env.VITE_API_URL;


const navigate = useNavigate()
    const textPost = useRef()
    const exit =()=>{
        hendlePost2()
    }
    const changeSrate = async () => {
        console.log(apiUrl);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

        const raw = JSON.stringify({
            content: textPost.current.value,
            
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        try {
            
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/posts`,
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            if (data) {
                console.log(data);
                alert("נשמר הפוסט בהצלחה")
                setNewPost(true)
                hendlePost2()
                navigate("/");
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`שגיאה בשליחת הפוסט ${error.message}`);
        }




    }

    return (
        <div className='box_body_w'>
            <div className='box_w_1'>
                <div className='box_w_2 row'>

                    <div className='col-10'>
                        <h2>כתיבת פוסט חדש</h2>
                    </div>
                    <div className='col-2'>
                        <button onClick={exit}>X</button>
                    </div>
                    <br />
                    <div>
                    <textarea ref={textPost} type="text" className='box_w_3' placeholder='כתוב פוסט כאן'></textarea>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                    <button onClick={changeSrate}>שליחה</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WritePost