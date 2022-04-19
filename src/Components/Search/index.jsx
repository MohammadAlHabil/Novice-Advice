import React from 'react'
import './Search.css'
// eslint-disable-next-line react/prop-types
export default function Search({setSearch}) {
  return (
    <div className='container'>
        <div className="search">
        <input type='text' onChange={
            (e) => setSearch(e.target.value)
            } 
            placeholder='search for advice'/>

        <button type='submit'>search</button>

        </div>
         
        
    </div>
  )
}
