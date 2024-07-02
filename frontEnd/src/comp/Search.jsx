import React from 'react'
import "../Css_for_comp/Search.css"

const Search = ({props}) => {
    return (
        <div className='box_body_s'>
            {/* <div className='box_s'> */}
                <div className='row box_s'>
                    <div className='col-3 img1'>
                        <img src="profile1.png" />
                    </div>
                    <div className='col-4 mt-4'>
                        
                        <h4>{props.name}</h4>

                    </div>
                    <div className='col-5 box_t_f_b'>
                        {/* <button onClick={deleteFrind}>ביטול חברות</button> */}
                        <button>הצעת חברות</button>

                    </div>
                </div>
            {/* </div> */}
        </div>
            )
}

            export default Search