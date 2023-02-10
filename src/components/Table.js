import React, {useEffect, useState} from 'react'
import Row from './Row'

export default function Table() {

  const [cities, setCities] = useState([])


  useEffect( ()=> {
    getData()
  }) 
  
  const getData = () => {
    fetch("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
    .then(response => response.json() )
    .then(response => setCities(response.results))
  }

  return (
    <table>
        <thead>
          <tr>
            <th>id</th>
            <th>cityid</th>
            <th>name</th>
            <th>state</th>
            <th>probabilityofprecip</th>
            <th>relativehumidity</th>
            <th>Lastreporttime</th>
            <th>LLUEVE</th>
          </tr>
        </thead>
        <tbody>

          {
            cities.map( city => 
              <Row key={city._id} city={city} />      
            )
          }
        </tbody>
      </table>
  )
}
