import React, { useState } from 'react'
import '../Css_for_comp/LogIn.css'
import { Link, useNavigate } from 'react-router-dom'
const LogIn = ({props}) => {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      pass: password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    const res = await fetch("http://localhost:3000/users/login", requestOptions)
    const data = await res.json()
    console.log(data);
    if (data.token){
      localStorage.setItem("token", data.token)
      console.log(props.setIsAuthenticated)
      props.setIsAuthenticated(true)
      navigate("/")
    }
    else(alert("שם או סיסמא לא נכונים כתוב שוב בבקשה"))
  }
  return (
    <div className='box_l_3'>
      <div className='box_l_1'>
        <h2>כניסה</h2>
        <form onSubmit={handleLogin}>
          <div className='box_l_2'>
            <input
              type="text"
              placeholder="שם משתמש"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='box_l_2'>
            <input
              type="password"
              placeholder="סיסמא"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='box_l_2'>
            <button type="submit">התחברות</button>
          </div>
        </form>
        <br />
        <br />
        <br />
        <p><Link to="../logup">לחץ כאן</Link> - משתמש חדש</p>


        {/* V1 */}
        {/* <div className='box_l_3'>
    <div className='box_l_1'>
        <h2>כניסה</h2>
        <br />
        <br />
        <br />
        <div className='box_l_2'>
        <h4>:שם משתמש</h4>
        <input type="text" placeholder= "שם משתמש"/>
        </div>
        <div className='box_l_2'>
        <h4>:שם משתמש</h4> 
        <input type="text" placeholder= "סיסמא"/>
        </div>
        <div className='box_l_2'>
        <button>כניסה</button>
        </div>
        <br/>
        <br/>
        <br/>
        <p><Link to="../logup">לחץ כאן</Link> - משתמש חדש</p> */}









      </div>
    </div>
  )
}

export default LogIn
