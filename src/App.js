import React, {useEffect, useState} from 'react'
import Table from './components/Table'
import  './styles/index.scss'

function App() {

  return (
    <div className="App">    
      <h3>Condiciones Atmosfericas</h3>

      <Table/>

      <div>Total de registros </div>

    </div>
  );
}

export default App;
