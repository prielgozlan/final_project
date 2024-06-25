import React from 'react'
import "../Css_for_comp/Frinds.css"
const Frinds = ({props}) => {
  return (
    <div className='box_f_b'>
                <div className='row box_f_b_1'>
                    <div className='col-3 img1'>
                        <img src="" />
                    </div>
                    <div className='col-4 mt-4'>
                        <h4>{props.name}</h4>
                    
                    </div>
                    <div className='col-5 box_t_f_b'>
                        <button>ביטול חברות</button>
                        
                    </div>
                </div>
                </div>
  )
}

export default Frinds