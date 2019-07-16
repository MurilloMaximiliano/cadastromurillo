import './Nave.css'
import React from 'react'

export default props =>
<aside className='menu-area'>
  <nav className="menu">
    <a href="#/">
        <i className=" fa fa-home"></i> Início
     </a>
     <a href="#/users">
         <i className=" fa fa-users"></i> Clientes
     </a>
     <a href="#/product">
         <i className=" fa fa-phone"></i> Produtos
     </a>
     <a href="#/users2">
         <i className=" fa fa-order"></i> Pedidos
     </a>
     <a href="#/users3">
         <i className=" fa fa-requests"></i> Contato
     </a>
  </nav>
</aside>
