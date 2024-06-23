import { useState,useEffect } from 'react'
import '../Css_for_comp/Feed.css'
import TableFeed from './TableFeed'
import { FaPlus } from "react-icons/fa";
import {jwtDecode} from 'jwt-decode'
import {Link} from "react-router-dom"
import WritePost from './WritePost';

const Feed = () => {
  const token = localStorage.getItem('token')
  const [userName,setuserName] = useState("שם משתמש")
  const [Post,setPost] = useState(true)
  const [istoken,setistoken] = useState(token)
  
  const hendlePost = ()=>{
    setPost(false)
  }
  const hendlePost2 = ()=>{

    setPost(true)
  }


    

  useEffect(() => {
    if (token) 
      {setuserName(jwtDecode(token).user.name);
      }
    else{setuserName("שם משתמש")}

    setistoken(token)
  }, [token]);



  return (
    
    <div className='container'>
      <div className='row'>
        <div className='col-3 box_f_1'>
          <div className='box_f1'></div>

          <div className='box_f2'>
            <img src="" />
            <div>
              <h5>{userName}</h5>
            </div>
          </div>
          <div className='box_f_6'>
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
            {/* <Link to='../writePost'><button onClick={hendlePost}><FaPlus /> פוסט חדש</button></Link> */}


            {istoken?
            !Post ? (<WritePost hendlePost2={hendlePost2}/>):
            (<button onClick={hendlePost}><FaPlus /> פוסט חדש</button>):null}
{/* 
            {!Post ? (<WritePost hendlePost2={hendlePost2}/>):
            (<button onClick={hendlePost}><FaPlus /> פוסט חדש</button>)} */}
            
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