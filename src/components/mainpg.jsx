import React from 'react'
import {  useNavigate } from 'react-router-dom';

function Mainpg() {
    const navigate = useNavigate();

    const handleb=() => {
        navigate('/Homepage')
    }
  return (
    <div className='main_pg'>
        <h1 className='mainh1'>welcome</h1>
      <button className='redire-btn' onClick={handleb}>click me</button>
    </div>
  )
}

export default Mainpg
