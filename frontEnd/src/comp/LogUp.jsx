import React from 'react'
import { useRef, useState } from "react"
import '../Css_for_comp/LogUp.css'
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const LogUp = ({props}) => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [pass, setPsaaword] = useState("")
    const [psaaword1, setPsaaword1] = useState("")
    const [email, setEmail] = useState("")
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordRef1 = useRef()



    const checkName = () => {
        if (nameRef.current.value.length < 2) {
            setName("אורך השם לפחות שני אותיות")
        } else {
            setName(<AiFillLike />)
            console.log("ok")
        }
    }
    const checkEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(emailRef.current.value)) {
            setEmail("איימיל לא תקין")
        }
        else {
            setEmail(<AiFillLike />)

        }
    }
    const checkPassword = () => {
        const re = /^(?=.*[א-ת])(?=.*\d)(?=.*[@$!%*?&])[א-ת\d@$!%*?&]{8,}$/;



        if (!re.test(passwordRef.current.value)) {
            setPsaaword("הסיסמא צריכה להכיל לפחות 8 תווים ,מתוכם לפחות ספרה אחד ותו מיוחד")
        } else {
            setPsaaword(<AiFillLike />)

        }

    }
    const checkPassword1 = () => {
        if (passwordRef.current.value != passwordRef1.current.value) {
            setPsaaword1("הסיסמאות אינן תואמות")
        } else {
            setPsaaword1(<AiFillLike />)

        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        // וודא שכל התנאים מתקיימים
        if (
            nameRef.current.value.length >= 2 &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value) &&
            /^(?=.*[א-ת])(?=.*\d)(?=.*[@$!%*?&])[א-ת\d@$!%*?&]{8,}$/.test(
                passwordRef.current.value
            ) &&
            passwordRef.current.value === passwordRef1.current.value
        ) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                name:nameRef.current.value,
                email:emailRef.current.value,
                pass:passwordRef.current.value
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
            };

            try {
                const res = await fetch(
                    "http://localhost:3000/users/logup",
                    requestOptions
                );
                const data = await res.json();
                console.log(data);
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    props.setIsAuthenticated(true)
                    navigate("/");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            alert("אחד או יותר מהשדות אינם תקינים. בדוק שנית את הפרטים שלך.");
        }
    };
    
 return (
        <div className='box_lu_3'>
            <div className='box_lu_1'>
                <h2>הרשמה</h2>
                <form onSubmit={handleLogin}>
                    <div className='box_lu_2'>
                        <input ref={nameRef} onChange={checkName} type="text" placeholder='שם משתמש מלא' />
                        <p>{name}</p>
                    </div>
                    <div className='box_lu_2'>
                        <input type="text" ref={emailRef} onChange={checkEmail} placeholder='אימייל' />
                        <p>{email}</p>
                    </div>
                    <div className='box_lu_2'>
                        <input type="text" ref={passwordRef} onChange={checkPassword} placeholder='סיסמא' />
                        <p>{pass}</p>
                    </div>
                    <div className='box_lu_2'>
                        <input type="text" ref={passwordRef1} onChange={checkPassword1} placeholder='הקש סיסמא שוב' />
                        <p>{psaaword1}</p>
                    </div>
                    <div className='box_lu_2'>
                        <button type='submit'>הירשם</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LogUp