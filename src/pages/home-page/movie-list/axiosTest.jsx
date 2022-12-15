import React, { useState, useEffect } from "react";
import axios from "axios";

const src ='"http://localhost:4000/movies"'

export default function AxiosTest() {
  
  const [param, setParam] = useState([]);
  console.log('Param', param);
  useEffect(() => {
  axios
    .get(src)
    .then(number => { 
      setParam(number.data.data);
  })
}, []);
  return (
    <div>
      {param.map(unit => {
        return(
          <p key ='1'>{unit.data}</p>
        )
      })}
    </div>
    )
    }
    
