import React from 'react'
import "../Css_for_comp/TableFeed.css"
import { AiFillLike } from "react-icons/ai";
import { useState, useEffect } from 'react'
import { FcLike } from "react-icons/fc";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import WritePost from './WritePost';
import EditPost from './EditPost';


const Posts = ({ props }) => {
    const token = localStorage.getItem("token");
    const [Post, setPost] = useState(true)
    const [istoken, setistoken] = useState(token)
    const [newPost, setNewPost] = useState(false)


    const hendlePost = () => {
        setPost(false)
    }
    const hendlePost2 = () => {

        setPost(true)
    }


    const deletePost = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);



        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,

        };

        try {
            const res = await fetch(
                `http://localhost:3000/posts/${props._id}`,
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            if (data) {
                console.log(data);
                alert(data)

            }
        } catch (error) {
            console.error("Error:", error);
            alert(`שגיאה בשליחת הפוסט ${error.message}`);
        }

    }





    return (
        <div className='box_t_f'>
            <div className='box_t_f_1'>
                <div className='row'>
                    <div className='col-3 img1'>
                        <img src="profile1.png" />
                    </div>
                    <div className='col-4 mt-4'>
                        <h4>{props.name}</h4>
                        <p>{props.createdAt}</p>
                    </div>
                    <div className='col-5 box_t_f_b'>
                        <button onClick={deletePost}>מחיקת פוסט</button>
                        {istoken ?
                            !Post ? (<EditPost hendlePost2={hendlePost2} setNewPost={setNewPost} props={props} />) :
                                (<button onClick={hendlePost}>  עריכה פוסט</button>) : null}
                
                    </div>
                </div>
                <p>{props.content}</p>
                <div className='row'>
                    <div className='box_icon col-2'>
                        <button><FcLike /></button>
                        <p>0</p>
                    </div>
                    <div className='box_icon col-2'>
                        <button><AiFillLike /></button>
                        <p>0</p>
                    </div>
                    <div className='box_icon col-2'>
                        <button><FaRegFaceKissWinkHeart /></button>
                        <p>0</p>
                    </div>
                </div>


            </div>
            




                            
                            
        </div>
    )
}

export default Posts