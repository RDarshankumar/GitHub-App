import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'

const Navbar = (props)=>{
 
  
    return(
      <nav className='navbar'>
        <h1><i className={props.icon}></i>{props.title}</h1>

      </nav>
    )
  }

  Navbar.defaultProps ={
    title:"GitHub Finder",
    icon :"ri-github-fill"
  }
  Navbar.propTypes ={
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
  }
export default Navbar