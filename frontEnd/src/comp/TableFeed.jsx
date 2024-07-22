import React from 'react'
import "../Css_for_comp/TableFeed.css"
import { AiFillLike} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import rootUrl from '../config/urlConfig'

const TableFeed = ({setTokem , pros}) => {

    const [userImg, setuserImg] = useState("profile1.png")
    const [like1, setLike1] = useState(0)
    const [like2, setLike2] = useState(0)
    const [like3, setLike3] = useState(0)

const ImgFind = async()=>{
    
    try{
    const res = await fetch(`${rootUrl}/users/img/${pros.name}`)
    const data = await res.json();
    if(data.imguser){
        console.log(data);
        setuserImg(data.imguser);
    }
    else{
        setuserImg("profile1.png")
    }
}
    catch(error){
        console.error(error)
    }

}

const newfrinds = async()=>{
    console.log({...pros});
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

    const raw = JSON.stringify({
        ...pros
        
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    try {
        const res = await fetch(
            `${rootUrl}/users/addFrind`,
            requestOptions
        );
        const data = await res.json();
        console.log(data);
        if (data) {
            alert(data)
        
        }
    } catch (error) {
        console.error("Error:", error);
        alert(`שגיאה בשליחת הפוסט ${error.message}`);
    }


}
useEffect(() => {
    ImgFind()
 }, [pros._id]
)
useEffect(() => {
    likes("like1")
    likes("like2")
    likes("like3")

 }, []
)
const likes = async(typeLike)=>{
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({ postId: pros._id, typeLike })        }

        try {
            const res = await fetch(
                `${rootUrl}/posts/idPost/likes`,
                
                requestOptions
            );
            const data = await res.json();
            
            if (data) {
                console.log(data);
                if(typeLike === "like1"){
                    setLike1(data)
                }
                else if(typeLike === "like2"){
                    setLike2(data)
                }
                else if(typeLike === "like3"){
                    setLike3(data)
                }
                 


            }
            window.location.reload();
        } catch (error) {
            console.error("Error:", error);
            alert(`שגיאה בשליחת הפוסט ${error.message}`);
        }


}

// const sandLike = async(like)=>{
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");    

//     const raw = JSON.stringify({
//         idPostw: pros._id,
//         name:pros.name,
//         likes:like

        
//     });

//     const requestOptions = {
        


//         method: "PUT",
//         headers: myHeaders,
//         body: raw
//     };

//     try {
//         const res = await fetch(
//             `${rootUrl}/posts/idPost/likes`,
//             requestOptions
//         );
//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         const data = await res.json();
//         console.log(data);
//         if (data) {
//         setSmiley(data.likes)
        
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         // alert(`שגיאה בשליחת הפוסט ${error.message}`);
//     }


// }


return (
        <div className='box_t_f'>
            <div className='box_t_f_1'>
                <div className='row'>
                    <div className='col-4 img1'>
                        {/* <img src={pros.img} /> */}
                        <img src={userImg}/>
                    </div>
                    <div className='col-5 mt-4'>
                        <h4>{pros.name}</h4>
                        <p>{pros.createdAt}</p>
                    </div>
                    <div className='col-3 box_t_f_b'>
                    {setTokem.istoken ? <button onClick={newfrinds}> הצעת חברות</button>:null}
                    </div>
                </div>
                <p>{pros.content}</p>
                <div className='row'>
                <div className='box_icon col-2'>
                    <button onClick={()=>{likes("like1")}}><FcLike/></button>
                    <p>{like1}</p>
                </div>
                <div className='box_icon col-2'>
                    <button onClick={()=>{likes("like2")}}><AiFillLike/></button>
                    <p>{like2}</p>
                </div>
                <div className='box_icon col-2'>
                    <button onClick={()=>{likes("like3")}}><FaRegFaceKissWinkHeart/></button>
                    <p>{like3}</p>
                </div>
                </div>

            </div>
            
            </div>






        
    )
}

export default TableFeed