import React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import YouTube from 'react-youtube';
import './financeiro.css'


const Financeiro = () => {
  // ID do vídeo do YouTube que você deseja incorporar
  const videoId = '1WIWrmc-rBk';

  return (
    <div className="financeiro-container">
      <div className="financeiro-content">
        <div className='iconFinanceiro'>
        <CurrencyExchangeIcon fontSize="large" className='iconFinanceiro' />
        </div>
        <div className="text-content">
          <h2>A Importância de um ERP Bem Implantado</h2>
          <p>
            Descreva aqui o texto sobre a importância de um sistema ERP bem implantado e seus benefícios para os negócios.
          </p>
        </div>
      </div>
      <div className="video-container">
        <iframe
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>      
    </div>
  );
}

export default Financeiro;
