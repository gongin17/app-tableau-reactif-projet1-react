import React ,  { useState, useEffect } from "react"
import axios from 'axios'
import {useNavigate}   from 'react-router-dom'
import { useParams } from "react-router-dom";


const UpdateUser = () => {
   
  

   const [user,setUser]=useState([])
   const [dateexamen,setDateexamen]=useState('')
   
  const params = useParams();
  const navigate = useNavigate();

 const updatedUserData={...user,dateexamen}
 console.log(updatedUserData);

  useEffect(() => {
    axios.get("http://localhosT:8000/",params.uId)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log(updatedUserData);
     await axios.put(`http://localhost:8000/users/${params.uId}`,updatedUserData)
     .then((res)=>{
      console.log("resposne :",res)
       
    })
     .catch((err)=>console.log(err))
     navigate('/')

  };




  return (
    <div><div className="update-form">
    <h2> Changer la date d'examen</h2>
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Nouvelle Date</label>
        <input
          type="date"
          name="dateexamen"
          value={dateexamen}
          onChange={(e)=>setDateexamen(e.target.value)}
        />
      </div>
     
      <button type="submit">Mettre a jour  </button>
    </form>
  </div></div>
  )
}

export default UpdateUser