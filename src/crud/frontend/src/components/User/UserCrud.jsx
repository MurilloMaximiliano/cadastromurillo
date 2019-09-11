
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from '../tamplets/Main'
import logo90 from '../../assets/imgs/logo90.jpg'
import logo9 from '../../assets/imgs/logo9.jpg'
import logo11 from '../../assets/imgs/logo11.jpg'
const headerProps = {
    icon: "tree",
    title:"Agricultura Sintrópica",
   
}

export default props =>
<Main icon="home" title="Início"{...headerProps} 
>
    
<div className="display -4"align-items="center"><h1 className="div1">O que é Agricultura Sintrópica?</h1></div>




<h6 className="texto">“Em vez de lutar contra a natureza, é preciso seguir seu fluxo, entender a sua dinâmica. Assim,
       a agricultura pode ser uma grande oportunidade para regenerar a vida em nosso planeta.” <h7><i>Ernst Götsch</i></h7>   </h6>
       <p className="texto">Agricultura sintrópica é o termo designado a um sistema de cultivo agroflorestal (SAF) baseado no conceito de sintropia - 
       principio contrário ao de entropia - caracterizado pela organização, integração, equilíbrio e preservação de energia no ambiente.

Esta vertente agrícola busca inspiração na dinâmica natural dos ecossistemas virgens – que não sofreram interferência humana – 
para um manejo sustentável e foi idealizada e difundida por Ernst Götsch, agricultor e pesquisador suíço, nascido em Raperwilsen,
 em 1948. Enquanto trabalhava com pesquisa em melhoramento genético na instituição Zurique-Reckenholz, Ernst começou a se questionar 
 se não era mais sensato melhorar as condições de vida das plantas, ao invés de alterá-las geneticamente de modo que estas sobrevivam à
  escassez de nutrientes e boas condições climáticas aos quais são submetidas nas monoculturas.</p>
  <p className="texto"> Assim começou a redirecionar o seu trabalho para o 
  desenvolvimento de uma agricultura sustentável. Chegou ao Brasil em 1982 e em 1984 adquiriu a então Fazenda “Fugidos da Terra Seca”, 
  localizada em Piraí do Norte/BA, hoje conhecida como Fazenda Olhos D’água, devido à quantidade de nascentes que foram recuperadas graças 
  ao trabalho sintrópico desenvolvido.
Neste modelo de SAF, as plantas são cultivadas em consórcio e dispostas em linhas paralelas, 
intercalando sempre espécies de portes e características diferentes, visando o aproveitamento máximo do terreno, 
e levando em consideração a manutenção e reintrodução das espécies nativas. O ciclo temporal dos consórcios provou-se 
também fator fundamental para o bom funcionamento deste SAF, assim como a compreensão do mecanismo de sucessão ecológica em uma floresta não manipulada. 
</p>

  <p>Assista ao video em que  Ernst Götsch explica os fundamentos da Agricultura Sintrópica:</p>        
          <iframe
         
         
           width="825"
            height="615"
            frameBorder="0"
            allowFullScreen
            src="https://www.youtube.com/embed/WZ8_WehvQaA "
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; center"
            className=" shadow-drop-2-center"
          />
    

<div class="row">
  
  <div class="titulo">
  
    <div class="shadow-drop-2-center , card">
      
    <p >Alguns exemplos de SAF que vem dando bons resultados.</p>
       <img src={logo90} class="card-img-top" alt="logo6" width="40%" height="300"/>
      <div class="card-body, outline-success">
        <h5 class="card-title">Fazenda Ouro Fino</h5>
        <p class="card-text">“O trabalho realizado no campo é intelectual e braçal, quando o suor começa a descer pela lateral do rosto e a respiração vai ficando mais ofegante, o calor escaldante avisa que é hora de parar um pouco. 
”</p>
        <a  className="card,  titulo "href="http://www.fazendaourofino.com.br/"   target="_blank" class="  btn btn-outline-success"data-style="expand-left" >Veja</a>
      </div>
    </div>
  </div>
  <div class="titulo">
    <div class="shadow-drop-2-center , card">
    <p >Alguns exemplos de SAF que vem dando bons resultados.</p>
    <img src={logo9} class="card-img-top" alt="logo6" width="40%" height="300"/>
      <div class="card-body, outline-success">
        <h5 class="card-title">Sítio Semente</h5>
        <p class="card-text">“O Sítio Semente é referência em sistemas agroflorestais. Oferece cursos, visitas guiadas, mudas, sementes e produtos cultivados em abundância, diversidade e livres de agrotóxicos".</p>
        <a href="https://www.sitiosemente.com/" target="_blank" class="btn btn-outline-success btn-ladda"data-style="expand-left">Veja</a>
      </div>
    </div>
  </div>
 
  </div>
 
  

<p className="texto">
O modelo também se mostrou economicamente viável. A produção demanda um baixo investimento, 
já que exige um mínimo de irrigação e não utiliza produtos químicos na sua manutenção. 
O consórcio de diversos tipos de espécies, entre frutíferas e hortaliças, com diversos tempos de colheita diferentes, 
beneficia o agricultor que permanece retirando uma fonte de renda da terra constantemente. Além do fato de que, os produtos oriundos são orgânicos, 
o que valoriza seus preços no mercado.
Este método permite a recuperação de pastos abandonados, cujos solos sofreram degradação, 
em um curto período, transformando os mesmos em sistemas altamente produtivos. Em uma cultura tradicional, 
ou monocultura, à medida que o ciclo de plantação e colheita acontece, o solo vai se degradando e perdendo seus nutrientes. 
Já no modelo sintrópico acontece o contrário, à medida que os ciclos de plantio ocorrem, há um enriquecimento do solo, devido à 
disponibilidade de matéria orgânica remanescente das colheitas
</p>

<div class="titulo" >        
<img src={logo11} class="card-img-top, shadow-drop-2-center " alt="logo11" width="50%" height="500"/>
<div class="card-body ">
    <h5 class="focus-in-contract-bck">Fazenda da toca</h5>
    <p class="card-text, text-
center">“Na Fazenda da Toca, há cerca de 50 hectares de sistemas agroflorestais (SAFs) que, ao mesmo tempo em que produzem alimentos altamente saudáveis e com eficiência, regeneram o solo, sequestram carbono, diversificam a produção, conservam água e favorecem a biodiversidade. Tudo isso com uma intervenção humana baseada na inteligência e na dinâmica da natureza.”

</p>
    <a  className="card "href="http://fazendadatoca.com.br/arte-de-escalar-um-sistema-agroflorestal-saf/"   target="_blank" class="btn btn-outline-success btn-ladda"data-style="expand-left">Veja</a>
</div>
</div>



</Main>
