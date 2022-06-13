import Loader from './Loader'
import Message from './Message'
import React from 'react'
import { useFetch } from './hooks/useFetch'

const SelectList = ({title,url,handleChange}) => {
  const {data,error,loading} = useFetch(url);
  console.log(data,error,loading);

  if(!data) return null;
  if (error){
    return (
    <Message 
    msg={`Error${error.status}:${error.statusText}`} 
    bgColor= "#bc3545"
    />
  );
}

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1)
  let options= data.provincias[title]; 

  return (
    <>
        <label htmlFor={id}>{label}</label>
        {loading && <Loader/>}
        <select name={id} id={id} onChange={handleChange}>
            <option value="">Elige una {title}</option>
            {data && options.map((el)=> <option value={el}>{el}</option> )}
        </select>
    </>
  ) 
}

export default SelectList