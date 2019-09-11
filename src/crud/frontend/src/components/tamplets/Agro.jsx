import React from "react";
import Main from './Main'
import logo32 from '../../assets/imgs/logo32.png'
import logo35 from '../../assets/imgs/logo35.png'
import logo33 from '../../assets/imgs/logo33.jpg'
import logo37 from '../../assets/imgs/logo37.jpg'
import logo39 from '../../assets/imgs/logo39.jpg'
import logo38 from '../../assets/imgs/logo38.webp'
import logo40 from '../../assets/imgs/logo40.jfif'
const headerProps = {
    icon: "tree",
    title:"Agrofloresta",
    
}

  

export default props =>
<Main className="div1"icon="home" title="Início"{...headerProps} 
>
  
  
 
  
  
  
   <div className="texto"> 

<h1 class="focus-in-contract-bck">SAF</h1>

<p className="texto"align-heigth="10px" >O sistema agroflorestal (SAF) é independente de insumos externos. A vida naturalmente realiza a ciclagem dos nutrientes e constrói camadas de serrapilheira mantendo a fertilidade do solo, ajusta o ciclo hidrológico natural dispensando sistemas de irrigações e atua no controle natural de pragas dispensando também o uso de agrotóxicos.
</p>

<h5> COMO FUNCIONA O SAF?</h5>
<div class="foto1">
<img className="foto1"  src={logo33} alt="logo33" />

       </div>
<p className="texto">

Um bom SAF é composto de plantas de todos os estratos e estágios sucessionais, bem como de diversas funções. Para entendermos melhor o que essa frase quer dizer vamos explicar os conceitos acima.
</p>
<h5>Estágios sucessionais:</h5><p className="texto"> São etapas de evolução de um ecossistema florestal, equivalentes ao que chamamos nas fases de desenvolvimento humano de infância, adolescência e fase adulta.
</p>

<img className= " grow"  src={logo32} alt="logo32" />
<img className="title1"  src={logo35} alt="logo35" />
<h5>Estágio Placentário:</h5> <p className="texto"> Estágio cujas plantas nascerão primeiro (pioneiras) e prepararão o solo para o estágio seguinte ex.: milho, feijão, cana, sorgo, guandu, margaridão, mucuna, crotalária, abacaxi, mandioca, abóbora;</p>
<h5>Estágio Secundário:</h5> <p className="texto">Estágio intermediário que fará a transição do sistema jovem (placenta) para o sistema adulto (primária) ex.: mamão, banana, guapuruvu, abacate, pupunha, graviola;</p>
<h5>Estágio Primário:</h5><p className="texto">Estágio de floresta formada, estado clímax (café, jaca, castanha, cacau, manga, jatobá)</p>


<h5>Estratificação:</h5> <p  className="texto">É a disposição vertical da vegetação. Está relacionada à exigência luminosa das plantas, ou seja, aquelas com maior necessidade de luz a buscarão naturalmente alcançando o estrato mais alto, enquanto aquelas com menor exigência ficarão mais embaixo, formando andares. Podemos distribuir as espécies entre os estratos rasteiro, baixo, médio, alto e emergente.</p>

<h5 >Funcionalidade:</h5>  <p className="texto">É o papel que a planta exerce dentro do ecossistema, algumas servem de alimento, outras promovem o controle natural de pragas e outras oferecem asilo a microorganismos benéficos para o sistema. Existem aquelas que atraem fauna e aquelas que armazenam água. E todas participam da adubação do solo, pois contribuem para ciclagem de nutrientes, além de criarem um microclima mais ameno (por meio da transpiração e da sombra, elas alteram as propriedades da atmosfera local).</p>
 

  <h5>COMO IMPLANTAR UM SAF?</h5>

  <p className="texto">1º passo: escolher as espécies que farão parte da agrofloresta. É importante que se conheça o estrato que a planta ocupa e o seu ciclo de duração no sistema, pois como o SAF se baseia no crescimento sucessional é necessário que se tenha espécies ocupando todos os estratos (rasteiro,baixo, médio, alto e emergente) e em todos os ciclos de vida (placentárias, secundárias e primárias) para que tenhamos um sistema bem equilibrado, sincronizado e estratificado. 
    </p>
    <p className="texto"> 
    2º passo: definir o desenho do plantio, planejar quais consórcios de plantas serão utilizados e sua disposição no espaço de plantio. As árvores de mesmo estrato devem ter algum distanciamento entre si, porém, podem ficar bem próximas às plantas de estratos diferentes do seu. Por exemplo: uma mangueira (primária alta) ao lado de uma jabuticabeira (primária média) e um cafeeiro (primária baixa). Nessas condições elas produzirão resultados bem satisfatórios mesmo estando bem próximas, mas, se o sistema não for bem planejado e a estratificação não estiver bem alocada, havendo uma má distribuição luminosa, o sistema não terá resultados satisfatórios.
    </p>
    <p className="texto">
    3º passo: obter o material para o plantio. Isso inclui sementes, mudas, adubos, corretivos do solo, ferramentas, etc. As sementes podem ser coletadas (algumas espécies não são encontradas a venda), compradas (sementes comerciais são fáceis de serem obtidas) ou trocadas, vocês podem procurar viveiristas, associações ou ir a eventos de troca de sementes. Quanto ao tratamento do solo o agricultor tem duas opções, poderá usar plantas placentárias estratégicas para corrigir acidez e reverter a aridez e pobreza do solo, ou poderá utilizar fertilizantes orgânicos (húmus, esterco ou composto), irrigação e calcário ou pó de rocha para correção do solo (sendo a segunda, uma opção mais sustentável, uma vez que o calcário provém de atividades mineradoras). Tudo dependerá do tempo que se pode esperar até ver resultados.
    </p>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo37} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo38} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo39} class="d-block w-100" alt="..."/>
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
      


<p className="texto">
OBS: Lembramos que o SAF é uma tecnologia sustentável, a utilização de agrotóxicos e adubos químicos contradiz essa característica. O uso de insumos menos agressivos é viável, inclusive de maquinário, porém, quanto menos insumo e maquinário, mais sustentável ambiental e economicamente.
</p>
<h5>COMO PROCEDER APÓS A IMPLANTAÇÃO DO SAF?</h5>
<p className="texto">Após a implantação do sistema é importante manejar a agrofloresta para acelerar o processo sucessional que se dá naturalmente. Esse manejo consiste de podas, capinas seletivas, introdução e remoção de espécies, colheita de frutos e coleta de sementes de acordo com as necessidades do sistema, para tanto, o agricultor deverá contar com sua capacidade de observação e seu tino de pesquisador (método da tentativa e erro).
</p>
    
 </div>
</Main>
