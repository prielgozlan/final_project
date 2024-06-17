import React from 'react'
import '../Css_for_comp/LogIn.css'
import { Link } from 'react-router-dom'
const LogIn = () => {





  
    return (
      <div className='box_l_3'>
        <div className='box_l_1'>
          <h2>כניסה</h2>
          <form>
            <div className='box_l_2'>
              <input
                type="text"
                placeholder="שם משתמש"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='box_l_2'>
              <input
                type="password"
                placeholder="סיסמא"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
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
