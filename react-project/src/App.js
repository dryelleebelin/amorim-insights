import './index.css';

import logotipoPrincipal from './assets/logotipo-principal.png';
import { FaAward, FaVideo, FaUserCircle } from 'react-icons/fa';
import { RiTimerFlashFill } from 'react-icons/ri';
import { GiBrazil } from 'react-icons/gi';
import { BsDiagram3, BsWhatsapp, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { TbCircleNumber1,TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from 'react-icons/tb';

import lucas from './assets/lucas-removebg.png';
import pagamentos from './assets/pagamentos.png';

function App() {
  return (
    <div className='body'>
      <img className='logotipo-principal' src={logotipoPrincipal}/>
      <p className='h2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <p className='h2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <h2 className='instrucao-video-principal'>Contrary to popular belief, Lorem Ipsum is not simply random text it has roots in a piece of classical Latin literature</h2>
      <iframe className='video-principal' src="https://www.youtube.com/embed/o8sgZAkJmr8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <div className='argumentos-convencimento'>
        <div>
          <RiTimerFlashFill/>
          <p>Lorem Ipsum is simply</p>
        </div>
        <div>
          <FaVideo/>
          <p>Lorem Ipsum is simply</p>
        </div>
        <div>
          <FaAward/>
          <p>Lorem Ipsum is simply</p>
        </div>
      </div>
      <div className='pagamento'>
        <p>por apenas:</p>
        <div>
          <h2>12x</h2>
          <h1>49,60</h1>
        </div>
        <p>ou R$ <span>497,00</span> à vista</p>
      </div>
      <a className='plataforma-hotmart' href='https://pay.hotmart.com/H68198125P?sck=HOTMART_PRODUCT_PAGE&off=xifp1ff4&hotfeature=32&_gl=1%2a1u3i0gi%2a_ga%2aNjczMTY2NTcwLjE2Nzg4MDIzOTA.%2a_ga_GQH2V1F11Q%2aMTY4NjgzNDMwNS40MC4wLjE2ODY4MzQzMDcuNTguMC4w&bid=1686834313220'>
        <button className='botao-pagamento' type='button'>Lorem Ipsum</button>
      </a>
      <p className='span-pagamento'>Contrary to popular belief Lorem</p>
      <img className='formas-pagamento' src={pagamentos}/>
      <h1 className='h1'>It is a long established fact that a reader will be distracted</h1>
      <h2 className='h2'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text a long established fact that a reader</h2>
      <div className='relatos'>
        <div className='relato'>
          <FaUserCircle/>
          <div>
            <h2>What is Lorem Ipsum</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
        <div className='relato'>
          <FaUserCircle/>
          <div>
            <h2>What is Lorem Ipsum</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
      <div className='veiculos'>
        <p className='veiculo-1'></p>
        <div>
          <p className='veiculo-2'></p>
          <p className='veiculo-3'></p>
        </div>
        <p className='veiculo-4'></p>
      </div>
      <h1 className='h1'>Lorem Ipsum is not simply</h1>
      <p className='h2'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. There are many variations of passages of Lorem Ipsum available, but the majority have suffere.</p>
      <div className='argumento-logico'>
        <GiBrazil/>
        <h1>If you are going to use a passage of Lorem Ipsum</h1>
      </div>
      <h1 className='h1'>All the Lorem Ipsum generators</h1>
      <p className='h2'>All the Lorem Ipsum generators on the Internet tend to repeat on the Internet</p>
      <div className='diagrama'>
        <BsDiagram3/><BsDiagram3/>
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
      <div className='garantia'>
        <h1 className='garantia-h1'>Lorem Ipsum is</h1>
        <p className='garantia-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident.</p>
      </div>
      <div className='pagamento'>
        <p>por apenas:</p>
        <div>
          <h2>12x</h2>
          <h1>49,60</h1>
        </div>
        <p>ou R$ <span>497,00</span> à vista</p>
      </div>
      <a className='plataforma-hotmart' href='https://pay.hotmart.com/H68198125P?sck=HOTMART_PRODUCT_PAGE&off=xifp1ff4&hotfeature=32&_gl=1%2a1u3i0gi%2a_ga%2aNjczMTY2NTcwLjE2Nzg4MDIzOTA.%2a_ga_GQH2V1F11Q%2aMTY4NjgzNDMwNS40MC4wLjE2ODY4MzQzMDcuNTguMC4w&bid=1686834313220'>
        <button className='botao-pagamento' type='button'>Lorem Ipsum</button>
      </a>
      <p className='span-pagamento'>Contrary to popular belief Lorem</p>
      <img className='formas-pagamento' src={pagamentos}/>
      <h1 className='h1'>Where does it come from?</h1>
      <p className='h2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className='bonus'>
        <TbCircleNumber1/>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
        </div>
      </div>
      <div className='bonus'>
        <TbCircleNumber2/>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
        </div>
      </div>
      <div className='sobre-mim'>
        <div>
          <h1 className='sobre-mim-h1'>What is Lorem Ipsum</h1>
          <p className='sobre-mim-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <img className='lucas' src={lucas}/>
      </div>
      <div className='footer'>
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
