import React,{useState,useEffect} from "react";
import axios from 'axios';

const Community = () => {
  const [data,setData] = useState({});
  useEffect(()=>{
    axios.get('http://localhost:8080/usr/1')
    .then(response => {
      console.log(response.data.data);
      setData(response.data.data)
    });
  },[])

  return <div> 
    <div style={{color:"red"}}>id = {data.id}</div>
    <div>username = {data.username}</div>
    <div>password = {data.password}</div>
  </div>;
};

export default Community;
