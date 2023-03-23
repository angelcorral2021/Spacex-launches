
import { useState, useEffect } from 'react'
import * as API from './services/launches'
import React from 'react'
import logo from './assets/SpaceX.png'
import './App.css'
import { FcCalendar } from "react-icons/fc";
import { format, compareAsc } from 'date-fns'



export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])



  return (
    <>
      <img src={logo} width={400} alt="logo space x" className='ml-7 mt-5' />
      <h1 className='text-3xl font-bold mt-8 ml-8'>Space x Launches</h1>

      <ul>
        {launches.map((launch) => (
        
<li key={launch.flight_number}  >
  {launch.launch_success ? <div className="ml-8 mt-7 bg-green-100 shadow-md rounded-md p-8 border border-gray-200 hover:shadow-lg transition" >
  <h3 className=''>Nombre de mision : {launch.mission_name}</h3>
            <h3 className=' mt-3'>Estado: {launch.launch_success ? <h2 className='text-green-500 '>Success</h2> : <h2 className='text-red-500'>Failure</h2>}</h3>
            <p className=' mt-5'>Fecha de lanzamiento : {format(new Date(launch.launch_date_local), 'MM/dd/yyyy')}</p>


  </div>: <div className="ml-8 mt-7 bg-red-100 shadow-md rounded-md p-8 border border-gray-200 hover:shadow-lg transition" >
  <h3 className=''>Nombre de mision : {launch.mission_name}</h3>
            <h3 className=' mt-3'>Estado: {launch.launch_success ? <h2 className='text-green-500 '>Success</h2> : <h2 className='text-red-500'>Failure</h2>}</h3>
            <p className=' mt-5'>Fecha de lanzamiento : {format(new Date(launch.launch_date_local), 'MM/dd/yyyy')}</p>


  </div>} 
  
           

         
          




          </li>
        ))}

      </ul>





    </>

  )
};

