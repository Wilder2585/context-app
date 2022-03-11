import React from 'react'

const Navbar = () => {
  
  const user = { name : "Wilder"};
  
  
  return (
    <nav className= "navbar navbar-dark bg-dark mb-4"> 
        <div className='container'>
          <span className= "navbar-brand">
              <h1>{ user ? `Hola ${user.name}` : "Bienvenido" }</h1>   
          </span>
          {
            user
            ? <button className="btn btn-primary">
                Cerrar Sesion    
              </button>
            : <button className="btn btn-primary">
                Iniciar Sesion    
              </button>
          }
          
           
        </div>


    </nav>
    
  )
}

export default Navbar
