import { useState , useEffect } from "react";
import axios from 'axios'
import Head from "./head";
import Body from "./body";
import data from './db.json'


const Table = () => {

  const [tableData, setTableData] = useState(data.users);
  const [order, setOrder] = useState("asc");
  const [keyword, setKeyword] = useState("");
  const [column, setColumn] = useState("");

  const columns = ["id", "nom", "numero",  "dateexamen","paiement"];



const selectKeyword = (x) => {
  setKeyword(x);
};

const selectColumn = (x) => {
  setColumn(x);
};


     
//fonction de filtrer
const filterFunc=()=>{
   
  if(keyword.length !== 0) {
    return tableData.filter((x)=>(x[column].includes(keyword)))
  }

  return tableData;

  }

  //la fonction d'ordre
  const sortFunc = (column, order) => {

    const afterSortData =  [...tableData].sort((a, b) => (
    a[column].toString().toLowerCase() < b[column].toString().toLowerCase() ? -1 : 1))
    console.log("after sort ", afterSortData);
    setTableData(afterSortData)
    setOrder("desc")

     if(order==="desc"){
      const afterSortData =  [...tableData].sort((a, b) => (
      a[column].toString().toLowerCase() < b[column].toString().toLowerCase() ? 1 : -1))
      console.log("after sort ", afterSortData);
      setTableData(afterSortData)
      setOrder("asc")}

  }
  

 useEffect(()=>{
    
  axios.get("http://localhost:8000/users")
  .then((res)=>{
       console.log("data table are",res.data)
       setTableData(res.data)

  }).catch((err)=>{
    console.log(err)
  })
 },[])


  return (
    <div className="main-section">
      <table >
      
     <Head columns={columns} order={order} handleSort={sortFunc} selectColumn={selectColumn} selectKeyword={selectKeyword}/>
    <Body data={filterFunc()} />
      </table>
    </div>
  );
};

export default Table;
