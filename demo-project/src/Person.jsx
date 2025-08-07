import React from 'react'

function Person() {
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
            <tr>
                <td>1</td>
                <td>Emil</td>
                <td>Email</td>
                <td>phone</td>
                <td>Website</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default Person