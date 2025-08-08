import React from 'react'
import useFetch from "./useFetch";

function Weather() {

  return (
    <>
    <h1 className='text-center m-5'> Weather</h1>
    <div className='w-50 d-flex justify-content-center align-items-center mx-auto'>
        <input type="text" className="form-control" placeholder='Type the city here!!' />
        <div className="btn btn-success ms-3">Search</div>
       
    </div>
     <div className='d-flex justify-content-center gap-5 mt-5'>
         <div>
                <h1>15.34</h1>
                <h4>feels like 15</h4>
                <h2>London</h2>
                <h6>Fri Aug</h6>
            </div>
            <div className='ms-5'>
                <h4>Weather Details</h4>
                <h6>Country</h6>
                <h6>GB</h6>
                <h6>Humidity</h6>
                <h6>68%</h6>
                <h6>Wind</h6>
                <h6>2.68</h6>
                <h6>Pressure</h6>
                <h6>1017</h6>
              
            </div>
     </div>
    </>
  )
}

export default Weather