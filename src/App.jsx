import './App.css'
import React from 'react'
import { Menu } from './components/menu.jsx'
import img from './assets/images/img-home-page.png'
import { useState } from 'react'

export default function App() {
  const [mostrarSection, setMostrarSection] = useState(false);

  const mostrarOutraSection = () => {
    setMostrarSection(true);
  };

  return (
    <>
      <Menu name01='Home Page' name02='Personagens' />
      <section className='s1'>
        <div className='main-img'>
          <img src={img} alt=""/>
        </div>
        <div className='btn-wrap-content'>
          <div className='text-box'>
          <p>Slogan dos santos do capeta junior</p>
          </div>
          <button className='btn-show-description' onClick={mostrarOutraSection}>
           Ver Mais
          </button>
        </div>
      </section>
      { mostrarSection && (
        <section className='s2'>
        <div className='close-button'></div>
        <div className='description-title'></div>
        <div className='description-text'>
          <p>Dragon Ball é uma franquia japonesa de anime e mangá criada por Akira Toriyama, 
            conhecida por sua história de lutas, personagens icônicos e humor. O mangá foi publicado 
            pela primeira vez em 1984 e deu origem a diversas adaptações em anime, incluindo Dragon Ball, 
            Dragon Ball Z, Dragon Ball GT e Dragon Ball Super. </p>
        </div>
      </section>)}
    </>
  )
}
