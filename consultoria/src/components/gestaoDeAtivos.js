import React from 'react';
import HandymanIcon from '@mui/icons-material/Handyman';
import YouTube from 'react-youtube';
import './gestaoDeAtivos.css'


const gestaoDeAtivos = () => {
  // ID do vídeo do YouTube que você deseja incorporar
  const videoId = '1WIWrmc-rBk';

  return (
    <div className="gestaoDeAtivos-container">
      <div className="gestaoDeAtivos-content">
        <div className='icongestaoDeAtivos'>
        <HandymanIcon fontSize="large" className='icongestaoDeAtivos' />
        </div>
        <div className="text-content">
          <h2>Como a Gestão de Ativos influencia o desenvolvimento empresa?</h2>
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

export default gestaoDeAtivos;
