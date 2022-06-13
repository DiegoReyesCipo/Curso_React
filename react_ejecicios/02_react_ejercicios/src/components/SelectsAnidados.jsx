import React, { useState } from 'react';

import SelectList from './SelectList'

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  return (
    <div>
      <h2>SelectsAnidados</h2>
      <h3>Argentina</h3>
      <SelectList
       title="provincias"
        url="https://apis.datos.gob.ar/georef/api/provincias" 
        handleChange={(e)=>{
          setState(e.target.value);
          }}
          />
          {state && (<SelectList
       title="departamentos" 
       url="" 
       handleChange={(e)=>{setTown(e.target.value)
       }}
       />
       )}
      {town &&(<SelectList
       title="municipios" 
       url="" 
       handleChange={(e)=>{setSuburb(e.target.value)
       }}
       />
       )}
      
      <pre>
        <code> 
          {state}- {town} - {suburb}
        </code>
      </pre>
    </div>

  )
}

export default SelectsAnidados