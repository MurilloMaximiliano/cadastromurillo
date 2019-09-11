
import React from "react"
import Main from '../tamplets/Main'


import logo30 from '../../assets/imgs/logo30.jpg'
import logo29 from '../../assets/imgs/logo29.png'
import logo31 from '../../assets/imgs/logo31.jfif'
export default props =>
<Main  
   title="AgroFlorestar">
   

<div  ><h1 className="tracking-in-expand">Agricultura Sintrópica</h1></div>

{'  '}
 <p className="texto ">
      <strong>O Projeto AgroFlorestar</strong> tem como principal objetivo o de auxiliar aqueles que desejarem aprender mais sobre a Agricultura Sintrópica, seus fundamentos e benefícios, 
      neste projeto elencaremos toda estrutura da SAF, desde o preparo do solo até o manejo. 
      Vale ressaltar que este projeto é uma plataforma inteligente que estará sempre em movimento, 
      contando com um forum onde pode ser desenvolvido perguntas, observações, instruções que venha contribuir com a temática. Trabalhamos com profissionais especializados, oferecemos cursos SAF's de qualidade, implementando os principios básicos do Sistema Agroflorestal.
  O sistema agroflorestal utiliza os pilares da sustentabilidade como alicerces, considerando aspectos sociais, econômicos e ambientais, 
      e todo o esforço se dá no sentido de utilizar os conhecimentos humanos e as técnicas de manejo à serviço da terra,
       e não o contrário, ou seja, adequar a produção ao espaço.</p>

       
          <p><iframe className="title1" 
             width="825"
              height="615"
              frameBorder="0"
              border-radius="10"
              allowFullScreen
              src="https://www.youtube.com/embed/a7K7k4fj9K8"  
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; center"/>
          </p>
          
          <div class="list-unstyled">
 
  <div class=" texto">
  <li class="media">
  <img src={logo31} class="image" alt="logo31"/>
  <div class="media-body">
    <h5 class="focus-in-contract-bck ">Homem e Natureza: Cultura na Agricultura, de Ernst Götsch</h5>
    <p >A seguir, pontuamos alguns aspectos que representam o sistema de agricultura sintrópica e outros que não fazem parte deste sistema, segundo Götsch.Envolve

Harmonizar as atividades humanas com os processos naturais da vida;
Adotar dois critérios básicos para intervenção: aumento de vida e favorecimento de processos sucessionais, gerando um balanço energético positivo;
Contribuir para aumentar a fertilidade do solo e a formação de um sistema próspero;
Observar, aprender e copiar a natureza;
Plantar o que for adaptado a cada lugar;
Aprender com pragas, doenças, “ervas ruins” e matos, que indicam tanto os pontos fracos do sistema, quanto o que é mais adequado para cada lugar;
Usar técnicas de capina seletiva de ervas, de podação de herbáceas, arbustos e árvores, e de consórcios complexos de espécies de todas as etapas sucessionais..</p></div>

 </li>
 
 <div className=" titulo2"><a href="http://www.agrisustentavel.com/doc/ebooks/natureza.pdf" target="_blank" class=" btn btn-outline-success">Leia</a></div>
 
 <hr></hr>
</div>

<ul class="list-unstyled, texto">
  <li class="media">
    <img src={logo29}class="image" alt="logo29"/>
    <div class="media-body">
      <h5 class="focus-in-contract-bck">Benefícios do Sistema Agroflorestal</h5>
      <p >O sistema agroflorestal apresenta diversas vantagens.As folhas mortas das árvores e arbustos adubam naturalmente o solo, reduzindo a necessidade de se ultilizar fertilizantes quimicos.A cobertura vegetal também amortece o impacto das chuvas e dos ventos, o uqe ajuda a previnir a erosão.As raízes das plantas, por sua vez, abrem pequeníssimos canais no solo, favorecendo a infiltração da água das chuvas.
O sistema agroflorestal dá, ainda, uam maior segurança para as familias rurais.Com efeito, uam cultura pode se perder por falta de chuvas ou ação de pragas ou doenças, e outras culturas mais resistentes ou com um ciclo diferente se manteram.</p>
    </div>
  </li>
  <hr></hr>
  <li class="media my-4">
    <img src={logo30} class="image" alt="logo30"/>
    <div class="media-body">
      <h5 class="focus-in-contract-bck ">Ernst Gotsch, uma vida pela floresta.</h5>
     <p > Referencia internacional em Sistemas Agroflorestais, Ernst Gotsch desenvolveu uma apurada técnica de plantio, cujos princípios e práticas podem ser aplicados a diferentes ecossistemas, “Amazônia, Cerrado, Altiplano Boliviano, Caatinga”. Com uma visão da agricultura que reconcilia o ser humano com o meio ambiente.</p>    </div>
  </li>
      
 
</ul>
</div>
</Main>