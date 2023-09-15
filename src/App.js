import logo from './logo.svg';
import './App.css';
 import Dashboad from './components/dashboad';
import UpdateUser from './components/updateUser';
import CreateUser from './components/createUser';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 

function App() {
  return (
    <div className="App"> 
         
    
    
    
    <Router>
      <Routes>
        <Route path="/" element={<Dashboad />} />
        <Route path="/condidats/:uId" element={<UpdateUser/>} />
        <Route path="/creer" element={<CreateUser/>} />

      </Routes>
    </Router>
    
    </div>
    
       
  );
}

export default App;
