import React from 'react'
import useFetch from './useFetch'

function Person() {

  const allUsers=useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(allUsers);
  
  return (
    <>
    <h3 className='m-5 text-center'>Person</h3>
    <h4 className='ms-2 text-success text-center'>All Users List</h4>

    <table className="table m-5">
        <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
        </tr>
        </thead>
        <tbody>
           {
            allUsers?.length>0 &&
            allUsers.map((item,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))
           }
        </tbody>
    </table>
    </>
  )
}

export default Person