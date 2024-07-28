import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import { useState, useRef, useEffect, useReducer, act } from "react";
import DisplayValue from "./DisplayValue";
import {createClient} from '@supabase/supabase-js'


function App() {
  const [location,setLocation]=useState('')
  const [date,setDate]=useState()

  const weatherHandler = async(e) => {
  
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=bdc278e9a9844b098a84dbaf0ae23126`).then((res)=>{
      return res.json()
    }).then((resp)=>{
      const weatherForecast=resp.data.filter((day)=>day.valid_date===date)
    console.log(weatherForecast)
    })
    

  };


  const locationHandler=(e)=>{
    setLocation(e.target.value)
  }

  return (
    <>
    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
    <input type="text" value={location} onChange={locationHandler}></input>
      <button onClick={weatherHandler}>Fetch Weather</button>
    </>
  );
}

export default App;
