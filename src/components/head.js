import { useState , useEffect } from "react";
 import { FaSortDown ,FaSortUp } from "react-icons/fa";
 
 const Head = ({columns ,handleSort,handleFilter}) => {
  
  const [order, setOrder] = useState("asc");


     
  
      const handleChangeOrder=()=>{
        if(order==="asc") setOrder("desc")
        if(order==="desc") setOrder("asc")
      }


   return (
     <>
     
     <thead>
       <tr>
     

      {
              columns.map((el,idx)=>(
              
     <th key={idx}
               
              >
                
      { order==="asc"? <FaSortDown 
      
      onClick={()=>handleSort(el,order)} 
      style={{fontSize:'30px', color:'white' ,background: '#467e8d '}}  />
       :<FaSortUp  onClick={()=>handleSort(el,order)}
       
       style={{fontSize:'30px', color:'white' ,background: '#467e8d '}}  />      
              
    }
     {el}<input  type='text' onChange={(e)=>handleFilter(el,e.target.value)}   /></th>



     ))
          }     
  
          </tr>
        </thead>
     
     
     </>
   )
 }
 
 export default Head