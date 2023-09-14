import React from 'react'
import Charts from '../charts/LineChart'
import Table from './table'
import { useNavigate } from 'react-router-dom'

import data from './db.json'

const Dashboad = () => {


   const navigate=useNavigate()



   const arrayData=data.users;
     
   console.log("array",arrayData)

   let sum=0;

   for(let i=0;i<arrayData.length;i++){
      sum+=arrayData[i].paiement;
   }

  


  return (
    <div>

          <h1 style={{textAlign:"center"}}>Tableau de bord interactif</h1>

        <div style={{display:"flex",justifyContent:"start" , margin:"20px 0 40px 150px"}}>
          <button onClick={()=>navigate('/creer')} className="signup-btn">Créer un candidat</button>
        </div>
        <div className="box-group">
              <div className="box"> <h3 className="">total des candidats</h3>
              <h1 className="">{data.users.length}</h1>
              </div>
              <div className="box">
              <h3 className="">paiement total</h3>
              <h1 className="">{sum} MAD</h1>
               </div>
              <div className="box"> <Charts/>
              </div>
            </div>
        <Table/>


    </div>
  )
}

export default Dashboad