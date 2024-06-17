import React from 'react'
import '../Css_for_comp/LogUp.css'
const LogUp = () => {
  return (
    <div className='box_lu_3'>
    <div className='box_lu_1'>
        <h2>הרשמה</h2>
        <form>
        <div className='box_lu_2'>
            <input type="text" placeholder='שם משתמש'/>
        </div>
        <div className='box_lu_2'>
            <input type="text" placeholder='אימייל'/>
        </div>
        <div className='box_lu_2'>
            <input type="text" placeholder='סיסמא'/>
        </div>
        <div className='box_lu_2'>
            <input type="text" placeholder='הקש סיסמא שוב'/>
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