import React from 'react'
import { FaCamera } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { jwtDecode } from 'jwt-decode'
import { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';


import "../Css_for_comp/profile1.css"

import Posts from './Posts';
import Frinds from './Frinds';
import Photos from './Photos';

const Profile1 = () => {

    const token = localStorage.getItem('token')

    const [userName, setuserName] = useState(false)
    const [userCity, setuserCity] = useState(false)
    const [userType, setuserType] = useState(false)
    const [frindList, setFrindsList] = useState([])
    const [postsList, setPostsList] = useState([])




    const [Posts2, setPosts] = useState(false)
    const [Frinds2, setFrinds] = useState(false)
    const [Photos2, setPhotos2] = useState(false)

    const posrs1 = () => {
        setPosts(true)
        setFrinds(false)
        setPhotos2(false)
        myPost()
    }
    const frinds1 = () => {
        setPosts(false)
        setFrinds(true)
        setPhotos2(false)
        myFrinds()
    }
    const photos1 = () => {
        setPhotos2(true)
        setPosts(false)
        setFrinds(false)
    }

    useEffect(() => {
        if (token) {
            setuserName(jwtDecode(token).user.name)
            setuserCity(jwtDecode(token).user.address)
            setuserType(jwtDecode(token).user.Marital_Status)

        }
        else {
            setuserName("שם משתמש")
            , setuserType("סטטוס")
            setuserCity("שם עיר")
        }


    }, [token]);

    const myFrinds = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,

        };

        try {
            const res = await fetch(
                "http://localhost:3000/users/getfraind",
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            if (data) {
                setFrindsList(data);
                console.log(data);

            }
        } catch (error) {
            console.error("Error:", error);
            alert(`שגיאה בשליחת הפוסט ${error.message}`);
        }


    }



    const myPost = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,

        };

        try {
            const res = await fetch(
                "http://localhost:3000/posts/idget",
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            if (data) {
                setPostsList(data);
                console.log(data);

            }
        } catch (error) {
            console.error("Error:", error);
            alert(`שגיאה בשליחת הפוסט ${error.message}`);
        }

    }


    const [file, setFile] = useState(null);

  
    // פונקציה לטיפול בקבלת קבצים בגרירה ושחרור
    const onDrop = (acceptedFiles) => {
      // שמירת הקובץ שנבחר במצב
      setFile(acceptedFiles[0]);
      console.log(file);
      handleClick()
    };
  
    // שימוש ב-hook של react-dropzone לטיפול בגרירה ושחרור
    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    const handleClick = async () => {
    
        // יצירת אובייקט FormData והוספת הקובץ אליו
        const formData = new FormData();
        formData.append('file', file);
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);
    

        try {
          // שליחת בקשת POST לשרת עם הקובץ
          const response = await fetch('http://localhost:3000/users/upload', {
            method: 'POST',
            body: formData,
            headers: myHeaders
          });
          // קבלת תגובת השרת והצגת ה-URL של הקובץ שהועלה
          const data = await response.json();
          alert(data)
        } catch (error) {
          // טיפול בשגיאות
          console.error('Error uploading file:', error);
        }
      };
  




    return (
        <div className='container'>
            <div className='box_p_1'>
                <img className='box_img' src='backgraond.jpeg' />
                <button>עריכת תמונת רקיע <FaCamera /></button>
            </div>
            <div className='row'>

                <div className='col-2 box_p_2'>
                    <img src='profile1.png' />
                </div>
                <div className='col-8 box_p_3'>
                    <h2>{userName}</h2>
                </div>
                <div className='col-2 box_p_4'>
                    {/* <button>עריכת פרופיל <MdOutlineSettings/></button> */}
                    <div {...getRootProps({ className: 'dropzone1' })}>
                        <button {...getInputProps()}></button>
                        עריכת פרופיל <MdOutlineSettings />
                    </div>
            </div>
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-1 box_p_5'>
                    <button onClick={photos1}>תמונות</button>
                </div>
                <div className='col-1 box_p_5'>
                    <button onClick={posrs1} >פוסטים</button>
                </div>
                <div className='col-1 box_p_5'>
                    <button onClick={frinds1}>חברים</button>
                </div>

            </div>
            <div className='row'>
                <div className='col-7 box_p_7'>

                    {token ? Posts2 ? postsList.map((props) => <Posts props={props} />) : null : null}
                    {token ? Frinds2 ? frindList.map((props) => <Frinds props={props} />) : null : null}
                    {token ? Photos2 ? <Photos /> : null : null}




                </div>
                <div className='col-4 box_p_6'>
                    <h2>אודות</h2>
                    <br />
                    <h5>{userName}</h5>
                    <br />
                    <h5>{userType}</h5>
                    <br />
                    <h5>{userCity}</h5>

                </div>

            </div>






        </div>
    )
}

export default Profile1