import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0) 
    useEffect(()=>{
        setTimeout(() => {
            setCount(count+1)
        }, 1000);
    },[count])
    return (
        <div className='m-5 border rounded p-5 d-flex justify-content-center'>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h2>Counter Component</h2>
                <h3 style={{ fontSize: '100px', color: "violet" }}>{count}</h3>
                <div className="mt-3">
                    <button className="btn btn-success" onClick={()=>setCount(count+1)}>Increament</button>
                    <button className="btn btn-danger ms-3" onClick={()=>setCount(0)}>Reset</button>
                    <button className="btn btn-info ms-3 text-light" onClick={()=>setCount(count-1)}>Decreament</button>

                </div>

            </div>
        </div>
    )
}

export default Counter