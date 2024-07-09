import React from 'react'
import "../Css_for_comp/Search.css"
import { useNavigate } from 'react-router-dom';
const Search = ({props}) => {
    const navigate = useNavigate()


    const newfrinds = async()=>{
        console.log({...props});
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);
    
        const raw = JSON.stringify({
            ...props
            
        });
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };
    
        try {
            const res = await fetch(
                "https://naies.onrender.com/users/addFrind",
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            if (data) {
                alert(data)
                navigate("/")
            
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`שגיאה בשליחת הפוסט ${error.message}`);
        }
    
    
    }
    






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
                        <button onClick={newfrinds}>הצעת חברות</button>

                    </div>
                </div>
            {/* </div> */}
        </div>
            )
}

            export default Search