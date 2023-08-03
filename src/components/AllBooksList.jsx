import React, { useEffect, useState } from 'react'

function AllBooksList() {

  const [backendData, setBackendData] = useState([{}])
    const be_url= 'http://localhost:5000/api'
useEffect(() => {

  fetch(`${be_url}`).then(
   response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
  

},[])

return (
  <div>
 
    {(typeof backendData.users === 'undefined') ? (
      <p>loading...</p>
    ) : (
      backendData.users.map((user, i) => (
        <li key={i}>{user}</li>
        
      ))
    )}

  </div>
)
}

export default AllBooksList