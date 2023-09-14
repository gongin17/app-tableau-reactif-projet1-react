import { useState , useEffect } from "react";
import axios from 'axios'
import Head from "./head";
import Body from "./body";

const Table = () => {
  const [tableData, setTableData] = useState([]);

console.log("data table",tableData)

 
  const columns = ["id", "nom", "numero",  "dateexamen","paiement"];


  const filterFunc=(column,keyword)=>{

   const afterFilter= tableData.filter((x)=>(x[column].includes(keyword)))

   setTableData(afterFilter)

  }

  const sortFunc = (column, order) => {
    

    const afterSortData =  [...tableData].sort((a, b) =>
      a[column].toString().localeCompare ( b[column].toString(),"en", {
      numeric: true,
     })  
    );

    console.log("after sort ", afterSortData);
    setTableData(afterSortData)
  };





 useEffect(()=>{
    
  axios.get("http://localhost:8000/users")
  .then((res)=>{
       
       
       console.log("data table are",res.data)
       setTableData(res.data)


  }).catch((err)=>{console.log(err)})


 },[])





  return (
    <div className="main-section">
           

      <table>
        <Head columns={columns}   handleSort={sortFunc} handleFilter={filterFunc} />
        <Body data={tableData} />
      </table>
    </div>
  );
};

export default Table;
