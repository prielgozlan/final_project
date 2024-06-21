import React from 'react'
import '../Css_for_comp/Feed.css'
import TableFeed from './TableFeed'
import { FaPlus } from "react-icons/fa";

const Feed = () => {
  return (
    
    <div className='container'>
      <div className='row'>
        <div className='col-3 box_f_1'>
          <div className='box_f1'></div>

          <div className='box_f2'>
            <img src="" />
            <div>
              <h5>priel gozlan</h5>
            </div>
          </div>
          <div className='box_f3'>
            <div >
              <a href="#">חברים</a>
            </div>
            <div>
              <a href="#">תמונות</a>
            </div>
            <div>
              <a href="#">פוסטים</a>
            </div>
          </div>




        </div>
        <div className='col-6 box_f_2'>

          <div className='box_f_3'>
            <button><FaPlus /> פוסט חדש</button>
          </div>

          <div>
            <TableFeed />
          </div>

        </div>

        <div className='col-2 box_f3'>
        <img src='mego.jpg'/>

        </div>

      </div>

    </div>
  )
}

export default Feed