import './index.css';

import logotipoPrincipal from './assets/logotipo-principal.png';
import lucas from './assets/lucas-removebg.png';
import pagamentos from './assets/pagamentos.svg';
import logotipoPreto from './assets/logotipo-preto.png';
import logotipoAmarelo from './assets/logotipo-amarelo.png';

import { FaAward, FaVideo } from 'react-icons/fa';
import { RiTimerFlashFill } from 'react-icons/ri';
import { BsWhatsapp, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { TbCircleNumber1,TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5 } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import whatsapp from './assets/whatsapp.png';
import discord from './assets/discord.png';
// import videoDiscord from './assets/video-discord.mp4';

import certificado1 from './assets/certificado-azure-fundamentals.png';
import certificado2 from './assets/certificado-data-analyst.png';
import certificado3 from './assets/certificado-exam-778.png';
import certificado4 from './assets/certificado-microsoft-certified-trainer.png';
import certificado5 from './assets/certificado-power-fundamentals.png';

export default function App() {
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
      <iframe className='video-principal' src="https://www.youtube.com/embed/o8sgZAkJmr8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <div className='botao-hotmart'>
        <a href='https://pay.hotmart.com/H68198125P?sck=HOTMART_PRODUCT_PAGE&off=xifp1ff4&hotfeature=32&_gl=1%2a1u3i0gi%2a_ga%2aNjczMTY2NTcwLjE2Nzg4MDIzOTA.%2a_ga_GQH2V1F11Q%2aMTY4NjgzNDMwNS40MC4wLjE2ODY4MzQzMDcuNTguMC4w&bid=1686834313220'><button type='button'>QUERO FAZER PARTE DO MUNDO DE DADOS</button></a>
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
      <div className='carossel'>
        <div className='carossel-item'>
          <h2>Despertar da mina de ouro</h2>
          <span>
            <p>Universo dos dados</p>
            <p>Onde eles estão, como se comportam, como posso me aproveitar desse momento da tecnologia?</p>
          </span>
        </div>
        <div className='carossel-item'>
          <h2>Mineração estratégica</h2>
          <span>
            <p>Demandas urgentes</p>
            <p>Como o mercado está se comportando com a nova era dos dados, qual perfil procuram, o que devo estudar para alcançar essas oportunidades?</p>
          </span>
        </div>
        <div className='carossel-item'>
          <h2>Fundição do conhecimento</h2>
          <span>
            <p>Unindo experiências</p>
            <p>Como usar todo meu aprendizado para aplicar no mundo dos dados?</p>
          </span>
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
      <div className='bonus'>
        <h1>Se você já trabalha com dados</h1>
        <p>Se você já trabalha com dados no Excel, Power Point, está a pouquíssimos passos para entregar valor de verdade para a sua empresa, ser reconhecido não vai demorar muito tempo.</p>
      </div>
      <div className='botao-hotmart'>
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
        {/* <video autoPlay muted loop>
          <source src={videoDiscord} type="video/mp4"/>
        </video> */}
      </div>
      <div className='footer'>
        <img src={logotipoAmarelo}/>
        <div className='footer-contato'>
          <a href='https://api.whatsapp.com/send?phone=5511964518005'><BsWhatsapp/></a>
          <a href='https://www.instagram.com/dados.amorim/'><BsInstagram/></a>
          <a href='https://www.linkedin.com/in/lucas-amorim-12885a118/'><BsLinkedin/></a>
          <a href='https://www.youtube.com/channel/UCgnPfc_2XXV4UYctKQSmcOg'><BsYoutube/></a>
        </div>
        <p>&#169; 2023 Todos os direitos reservados</p>
      </div>
    </div>
  );
}