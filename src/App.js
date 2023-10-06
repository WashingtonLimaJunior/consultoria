import React from 'react';
import './App.css';
import BackgroundSection from './components/background';
import Financeiro from './components/financeiro';
import BrandExample from './components/navbar';
import './components/navbar.css'
import './components/background'
import SobreNos from './components/sobreNos';
import GestaoDeAtivos from './components/gestaoDeAtivos';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="transparent-navbar">
      <BrandExample />
      </header>
      <div className='primeira-pagina'>
      <div className='backsession'><BackgroundSection /></div>
      <div className='sobre-nos-container-app'><SobreNos/></div>
      </div>
      <div className='financeiro-container-app'  id="section1"><Financeiro/></div>
      <div className='gestaoDeAtivos-container-app' id="section2"><GestaoDeAtivos /></div>      
      <div className='footer-app'><Footer /></div> 
      
    </div>
  );
}

export default App;
