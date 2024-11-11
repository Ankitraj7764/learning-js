curd.jsx


import React, { useState } from 'react'
let arr=[]
function Curd() {
    const [userData,setUserData]=useState({
        name:"",
        email:"",
        pin:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        userData.id=new Date().toDateString();
       arr.push(userData)
       console.log(arr);
       
       setUserData(
        {
            name:"",
            email:"",
            pin:""
        }
       )
    }

    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const handleDelete=(id)=>{
        console.log(arr.filter((i)=>i.id!=id));
        arr=arr.filter((i)=>i.id!=id)
        console.log(arr);
        

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='enter name' type="text"  onChange={handleChange} value={userData.name}  name='name'/>
        <input placeholder='enter email' type="text"  onChange={handleChange} value={userData.email}  name='email'/>
        <input placeholder='enter pincode' type="text" onChange={handleChange} value={userData.pin} name='pin'/>
        <button >submit</button>
         <div style={{display:'flex',width:'full', backgroundColor:"gray",justifyContent:'space-around'}}>
              <h2>Name</h2>
              <h2>Email</h2>
              <h2>Pin code</h2>
         </div>
        {
            arr && arr.length>0 && (
                arr.map((i)=>{
                    return <>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <p>{i.name}</p>
                        <p>{i.email}</p>
                        <p>{i.pin}</p>
                        <button onClick={()=>handleDelete(i.id)}>Delete</button>
                        <button onClick={()=>handleDelete(i.id)}>Edit</button>
                    </div>
                    </>
                })
            )
        }
      </form>
    </div>
  )
}

export default Curd
