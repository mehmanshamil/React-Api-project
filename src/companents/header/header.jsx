import React from 'react'
import './header.style.css'
const header = () => {
  return (
    <header>
      <div className='container'>
        <div className="img">
          <img src="https://www.svgrepo.com/show/372933/react.svg" alt="" className="img" />
        </div>
        <div className="menu-head">
          <nav>
            <ul className='menu'>
              <li>Home</li>
              <li>Domain</li>
              <li>Hosting</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default header
