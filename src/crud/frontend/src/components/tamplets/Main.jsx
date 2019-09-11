import './Main.css'
import React from 'react'
import Header from './Header'
import AGROFLORESTAR from '../../assets/imgs/AGROFLORESTAR.png'
import Musica from '../../assets/imgs/Musica.mp3'
export default props =>
    <React.Fragment>
        <Header  {...props} />
        <main  className="content container-fluid, title1">
     <div className="p-10 mt-3">
           {props.children } 
  
          {/* <audio controls="controls">
  <source src="track.ogg" type="audio/ogg" />
  <source src={Musica} type="audio/mp3" />

</audio>*/}
    <a href="/" className="image">
        <img src={AGROFLORESTAR} alt="AGROFLORESTAR" />
        
   </a>


    </div>
        </main>
   
    </React.Fragment>