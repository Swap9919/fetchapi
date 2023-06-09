import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {

      const [data, setData] = useState([])
       
      useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
            }, [] )
  return (
    <div>
       
            <h3>Fetch data from API in react with axios</h3>
            <table>
                  <thead>
                        <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>City</th>
                              <th>Street</th>
                        </tr>
                  </thead>
                  <tbody>
                        {data.map((user, index) => {
                              return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.address.street}</td>
                              </tr>
                        })}
                  </tbody>
            </table>
       
    </div>
  )
}

export default FetchData