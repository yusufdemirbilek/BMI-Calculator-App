import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
function Header() {
    

  return (
    
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" aria-current="page" to="/">BMI Index</Link>
    

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/whatisbmi">What is BMI</Link>
        <Link className="nav-link" to="/calculations">Calculations</Link>
       
        {/* <a class="nav-link disabled">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>

  
  )
}

export default Header