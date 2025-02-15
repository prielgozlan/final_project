import { useState, useEffect } from 'react'
import '../Css_for_comp/Feed.css'
import TableFeed from './TableFeed'
import { FaPlus } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode'
import { Link } from "react-router-dom"
import WritePost from './WritePost';
import rootUrl from '../config/urlConfig'

const Feed = () => {
  const token = localStorage.getItem('token')
  const [userName, setuserName] = useState("שם משתמש")
  const [userImg, setuserImg] = useState("profile1.png")
  const [Post, setPost] = useState(true)
  const [postsList, setPostsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [istoken, setistoken] = useState(token)
  const [newPost, setNewPost] = useState(false)
  const setTokem = { istoken, setistoken }

  const hendlePost = () => {
    setPost(false)
  }
  const hendlePost2 = () => {

    setPost(true)
  }


  const postAll = () => {
    setIsLoading(true)
    fetch(`${rootUrl}/posts`)
      .then(res => res.json())
      .then((data) => {
        setPostsList(data)
        setIsLoading(false)
        // console.log(data);
        if (!data) {
          setIsLoading(false)
          alert("אין פוסטים")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(`שגיאה בשליחת הפו��ט ${error.message}`);
      }
      )
  }


  useEffect(() => {
    if (token) {
      setuserName(jwtDecode(token).user.name);
      
      if(jwtDecode(token).user.imguser){
      setuserImg(jwtDecode(token).user.imguser);}
    }
    else { setuserName("שם משתמש")
     }

    setistoken(token)
  }, [token]);

  useEffect(() => {
    postAll()
    setNewPost(false)
  }, [newPost])
  
  return (

    <div className='container'>
      <div className='row'>
        <div className='col-3 box_f_1'>
          <div className='box_f1'></div>

          <div className='box_f2'>
            
            <img src={userImg} />
            <div>
              <h5>{userName}</h5>
            </div>
          </div>
          <div className='box_f_6'>
            <div >
              <Link to={"../Profile?active=friends"}>חברים</Link>
            </div>
            <div>
              <Link to={"../Profile?active=images"}>תמונות</Link>
            </div>
            <div>
              <Link to={"../Profile?active=posts"}>פוסטים</Link>
            </div>
          </div>




        </div>
        <div className='col-6 box_f_2'>

          <div className='box_f_3'>
            {istoken ?
              !Post ? (<WritePost hendlePost2={hendlePost2} setNewPost={setNewPost}/>) :
                (<button onClick={hendlePost}><FaPlus /> פוסט חדש</button>) : null}


          </div>
        
          <div>
            {isLoading?"loading"
            :postsList.map((pros)=><TableFeed setTokem={setTokem} pros={pros}/>)}
          </div>

        </div>

        <div className='col-2 box_f3'>
          <a href='https://mego.org.il/' target="_blank"><img src='mego.jpg' /></a>

        </div>

      </div>

            
    </div>
  )
}

export default Feed