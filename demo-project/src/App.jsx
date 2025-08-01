import Employee from './Employee'
import User from './User'
import './App.css'


function App() {

  //variable declaration
  const empName='Luca Alex'
  const userName='User'
  // js code
  const clickFunction=()=>{
    alert("Button Clicked!!!")
  }

  return (
    <>
      <h1 style={{textAlign:"center",color:"blue",fontSize:35,marginTop:10}}>Demo Project</h1>
      <Employee parentData={empName} isEmp={false}/>
      <User userData={userName} />
      <div className="text-center m-5">
        <button onClick={clickFunction} className="btn btn-success py-2 px-3">Click Me</button>
      </div>
    </>
  )
}

export default App
