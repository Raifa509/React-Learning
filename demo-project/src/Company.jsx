import React from 'react'

const Company = () => {

  const empArray =
    [
      { empName: "Max", empAge: 24, empDesig: "Developer" },
      { empName: "Mili", empAge: 23, empDesig: "HR" },
      { empName: "Gaby", empAge: 22, empDesig: "Tester" },
      { empName: "Lucas", empAge: 25, empDesig: "Manager" },
      { empName: "Alex", empAge: 24, empDesig: "Developer" },
    ]
  return (
    <>
      <h1>Inside Comapany Component</h1>
      <h2>Employee List</h2>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {empArray.map((item,index)=>( //dont use curly, beacuse it expect js
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.empName}</td>
              <td>{item.empAge}</td>
              <td>{item.empDesig}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </>
  )
}
export default Company