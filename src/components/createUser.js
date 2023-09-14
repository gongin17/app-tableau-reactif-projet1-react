import React , {useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
 import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {


  const [formData, setFormData] = useState({
    nom: '',
    numero: '',
    paiement: '',
    dateexamen: '',
  });

   const navigate=useNavigate()


  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log(formData);
     await axios.post("http://localhost:8000/users",{id :uuidv4(),...formData})
     .then((res)=>console.log("resposne :",res))
     .catch((err)=>console.log(err))

     navigate('/')

  };

       

  return (
    <div>
          

          <div className="signup-form">
      <h2>s’inscrire</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Numero</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date d'Examen</label>
          <input
            type="date"
            name="dateexamen"
            value={formData.dateexamen}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label> Paiement</label>
          <input
            type="text"
            name="paiement"
            value={formData.paiement}
            onChange={handleChange}
          />
        </div>
        <button type="submit"> Créer</button>
      </form>
    </div>


        
    </div>
  )
}

export default CreateUser