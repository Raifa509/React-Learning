import Employee from './Employee'
import User from './User'
import Company from './Company'
import Car from "./Car";
import Counter from './Counter'
import Person from "./Person";
import './App.css'
import { useRef } from 'react';


function App() {

  //variable declaration
  const empName='Luca Alex'
  const userName='User'

  const inputElement=useRef()
  // js code
  const clickFunction=()=>{
    alert("Button Clicked!!!")
  }

  const handleElement=()=>{
    inputElement.current.focus()
  }
  
  return (
    <>
    <Person/>
      <Counter/>
      <h3 className='m-5'>useRef hook</h3>
      <div className='m-5 d-flex border rounder p-2'>
        
        <input ref={inputElement} type="text" className="form-control" placeholder='Enter a text here' />
         <button onClick={handleElement} className="btn btn-warning text-light ms-3">Get focus</button>
         </div>
       
      <h1 style={{textAlign:"center",color:"blue",fontSize:35,marginTop:10}}>Demo Project</h1>
       <Car/>
      <Employee parentData={empName} isEmp={false}/>
      <User userData={userName} />
      <Company/>
      
      <div className="text-center m-5">
        <button onClick={clickFunction} className="btn btn-success py-2 px-3">Click Me</button>
      </div>
     
    </>
  )
}

export default App
