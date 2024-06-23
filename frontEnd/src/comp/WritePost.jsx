import React from 'react'
import "../Css_for_comp/WritePost.css"
import { useRef } from 'react';
const WritePost = ({ hendlePost2 }) => {
    const textPost = useRef()
    const exit =()=>{
        hendlePost2()
    }
    const changeSrate = async () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        const raw = JSON.stringify({
            text: textPost.current.value,
            date: Date.now()
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