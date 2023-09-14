import React from 'react'
import Charts from '../charts/LineChart'
import Table from './table'
import { useNavigate } from 'react-router-dom'

const Dashboad = () => {


   const navigate=useNavigate()


  return (
    <div>

          <h1 style={{textAlign:"center"}}>Tableau de bord interactif</h1>

        <div style={{display:"flex",justifyContent:"start" , margin:"20px 0 40px 150px"}}>
          <button onClick={()=>navigate('/creer')} className="signup-btn">Créer un candidat</button>
        </div>
        <div className="box-group">
              <div className="box"> <h3 className="">total des candidats</h3>
              <h1 className="">10694</h1>
              </div>
              <div className="box">
              <h3 className="">paiement total</h3>
              <h1 className="">999994 MAD</h1>
               </div>
              <div className="box"> <Charts/>
              </div>
            </div>
        <Table/>


    </div>
  )
}

export default Dashboad