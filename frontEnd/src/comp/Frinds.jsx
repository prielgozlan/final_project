import React from 'react'
import "../Css_for_comp/Frinds.css"
const Frinds = ({props}) => {

    const deleteFrind = async()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", `${localStorage.getItem("token")}`);
    
        
    
        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            
        };
    
        try {
            const res = await fetch(
                `http://localhost:3000/users/${props._id}`,
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
    <div className='box_f_b'>
                <div className='row box_f_b_1'>
                    <div className='col-3 img1'>
                        <img src="profile1.png" />
                    </div>
                    <div className='col-4 mt-4'>
                        <h4>{props.name}</h4>
                    
                    </div>
                    <div className='col-5 box_t_f_b'>
                        <button onClick={deleteFrind}>ביטול חברות</button>
                        
                    </div>
                </div>
                </div>
  )
}

export default Frinds