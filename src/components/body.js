

import  React , { useState } from "react"
import { useNavigate } from "react-router-dom"
 import { FaPen } from "react-icons/fa"

const Body = ({data}) => {

        const [checked, setChecked]=useState(false)
  

        const navigate=useNavigate()
       
        const handleOnChange = () => {
          setChecked(!checked);
        };
  return (
    <>
           
      
           <tbody>
      
        {data?.map((user) => {
          return (
            <tr className="" key={user.id}>
              <td>
              <input  type='checkbox'   id=""
          name=""
          value=""
          checked={checked}
          onChange={handleOnChange}   />
              </td>

              <td>
              {user.id}
              </td>
              <td>{user.nom}</td>
              <td>{user.numero}</td>

              <td>{user.paiement}</td>
              <td>{user.dateexamen}</td>
              <td>
           {checked  ?<button  
                         style={{backgroundColor:"#467e8d"}}
           onClick={()=>navigate(`/condidats/${user.id}`) }><FaPen style={{fontSize:"25px" }}/> </button> :null}     
              </td>
            </tr>
          );
        })}
       
      


      </tbody>
    
    
    
    </>
  )
}

export default Body