import React from 'react'
import "../Css_for_comp/TableFeed.css"
import { AiFillLike} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";


const Posts = ({props}) => {






  return (
    <div className='box_t_f'>
            <div className='box_t_f_1'>
                <div className='row'>
                    <div className='col-3 img1'>
                        <img src="" />
                    </div>
                    <div className='col-4 mt-4'>
                        <h4>{props.name}</h4>
                        <p>{props.createdAt}</p>
                    </div>
                    <div className='col-5 box_t_f_b'>
                        <button>מחיקת פוסט</button>
                        <button>עריכה פוסט</button>
                    </div>
                </div>
                <p>{props.content}</p>
                <div className='row'>
                <div className='box_icon col-2'>
                    <button><FcLike/></button>
                    <p>0</p>
                </div>
                <div className='box_icon col-2'>
                    <button><AiFillLike/></button>
                    <p>0</p>
                </div>
                <div className='box_icon col-2'>
                    <button><FaRegFaceKissWinkHeart/></button>
                    <p>0</p>
                </div>
                </div>

           
            </div>






        </div>
  )
}

export default Posts