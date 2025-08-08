import React, { useState } from 'react'
import useWeather from './useWeather'



function Weather() {
  
  const [city,setCity]=useState('') //here, each letter is stored in city, we dont want to send the letter one by one to fetch , instead we snd the final city name

  const [searchCity,setSearchCity]=useState('')

  const data= useWeather(searchCity)
  console.log(data);
  

  const handleSearch=()=>{
    if(!city){
      alert("Please type a city name!")
    }
    else{
       setSearchCity(city)  
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column w-100' style={{ height: '100vh' }}>
        <div className='d-flex'>
          <input value={city} onChange={(e)=>setCity(e.target.value)} className='px-3 py-2 shadow' type="text" placeholder='Type the city here!' style={{ width: '30rem', borderRadius: '15px', border: 'none', outline: 'none' }} />
          <button type="button" onClick={handleSearch} className="btn btn-outline-dark ms-3" >Search</button>
        </div>
        {
          data && (
             <div className='d-flex gap-5 mt-5 w-65'>
          <img src="rainy.png" alt="" width={350} />
          <div className=' w-100 d-flex justify-content-center align-items-center flex-column text-light'>
            <h4>{data.name}</h4>
            <h1 style={{ fontSize: '6rem' }}>{data.main.temp}° C</h1>
            <h5>{data.weather[0].description}</h5>
            <h6>Feels like {data.main.feels_like}°C</h6>
            <div className='d-flex gap-5 mt-5'>

              <div className='d-flex align-items-center h-50'>
                <img src="humidity.png" alt="" width={30} height={30} className='me-1' />
                <div className='d-flex flex-column'>
                  <p className='m-0'>{data.main.humidity}%</p>
                  <p className='m-0'>Humidity</p>
                </div>
              </div>

              <div className='d-flex align-items-center h-50'>
                <img src="wind.png" alt="" width={30} height={30} className='me-2' />
                <div className='d-flex flex-column'>
                  <p className='m-0'>{data.wind.speed} kmph</p>
                  <p className='m-0'>Wind</p>
                </div>
              </div>

              <div className='d-flex align-items-center h-50'>
                <img src="pressure.png" alt="" width={25} height={25} className='me-2' />
                <div className='d-flex flex-column'>
                  <p className='m-0'>{data.main.pressure}</p>
                  <p className='m-0'>Pressure</p>
                </div>
              </div>

            </div>
          </div>
        </div>
          )
        }
       
      </div>
    </>
  )
}

export default Weather