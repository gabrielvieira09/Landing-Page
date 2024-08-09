import './App.css';
import Eu from '../src/assets/20221209_090155.png'
import Img1 from "../src/assets/image1.jpg"
import Img2 from "../src/assets/image2.png"
import Img3 from "../src/assets/imgem3.jpg"
import Img4 from "../src/assets/image4.png"

function App() {
  return (
    <div id='container'>
      <header style={{height:65, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <div style={{display:"flex", flexDirection:"row", textAlign:"center", alignItems:"center", height:65}}>
            <img style={{width:40, height:40, borderRadius:50, marginLeft:20}} src={Eu} alt='uma foto minha'/>
            <p style={{color:"white", fontWeight:"bold", marginLeft:15}}>Profissão:</p>        
            <p style={{color:"white", marginLeft:10}}>Desenvolvedor de Software</p>
        </div>
        <div>
          <a className='secoes' id='s1' href='#secao1'>O que é?</a>
          <a className='secoes' id='s2' href='#secao2'>Habilidades</a>
          <a className='secoes' id='s3' href='#secao3'>Oportunidades</a>
          <a className='secoes' id='s4' style={{marginRight:200}} href='#secao4'>Tecnologias</a>
        </div>
      </header>
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
        <div id='secao1'>
          <div style={{display:"flex",alignItems:"center", justifyContent:"center", width:"50%"}}>
            <img style={{width:650, height:400, borderRadius:10, borderWidth:1, borderColor:"red"}} src={Img1} alt='' />
          </div>
          <div style={{width:"48%", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
            <h1 style={{color:"rgb(54, 54, 54)", marginBottom:-5}}>O que faz um Desenvolvedor de Software?</h1>
            <p style={{color:"white", fontSize:20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Um desenvolvedor de software, ou simplesmente “dev”, é a pessoa responsável por projetar, codificar, testar, implementar e manter sistemas e aplicações.
              A profissão é considerada uma das mais promissoras para o futuro do mercado de trabalho, com crescimento significativo previsto para os próximos anos.
              Cada vez mais empresas buscam criar sistemas digitais que sejam completos e atendam às necessidades de seus clientes, aprimorando o desempenho geral da empresa.
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assim, a busca por profissionais capazes de criar bons softwares, sejam websites, aplicativos ou outros tipos de sistemas, é cada vez maior. Esse profissional é uma parte essencial do time de Produto, pois contribui ativamente para o processo de criação destes sistemas.</p>
          </div>
        </div>
        <div id='secao2'>
          <div style={{width:"44%",marginLeft:35,marginRight:15, display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
            <h1 style={{color:"rgb(54, 54, 54)", marginBottom:-5}}>Habilidades Necessárias</h1>
            <p style={{fontSize:20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Um programador deve dominar pelo menos uma linguagem de programação, como Java, Python, C++ ou JavaScript.
              Juntamente com isso um programador deve ter uma boa lógica de programação,  precisa ter habilidades sólidas de resolução de problemas.
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A tecnologia está em constante evolução, e um bom programador deve sempre buscar aprender e se atualizar.
              Embora a programação seja frequentemente vista como uma atividade solitária, a capacidade de trabalhar em equipe é essencial.
            </p>
          </div>
          <div style={{display:"flex",alignItems:"center", justifyContent:"center", width:"50%"}}>
            <img style={{width:650, height:400, borderRadius:10, borderWidth:1, borderColor:"red"}} src={Img2} alt='' />
          </div>
        </div>
        <div id='secao3'>
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", width:"58%"}}>
            <img style={{width:650, height:400, borderRadius:10, borderWidth:1, borderColor:"red"}} src={Img3} alt='' />
          </div>
          <div style={{width:"40%", marginLeft:-20, display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
            <h1 style={{color:"rgb(54, 54, 54)"}}>Oportunidades de Carreira</h1>
            <ul>
              <li style={{fontSize:20}}>Desenvolvedor Front-End</li>
              <li style={{fontSize:20}}>Desenvolvedor Back-End</li>
              <li style={{fontSize:20}}>Desenvolvedor de Inteligência Artificial</li>
              <li style={{fontSize:20}}>Desenvolvedor Web</li>
              <li style={{fontSize:20}}>Desenvolvedor de Aplicativos</li>
              <li style={{fontSize:20}}>Gargos de gestão, liderança e planejamento</li>
            </ul>
          </div>
        </div>
        <div id='secao4'>
          <div style={{width:"45%",marginRight:40, display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
            <h1 style={{color:"rgb(54, 54, 54)", marginBottom:-5}}>Tecnologias utilizadas</h1>
            <ul>
              <li style={{fontSize:20}}>Java</li>
              <li style={{fontSize:20}}>JavaScript</li>
              <li style={{fontSize:20}}>PHP</li>
              <li style={{fontSize:20}}>C#</li>
              <li style={{fontSize:20}}>C++</li>
              <li style={{fontSize:20}}>React</li>
              <li style={{fontSize:20}}>React Native</li>
              <li style={{fontSize:20}}>Laravel</li>
            </ul>
          </div>
          <div style={{display:"flex",alignItems:"center", justifyContent:"center", width:"40%"}}>
            <img style={{width:550, height:380, borderRadius:10, borderWidth:1, borderColor:"red"}} src={Img4} alt='' />
          </div>
        </div>
      </div>
      <footer style={{width:"100%", height:65, backgroundColor:'rgb(54, 54, 54)',marginTop:"5%", display:"flex", justifyContent:"center"}}>
        <p style={{fontSize:16, color:"white"}}>
            <b style={{marginRight: 50, color:"white"}}>&copy; Gabriel Afonso Santos Vieira</b>
           Para mais informações sobre esta profissão clique no link ao lado:  
            <a id="link" href="https://www.cursospm3.com.br/blog/desenvolvedor-de-software/#:~:text=Um%20desenvolvedor%20de%20software%2C%20ou,previsto%20para%20os%20pr%C3%B3ximos%20anos." 
            target="_blank">DesenvolvedorDeSoftware.com.br</a>
         </p>
      </footer>
    </div>
  );
}

export default App;
