import { useState , useEffect } from "react";
import axios from 'axios'
import Head from "./head";
import Body from "./body";

import data from './db.json'

const Table = () => {
  const [tableData, setTableData] = useState(data.users);

  const [order, setOrder] = useState("asc");


     
  
  const handleChangeOrder=()=>{
    if(order==="asc") setOrder("desc")
    if(order==="desc") setOrder("asc")
  }

console.log("data table",tableData)

 
  const columns = ["id", "nom", "numero",  "dateexamen","paiement"];


  const filterFunc=(column,keyword)=>{

   const afterFilter= tableData.filter((x)=>(x[column].includes(keyword)))

   setTableData(afterFilter)

  }

  const sortFunc = (column, order) => {
    

    const afterSortData =  [...tableData].sort((a, b) => (
      
    a[column].toLowerCase().toString() < b[column].toLowerCase().toString()   ? -1 : 1) 
    
    )
     
   
    console.log("after sort ", afterSortData);
    setTableData(afterSortData)


     if(order==="asc") {setOrder("desc")
    
    }
     if(order==="desc"){
      const afterSortData =  [...tableData].sort((a, b) => (
      
        a[column].toLowerCase().toString() < b[column].toLowerCase().toString()   ? 1 : -1) 
        
        )
         
       
        console.log("after sort ", afterSortData);
        setTableData(afterSortData)
      
      setOrder("asc")}


  }
  





 useEffect(()=>{
    
  axios.get("http://localhost:8000/users")
  .then((res)=>{
       
       
       console.log("data table are",res.data)
       setTableData(res.data)


  }).catch((err)=>{console.log(err)})


 },[])





  return (
    <div className="main-section">
           

      <table >
        <Head columns={columns} order={order}  handleSort={sortFunc} handleFilter={filterFunc} />
        <Body data={tableData} />
      </table>
    </div>
  );
};

export default Table;
