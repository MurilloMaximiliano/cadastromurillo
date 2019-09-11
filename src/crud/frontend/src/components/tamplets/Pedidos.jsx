import React from "react";
import Main from '../tamplets/Main'

import logo6 from '../../assets/imgs/logo6.png'
import logo9 from '../../assets/imgs/logo9.jpg'
import logo10 from '../../assets/imgs/logo10.jpg'
import logo11 from '../../assets/imgs/logo11.jpg'
const headerProps = {
    icon: "photo",
    title:"Galeria",
    
}

export default props =>
<Main className="div1"icon="home" title="Início"{...headerProps} >
  
    
<div className="display -4"><h1 className="focus-in-contract-bck">Galeria</h1></div>




<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo9} class="d-block w-100" alt="..."/>
    </div>
  
    <div class="carousel-item">
      <img src={logo10} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo11} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</Main>
