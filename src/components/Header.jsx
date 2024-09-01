import React from 'react'
import './Header.css'

const Header = () => {
  return (

    <header class="header">
    <a href="/" class="logo">Dasha.</a>
    <nav class="navbar">
        <a href="#" class="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>

    </nav>
</header>

  )
}

export default Header