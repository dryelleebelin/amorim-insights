import './index.css';
import Carousel from './Carousel';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import logotipoPrincipal from './assets/logotipo-principal.png';
import lucas from './assets/lucas-removebg.png';
import pagamentos from './assets/pagamentos.svg';
import logotipoPreto from './assets/logotipo-preto.png';
import logotipoAmarelo from './assets/logotipo-amarelo.png';

import { FaAward, FaVideo } from 'react-icons/fa';
import { RiTimerFlashFill } from 'react-icons/ri';
import { TbCircleNumber1,TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5 } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import whatsapp from './assets/whatsapp.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import youtube from './assets/youtube.png';
import discord from './assets/discord.png';
import videoDiscord from './assets/video-discord.mp4';

import excel1 from './assets/Excel 1.png';
import excel2 from './assets/Excel 2.png';
import powerbi1 from './assets/Power BI 1.png';
import powerbi2 from './assets/Power BI 2.png';

import modulo1 from './assets/MÓDULO 01 - O QUE É BI E POWER BI.png';
import modulo2 from './assets/MÓDULO 02 - SAIBA TRATAR O SEUS DADOS.png';
import modulo3 from './assets/MÓDULO 03 - MODELAGEM DE DADOS.png';
import modulo4 from './assets/MÓDULO 04 - KPIS NO DAX.png';
import modulo5 from './assets/MÓDULO 05 - HORA DE IMPRESSIONAR COM OS GRÁFICOS.png';
import modulo6 from './assets/MÓDULO 06 - TUDO SOBRE POWER BI SERVIÇO.png';
import moduloBonus from './assets/AULAS BÔNUS .png';
import moduloLives from './assets/LIVES TIRA DÚVIDAS.png';

import certificado1 from './assets/certificado-azure-fundamentals.png';
import certificado2 from './assets/certificado-data-analyst.png';
import certificado3 from './assets/certificado-exam-778.png';
import certificado4 from './assets/certificado-microsoft-certified-trainer.png';
import certificado5 from './assets/certificado-power-fundamentals.png';

export default function App() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
  })

  useEffect(() => {
    sr.reveal('.badges, .tabela, .modulos-h1, .modulo, .bonus');
    sr.reveal(`.discord`, {origin: 'bottom'})
    sr.reveal(`.sobre-mim-texto`, {origin: 'left'})
    sr.reveal(`.lucas`, {origin: 'right'})
  }, []);

  return (
    <div className='body'>
      <a className='whatsapp' href='https://api.whatsapp.com/send?phone=5511964518005'>
        <img src={whatsapp}/>
      </a>
      <img className='logotipo-principal' src={logotipoPrincipal}/>
      <div className='headline'>
        <h2>Entre para a área que mais cresce nos últimos anos!</h2>
        <p>Entenda por que tanta gente comum está mudando de vida, ganhando mais dinheiro e automatizando suas tarefas na empresa.</p>
      </div>
      <iframe className='video-principal' src="https://www.youtube.com/embed/6ZQuWfH7XnA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <div className='botao-hotmart'>
        <a href='https://pay.hotmart.com/H68198125P?sck=HOTMART_PRODUCT_PAGE&off=xifp1ff4&hotfeature=32&_gl=1%2a1u3i0gi%2a_ga%2aNjczMTY2NTcwLjE2Nzg4MDIzOTA.%2a_ga_GQH2V1F11Q%2aMTY4NjgzNDMwNS40MC4wLjE2ODY4MzQzMDcuNTguMC4w&bid=1686834313220'>
        <button type='button'>QUERO FAZER PARTE DO MUNDO DE DADOS</button></a>
        <img src={pagamentos}/>
      </div>
      <div className='badges'>
        <div>
          <RiTimerFlashFill/>
          <p>Acesso imediato</p>
        </div>
        <div>
          <FaVideo/>
          <p>Suporte ao vivo no Discord</p>
        </div>
        <div>
          <FaAward/>
          <p>Garantia de 15 dias</p>
        </div>
      </div>
      <table className='tabela'>
        <tr>
          <th><IoClose/>Outros cursos</th>
          <th><img src={logotipoPreto}/></th>
        </tr>
        <tr>
          <td>Sem suporte</td>
          <td>Suporte em até 48 horas</td>
        </tr>
        <tr>
          <td>Conteúdo desatualizado</td>
          <td>Atualizações Mensais da ferramenta</td>
        </tr>
        <tr>
          <td>Exercícios fora da realidade</td>
          <td>Exercícios do mundo real</td>
        </tr>
      </table>
      <Carousel/>
      <div className='antes-depois'>
        <div className='antes'>
          <h2>Chega de analisar as informações assim</h2>
          <div>
            <img src={excel1}/>
            <img src={excel2}/>
          </div>
        </div>
        <div className='depois'>
          <h2>E passe a analisar desta maneira</h2>
          <div>
            <img src={powerbi1}/>
            <img src={powerbi2}/>
          </div>
        </div>
      </div>
      <h1 className='modulos-h1'>Conheça um pouco do conteúdo que você vai aprender!</h1>
      <div className='modulos'>
        <div className='modulo'>
          <img src={modulo1}/>
          <p>MÓDULO 01</p>
          <span></span>
          <p>O QUE É BI E POWER BI</p>
        </div>
        <div className='modulo'>
          <img src={modulo2}/>
          <p>MÓDULO 02</p>
          <span></span>
          <p>SAIBA TRATAR O SEUS DADOS</p>
        </div>
        <div className='modulo'>
          <img src={modulo3}/>
          <p>MÓDULO 03</p>
          <span></span>
          <p>MODELAGEM DE DADOS</p>
        </div>
        <div className='modulo'>
          <img src={modulo4}/>
          <p>MÓDULO 04</p>
          <span></span>
          <p>KPIS NO DAX</p>
        </div>
        <div className='modulo'>
          <img src={modulo5}/>
          <p>MÓDULO 05</p>
          <span></span>
          <p>HORA DE IMPRESSIONAR COM OS GRÁFICOS</p>
        </div>
        <div className='modulo'>
          <img src={modulo6}/>
          <p>MÓDULO 06</p>
          <span></span>
          <p>TUDO SOBRE POWER BI SERVIÇO</p>
        </div>
        <div className='modulo modulo-bonus'>
          <img src={moduloBonus}/>
          <p>AULAS BÔNUS</p>
        </div>
        <div className='modulo modulo-bonus'>
          <img src={moduloLives}/>
          <p> LIVES TIRA DÚVIDAS</p>
        </div>
      </div>
      <div className='sobre-mim'>
        <div className='sobre-mim-texto'>
          <h1>Quem é Lucas Amorim?</h1>
          <p>Lucas Amorim é uma das mentes por trás do método Power BI FLEX, atuando na área de dados desde 2016, pode vivenciar os mais diversos projetos em sua carreira, desde pequenas empresas com 50 colaboradores até as Big Techs, colecionando diferentes certificações reconhecidas pela Microsoft.<br/>
          Sua expertise vai além de ferramentas, ele consegue trazer cases do mundo real para que você aprenda o que as empresas de fato necessitam no dia a dia, sem letrinhas miúdas.<br/>
          Depois de anos ajudando diferentes pessoas e comunidades técnicas na resolução de problemas, Lucas decidiu consolidar tudo em um único método (Power BI FLEX), já que quando iniciou nessa jornada em 2016 era muito complicado aprender de forma rápida e objetiva.
          </p>
          <div className='certificados'>
            <img src={certificado1}/>
            <img src={certificado2}/>
            <img src={certificado3}/>
            <img src={certificado4}/>
            <img src={certificado5}/>
          </div>
        </div>
        <img className='lucas' src={lucas}/>
      </div>
      <div className='bonus'>
        <h1>Se está começando do zero:</h1>
        <p>Se você está começando do zero, não tem problema, este método tem como requisito um notebook e muita força de vontade, o resto deixa comigo.</p>
      </div>
      <div className='bonus bonus2'>
        <h1>Se você já trabalha com dados</h1>
        <p>Se você já trabalha com dados no Excel, Power Point, está a pouquíssimos passos para entregar valor de verdade para a sua empresa, ser reconhecido não vai demorar muito tempo.</p>
      </div>
      <div className='botao-hotmart botao-hotmart-2'>
        <a href='https://pay.hotmart.com/H68198125P?sck=HOTMART_PRODUCT_PAGE&off=xifp1ff4&hotfeature=32&_gl=1%2a1u3i0gi%2a_ga%2aNjczMTY2NTcwLjE2Nzg4MDIzOTA.%2a_ga_GQH2V1F11Q%2aMTY4NjgzNDMwNS40MC4wLjE2ODY4MzQzMDcuNTguMC4w&bid=1686834313220'><button type='button'>QUERO FAZER PARTE DO MUNDO DE DADOS</button></a>
        <img src={pagamentos}/>
      </div>
      <div className='faq'>
        <h1>FAQ – Perguntas Frequentes</h1>
        <div className='faq-item'>
          <TbCircleNumber1/>
          <div>
            <h2>Precisa de um super computador?</h2>
            <p>Não, diferente do que dizem por aí, você precisará ter um computador ou notebook com 8Gb de memória RAM, com windows 8 ou superior.</p>
          </div>
        </div>
        <div className='faq-item'>
          <TbCircleNumber2/>
          <div>
            <h2>Em quanto tempo vou aprender?</h2>
            <p>Não existe um tempo exato, cada pessoa tem uma capacidade de absorver diferente, o vai contar aqui é a sua força de vontade em colocar em prática tudo que está aprendendo.</p>
          </div>
        </div>
        <div className='faq-item'>
          <TbCircleNumber3/>
          <div>
            <h2>Como solicito suporte durante o aprendizado?</h2>
            <p>Após entrar no Power BI Flex, você ganhará acesso exclusivo ao meu grupo de mentorados no discord, onde poderá tirar suas dúvidas direto comigo.</p>
          </div>
        </div>
        <div className='faq-item'>
          <TbCircleNumber4/>
          <div>
            <h2>As aulas são gravadas ou AO VIVO?</h2>
            <p>Todas as aulas são gravadas, com ressalva de novas atualizações da plataforma que posso fazer ao vivo com os alunos.</p>
          </div>
        </div>
        <div className='faq-item'>
          <TbCircleNumber5/>
          <div>
            <h2>Funciona para quem não sabe programar?</h2>
            <p>Sim, não é um requisito saber programar, você aprenderá a utilizar os recursos Drag and Drop, ou seja, arrastar e soltar, a ferramenta foi criada para ser fácil de usar.</p>
          </div>
        </div>
      </div>
      <div className='discord'>
        <img src={discord}/>
        <h2>Suporte como você nunca viu em nenhum curso.</h2>
        <video autoPlay muted loop>
          <source src={videoDiscord} type="video/mp4"/>
        </video>
      </div>
      <div className='footer'>
        <img src={logotipoAmarelo}/>
        <div className='footer-contato'>
          <a href='https://api.whatsapp.com/send?phone=5511964518005'><img src={whatsapp}/></a>
          <a href='https://www.instagram.com/dados.amorim/'><img src={instagram}/></a>
          <a href='https://www.linkedin.com/in/lucas-amorim-12885a118/'><img src={linkedin}/></a>
          <a href='https://www.youtube.com/channel/UCgnPfc_2XXV4UYctKQSmcOg'><img src={youtube}/></a>
        </div>
        <p>&#169; 2023 Todos os direitos reservados</p>
      </div>
    </div>
  );
}