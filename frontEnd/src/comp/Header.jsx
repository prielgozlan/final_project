import React, { useRef, useState } from 'react'
import '../Css_for_comp/Header.css'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Outlet, Link } from 'react-router-dom'
import Search from './Search';

const Header = ({ props }) => {
  const token = localStorage.getItem('token')
  const searchName = useRef()
  const [search, setSearch] = useState("")
  const [search1, setSearch1] = useState(false)

  const removeLocal = () => {

    localStorage.removeItem('token')
    props.setIsAuthenticated(false)
    alert("התנתקות הצליחה")
  }
  const Search1 = async () => {
    // setSearch1(true)
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

    // const raw = JSON.stringify({
    //   content: searchName.current.value,

    // });

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    // };

    try {
      const res = await fetch(
        `http://localhost:3000/users/search`
        // ,requestOptions
      );
      const data = await res.json();
      if (data) {
        const filter = data.filter(listUser => listUser.name.toLowerCase().startsWith(searchName.current.value.toLowerCase()))
        // console.log(filter); 
        setSearch(filter)
        setSearch1(true)
        if (filter.length == data.length){
          setSearch1(false)
          console.log(filter);
          console.log(data);

        }
      }
      
    } catch (error) {
      console.error("Error:", error);
      alert(`שגיאה בשליחת הפוסט ${error.message}`);
    }

  }


  return (
    <>
      <div className='box_body'>
        <div className='container box_b'>
          <div className='row'>
            <div className='col-3'>
              <Link to='feed'>
                <img src="Logo.png" className='' />
              </Link>
            </div>

            <div className='col-4 box2'>
              <Link to='feed' className='box2'><FaHome /></Link>


              <Link to="Profile" className='box2'><CgProfile /></Link>
              <Link to="Profile" className='box2'><FaUserFriends /></Link>


            </div>
            <div className='col-4 box row'>
              <div className='col-6'>

                <input type="text" ref={searchName} placeholder="Search" onChange={Search1} />


              </div>
              <div className='col-6 box3'>

                {!props.isAuthenticated ?
                  (<Link to="login"><button>התחברות</button></Link>) :
                  (<button onClick={removeLocal}>התנתקות</button>)
                }
              </div>
            </div>

          </div>
        </div>   
      </div>
      {search1?search.map((props)=> <Search props={props}/> ):null}






      
      <Outlet />
    </>

  )
}

export default Header