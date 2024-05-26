import React from 'react'
import propTypes from 'prop-types'
export default function header(props) {
  return (
    
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
 <a className="navbar-brand" href="#">props.title</a>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarsupportedcontent"
 aria-expands="false" aria-label="toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
       <a className="nav-link active" aria-current="page" href="#">Home</a>
    
 </li>     
     <li className="nav-item">
       <a className="nav-link active"href="#">about</a>
     </li>
   </ul>
   <form className="d-flex" role="search">
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
     <button className="btn btn-outline-success" type="submit">Search</button>
   </form>
 </div>
    </div>
    </nav>
  )
}
header.defaultprops={
  title:"your title here",
  searchBar:"true"
}
header.propType={
  title:propTypes.string,
  searchbar:propTypes.bool
}

