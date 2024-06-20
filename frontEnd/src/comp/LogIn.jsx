import React, { useState } from 'react'
import '../Css_for_comp/LogIn.css'
import { Link } from 'react-router-dom'
const LogIn = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username,
      password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    const res = await fetch("http://localhost:3000/api/auth/login", requestOptions)
    const data = await res.json()
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token)});
    



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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
