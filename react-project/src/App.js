import './index.css';

import logotipoPrincipal from './assets/logotipo-principal.png';
import { FaAward, FaVideo, FaUserCircle } from 'react-icons/fa';
import { RiTimerFlashFill, RiWhatsappFill } from 'react-icons/ri';
import { GiBrazil } from 'react-icons/gi';
import { BsDiagram3, BsWhatsapp, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { TbCircleNumber1,TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from 'react-icons/tb';
import { IoClose } from "react-icons/io5";

import lucas from './assets/lucas-removebg.png';
import pagamentos from './assets/pagamentos.svg';
import logotipoPreto from './assets/logotipo-preto.png';

import certificado1 from './assets/certificado-azure-fundamentals.png';
import certificado2 from './assets/certificado-data-analyst.png';
import certificado3 from './assets/certificado-exam-778.png';
import certificado4 from './assets/certificado-microsoft-certified-trainer.png';
import certificado5 from './assets/certificado-power-fundamentals.png';

function App() {
  return (
    <div className='body'>
      <img className='logotipo-principal' src={logotipoPrincipal}/>
      <h2>Entre para a área que mais cresce nos últimos anos.</h2>
      <p className='instrucao-video-principal'>Entenda por que tanta gente comum está mudando de vida, ganhando mais dinheiro e automatizando suas tarefas na empresa.</p>
      <iframe className='video-principal' src="https://www.youtube.com/embed/o8sgZAkJmr8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <div className='hotmart'>
        <a href='https://pay.hotmart.com/H68198125P?sck=HOTMART_PRODUCT_PAGE&off=xifp1ff4&hotfeature=32&_gl=1%2a1u3i0gi%2a_ga%2aNjczMTY2NTcwLjE2Nzg4MDIzOTA.%2a_ga_GQH2V1F11Q%2aMTY4NjgzNDMwNS40MC4wLjE2ODY4MzQzMDcuNTguMC4w&bid=1686834313220'>
          <button className='botao-hotmart' type='button'>QUERO FAZER PARTE DO MUNDO DE DADOS</button>
        </a>
        <img className='formas-pagamento' src={pagamentos}/>
      </div>
      <div className='argumentos-convencimento'>
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
          <th className='tabela-outro'><IoClose/>Outros cursos</th>
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
      <div className='add1'>
        <h1>Se está começando do zero:</h1>
        <p>Se você está começando do zero, não tem problema, este método tem como requisito um notebook e muita força de vontade, o resto deixa comigo.</p>
      </div>
      <div className='add1'>
        <h1>Se você já trabalha com dados</h1>
        <p>Se você já trabalha com dados no Excel, Power Point, está a pouquíssimos passos para entregar valor de verdade para a sua empresa, ser reconhecido não vai demorar muito tempo.</p>
      </div>
      <h1 className='h1'>FAQ – Perguntas Frequentes</h1>
      <div className='bonus'>
        <div>
          <h2>Precisa de um Super Computador?</h2>
          <p>Não, diferente do que dizem por aí, você precisará ter um computador ou notebook com 8Gb de memória RAM, com windows 8 ou superior.</p>
        </div>
      </div>
      <div className='bonus'>
        <div>
          <h2>Em quanto tempo vou aprender?</h2>
          <p>Não existe um tempo exato, cada pessoa tem uma capacidade de absorver diferente, o vai contar aqui é a sua força de vontade em colocar em prática tudo que está aprendendo.</p>
        </div>
      </div>
      <div className='bonus'>
        <div>
          <h2>Como solicito suporte durante o aprendizado?</h2>
          <p>Após entrar no Power BI Flex, você ganhará acesso exclusivo ao meu grupo de mentorados no discord, onde poderá tirar suas dúvidas direto comigo.</p>
        </div>
      </div>
      <div className='bonus'>
        <div>
          <h2>As Aulas são gravadas ou AO VIVO?</h2>
          <p>Todas as aulas são gravadas, com ressalva de novas atualizações da plataforma que posso fazer ao vivo com os alunos.</p>
        </div>
      </div>
      <div className='bonus'>
        <div>
          <h2>Funciona para quem não sabe programar?</h2>
          <p>Sim, não é um requisito saber programar, você aprenderá a utilizar os recursos Drag and Drop, ou seja, arrastar e soltar, a ferramenta foi criada para ser fácil de usar.</p>
        </div>
      </div>
      <div className='garantia whatsapp'>
        <h1 className='garantia-h1'>Alguma dúvida?</h1>
        <p className='garantia-p'>Se você tem alguma dúvida, nós temos um time que está pronto para responder qualquer pergunta no WhatApp. É só clicar no botão abaixo e nos chamar.</p>
        <a href='https://api.whatsapp.com/send?phone=5511964518005'>
          <button type='button'><RiWhatsappFill/>WHATSAPP</button>
        </a>
      </div>















      <div className='hotmart'>
        <a href='https://pay.hotmart.com/H68198125P?sck=HOTMART_PRODUCT_PAGE&off=xifp1ff4&hotfeature=32&_gl=1%2a1u3i0gi%2a_ga%2aNjczMTY2NTcwLjE2Nzg4MDIzOTA.%2a_ga_GQH2V1F11Q%2aMTY4NjgzNDMwNS40MC4wLjE2ODY4MzQzMDcuNTguMC4w&bid=1686834313220'>
          <button className='botao-hotmart' type='button'>QUERO FAZER PARTE DO MUNDO DE DADOS</button>
        </a>
        <img className='formas-pagamento' src={pagamentos}/>
      </div>
      <h1 className='h1'>Where can I get some?</h1>
      <p className='h2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't</p>
      <div className='etapa-aprendizado'>
        <TbCircleNumber1/>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
        </div>
      </div>
      <div className='etapa-aprendizado'>
        <TbCircleNumber2/>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
        </div>
      </div>
      <div className='etapa-aprendizado'>
        <TbCircleNumber3/>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
        </div>
      </div>
      <div className='etapa-aprendizado'>
        <TbCircleNumber4/>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
        </div>
      </div>
      <div className='sobre-mim'>
        <div className='conteudo'>
          <h1 className='sobre-mim-h1'>Quem é Lucas Amorim?</h1>
          <p className='sobre-mim-p'>Lucas Amorim é uma das mentes por trás do método Power BI FLEX, atuando na área de dados desde 2016, pode vivenciar os mais diversos projetos em sua carreira, desde pequenas empresas com 50 colaboradores até as Big Techs, colecionando diferentes certificações reconhecidas pela Microsoft.<br/>
          Sua expertise vai além de ferramentas, ele consegue trazer cases do mundo real para que você aprenda o que as empresas de fato necessitam no dia a dia, sem letrinhas miúdas.<br/>
          Depois de anos ajudando diferentes pessoas e comunidades técnicas na resolução de problemas, Lucas decidiu consolidar tudo em um único método (Power BI FLEX), já que quando iniciou nessa jornada em 2016 era muito complicado aprender de forma rápida e objetiva.
          </p>
          <div>
            <img src={certificado1}/>
            <img src={certificado2}/>
            <img src={certificado3}/>
            <img src={certificado4}/>
            <img src={certificado5}/>
          </div>
        </div>
        <img className='lucas' src={lucas}/>
      </div>
      <div className='footer'>
        <img src={logotipoPrincipal}/>
        <div className='footer-contato'>
          <a href='https://api.whatsapp.com/send?phone=5511964518005'><BsWhatsapp/></a>
          <a href='https://www.instagram.com/dados.amorim/'><BsInstagram/></a>
          <a href='https://www.linkedin.com/in/lucas-amorim-12885a118/'><BsLinkedin/></a>
          <a href='https://www.youtube.com/channel/UCgnPfc_2XXV4UYctKQSmcOg'><BsYoutube/></a>
        </div>
        <div>
          <p>Termos de Uso | Políticas</p>
          <p>&#169; 2023 Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default App;
