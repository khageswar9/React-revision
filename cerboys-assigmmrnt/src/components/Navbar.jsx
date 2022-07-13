import React from 'react'
import './navbar.css'

function Navbar() {
  const today = new Date();
  const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <div className='Navbar flex'>
        <div>&#8801;</div>
        <div>Logo <span>{date}</span> <span>{time}</span></div>
        <div>icons</div>
        <div>logout</div>
    </div>
  )
}

export default Navbar