import './Footer.css'
import React from 'react'
import logo from '../../assets/imgs/logo2.png'
import logo1 from '../../assets/imgs/logo3.png'
import logo2 from '../../assets/imgs/logo4.webp'
import logo3 from '../../assets/imgs/logo5.png'
import logo20 from '../../assets/imgs/logo20.png'
import logo21 from '../../assets/imgs/logo21.png'
import logo22 from '../../assets/imgs/logo22.png'
import AGROFLORESTAR from '../../assets/imgs/AGROFLORESTAR.png'
export default props =>

  <footer className="footer">
  
   
        
     {/*} <span>
      <h5>Mais recursos</h5>
          <li>  <a  href="https://www.pratiz.com.br/" target="_blank">
            Pratiz 
          </a>
          </li>
          <li>
          <a href="https://plantaoextra.com/" target="_blank">
           Plantão Extra
          </a>
          </li>
          <li>
          <a href="http://www.swb.com.br/home/" target="_blank">
            SWB
          </a>
          </li>
          </span>*/}
           <form>
                      
                    
                      <a
                                href="https://www.instagram.com/"
                                target="_blank">
                            
                                <img  className="  direita, grow" src={logo3} alt="logo3" 
                                width="30"
                                    height="30"
                              /> 
                          </a>
                          <a
                                href="http://facebook.com"
                                target="_blank">
                            
                                <img  className="direita,  grow" src={logo22} alt="logo22" 
                                width="30"
                                    height="30"
                              /> 
                          </a>
                          <a
                                href="https://twitter.com/login?lang=pt"
                                target="_blank">
                            
                                <img  className=" direita, grow" src={logo21} alt="logo21" 
                                width="30"
                                    height="30"
                              /> 
                          </a>
                            <a 
                                href=" https://br.pinterest.com/"
                                target="_blank">
                            
                                <img  className=" direita,  grow" src={logo20} alt="logo20" 
                                width="30"
                                    height="30"
                                  
                              /> 
                          </a>
                          </form>
          
                          <label   className="texto">
                     
                          <p class="text-secondary, titulo" >Colaboradores</p>
                          <div class="row">
                         <a
                              href="http://udv.org.br/"
                              target="_blank">
                              <img className="grow "src={logo} alt="logo2" 
                            
                                width="170"
                                height="50"
                                />
                         </a>
                            <a
                              href="http://www.fazendaourofino.com.br/"
                              target="_blank">
                              
                              <img className="grow " src={logo1} alt="logo3" 
                             padding="10%"
                                width="170"
                                height="55"
                                />
                            </a>
                            <div>
                              {'  '}
                            </div>
                            <a
                              href="https://www.sitiosemente.com/"
                              target="_blank"
                              >
                              <img className="grow" src={logo2} alt="logo4" 
                              
                                width="170"
                                height="55"
                             spacing="10"
                                />
                            </a>
                            
                         
                            </div>
                          
          
                         </label>
                          
          
                        
                     
                          <aside className="titulo2">
  
   
   <p  className="footer1">
Murillo&copy;2019 mmaxims Inc.
                  </p> 
</aside>

                            
  </footer>
  