import React from "react"
import Main from '../tamplets/Main'
import AGROFLORESTAR1 from '../../assets/imgs/AGROFLORESTAR1.png'
import Musica from '../../assets/imgs/Musica.mp3'

const headerProps = {
    icon: "phone",
    title:"Contatos",
}

export default props =>

<Main icon="home" title="Início"{...headerProps}  >
<div class="alert alert-warning alert-dismissible">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>AgroFlorestar</strong> Seja um parceiro.
  </div>
<div className="display -4"align-items="center"><h1 className="focus-in-contract-bck"> CONTATOS!</h1>
<div className="tracking-in-contract-bck" >
<p > E-mail: agroforestar@gmail.com </p>
<p > Tel: 62. 9.99894455 </p>
<p > Nome: Murillo Maximiliano </p>

</div> 
<a href="/" className="focus-in-contract-bck">
        <img className="new" src={AGROFLORESTAR1} alt="AGROFLORESTAR1" />
   </a>
</div>

<p className="texto" >“Aprofunda-te na matéria! Abre os teus sensos! Tenta perceber as formas dadas pela própria natureza! E tu chegarás a criar laços mais íntimos com ela. Isto acarretará mais sensibilidade nos tratos, nas relações com nossos irmãos (seres vivos) no campo e na floresta, bem como nas relações entre os seres humanos.” <strong><i>Ernst Götsch</i></strong> </p>


</Main>
