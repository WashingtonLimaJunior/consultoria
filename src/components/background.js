import React from 'react';
import './background.css';
import Video from '../img/background.mp4';
import VideoMobile from '../img/video-mobile.mp4';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StorageIcon from '@mui/icons-material/Storage';
import LanIcon from '@mui/icons-material/Lan';
import HandymanIcon from '@mui/icons-material/Handyman';

const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
const smoothScroll = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const BackgroundSection = () => {
  return (
    
    <div className="video-background">
      {isMobileDevice ? (
        <video className='mobile-video' autoPlay muted loop>
          <source src={VideoMobile} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      ) : (
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      )}
      <div className="overlay">
      </div>
      <div className='green-block-left'>
        <h2>Transformando atividades em processos</h2>
        <p>Implantação de sistemas</p>
      </div>
      <div className='green-block-right'>
        <div className="icon-container" onClick={() => smoothScroll('section1')}>
          <CurrencyExchangeIcon />
          <span>Financeiro</span>
        </div>
        <div className="icon-container" onClick={() => smoothScroll('section2')}>
          <HandymanIcon />
          <span>Gestão de Ativos</span>
        </div>
        <div className="icon-container" onClick={() => smoothScroll('section3')}>
          <StorageIcon />
          <span>Armazenamento</span>
        </div>
        <div className="icon-container" onClick={() => smoothScroll('section4')}>
          <LanIcon />
          <span>Rede de Computadores</span>
        </div>
      </div>
    </div>
    
  );
};

export default BackgroundSection;
