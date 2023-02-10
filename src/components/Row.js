import React from 'react'

export default function Row({city}) {

  const handleClick = (e) => {
    e.preventDefault()
    
    
  }
  return (
    <tr>
      <td onClick={handleClick}>{city._id}</td>
      <td>{city.cityid}</td>
      <td>{city.name}</td>
      <td>{city.state}</td>
      <td>{city.probabilityofprecip}</td>
      <td>{city.relativehumidity}</td>
      <td>{city.lastreporttime}</td>
      <td>{(city.probabilityofprecip > 60 || city.relativehumidity > 50) 
        ? "Llueve" : ""}</td>
    </tr>
  )
}
