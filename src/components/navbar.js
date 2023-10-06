import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.png';
import './navbar.css'; // Importe o arquivo de estilo CSS
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function BrandExample() {
  return (
    <>
      <Navbar className="d-inline-block align-top black-navbar"> {/* Altera a classe para black-navbar */}
        <Container>
          <Navbar href="#home" className='marca'>
            <div className='text'> <img alt="" src={Logo} width="40" height="40" />
            <p className='nome'>Consultoria Kakttus</p>
            </div>
          </Navbar>

          <div className='iconContatos'>
            <a className='linksNavBar' href="mailto:seuemail@dominio.com">
              <EmailIcon />
            </a>

            <a className='linksNavBar' href="https://api.whatsapp.com/send?phone=SEUNUMERODOTELEFONE">
              <WhatsAppIcon />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
