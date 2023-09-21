import { useState , useEffect } from "react";
 import { FaSortDown ,FaSortUp } from "react-icons/fa";
 
 const Head = ({columns ,handleSort,selectKeyword,selectColumn,order}) => {
  
 


   return (
     <thead >
       <tr >
       <th ></th>

      {
              columns.map((el,idx)=>(
              
  <th key={idx}>
                
   { order==="asc" ? 

    <FaSortDown 
      onClick={()=>handleSort(el,order)} 
      style={{fontSize:'30px', color:'white' ,background: '#467e8d ' ,margin:"3px"}}  />
       :   
    <FaSortUp  
       onClick={()=>handleSort(el,order)}
       style={{fontSize:'30px', color:'white' ,background: '#467e8d '}}  />              
    }
     {el}

   <input  type='text' className="input-filter" 
     onChange={(e)=>{
      selectKeyword(e.target.value)
      selectColumn(el)
    }}/>
    
    </th>



     ))
          }     
         <th ></th>
          </tr>
        </thead>
     
    
   )
 }
 
 export default Head