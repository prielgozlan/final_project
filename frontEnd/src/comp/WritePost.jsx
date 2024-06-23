import React from 'react'
import "../Css_for_comp/WritePost.css"
import { useRef } from 'react';
const WritePost = ({hendlePost2}) => {
    const textPost = useRef()
        const changeSrate = async()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            token:localStorage.getItem("token"),
            text:textPost.current.value,
            date:Date.now()
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        try {
            const res = await fetch(
                "http://localhost:3000/posts",
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            if (data) {
                alert("נשמר הפוסט בהצלחה")
                navigate("/");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("שגיאה בשליחת הפוסט")
        }
    
    
        hendlePost2()

    }

  return (
    <div className='box_body_w'>
    <div className='box_w_1'>
    <div className='box_w_2'>
        <h2>כתיבת פוסט חדש</h2>
        <br />
        <textarea ref={textPost} type="text" className='box_w_3' placeholder='כתוב פוסט כאן'></textarea>
        <br/>
        <br/>
        <br/>
        <button onClick={changeSrate}>שליחה</button>
        
    </div>
    </div>
    </div>
  )
}

export default WritePost