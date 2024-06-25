import React from 'react'
import "../Css_for_comp/TableFeed.css"
import { AiFillLike} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";


const TableFeed = ({setTokem , pros}) => {

const newfrinds = async()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);

    const raw = JSON.stringify({
        content: pros
        
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    try {
        const res = await fetch(
            "http://localhost:3000/users/addFrinds",
            requestOptions
        );
        const data = await res.json();
        console.log(data);
        if (data) {
            alert("חברות הצליחה")
        
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
                    <div className='col-4 img1'>
                        <img src={pros.img} />
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

export default TableFeed