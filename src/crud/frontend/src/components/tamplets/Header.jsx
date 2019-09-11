import './Header.css'
import React from'react'

export default props =>

<header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-9">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
      
    </h1>
    <form action="https://www.google.com" target="_blank" className="direita"  >
 
  <input type="search" id="busca" name="q" target="_blank"/>
  <button type="submit">Buscar</button>
</form>
 <p className="lead text-muted">{props.subtitle}</p>

</header>