import './App.css'
import React from 'react'
import { Menu } from './components/menu.jsx'
import img from './assets/images/img-home-page.png'
import { useState } from 'react'

export default function App() {
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  const [mostrarVideo, setMostrarVideo] = useState(false);

  const mostrarOutraDescricao = () => {
    setMostrarDescricao(true);
  };

  const fecharDescricao = () => {
    setMostrarDescricao(false);
  };

  const acionarVideo = () => {
    setMostrarVideo(true);
  }

  const fecharVideo = () => {
    setMostrarVideo(false);
  }

  return (
    <>
      <Menu name01='Home Page' name02='Personagens' />
      <section className='s1'>
        <div className='main-img'>
          <img src={img} alt="" />
        </div>
        <div className='btn-wrap-content'>
          
          <div className='text-box'>
            <p>As vezes o melhor que você pode fazer não é o suficiente</p>
          </div>
          <button className='btn-show-description' onClick={mostrarOutraDescricao}>
            Ver Mais
          </button>
          {mostrarDescricao && (
          <div className='description-container'>
            <div className='close-button'>
              <button onClick={fecharDescricao}>Fechar</button>
            </div>
            <div className='description-title'>
              <h4 style={{color: '#000', marginBottom: '50px', textAlign: 'center'}}>O que é Dragon Ball?</h4>
            </div>
            <div className='description-text'>
              <p>Dragon Ball é uma franquia japonesa de anime e mangá criada por Akira Toriyama,
                conhecida por sua história de lutas, personagens icônicos e humor. O mangá foi publicado
                pela primeira vez em 1984 e deu origem a diversas adaptações em anime, incluindo Dragon Ball,
                Dragon Ball Z, Dragon Ball GT e Dragon Ball Super. </p>
            </div>
            <div className='video-btn-show'>
              <button onClick={acionarVideo}>Ver video</button>
            </div>
          </div>
        )}
        </div>
      </section>
      <section className={`s2 ${mostrarVideo ? 'mostrar' : 'esconder'}`}>
  <div className='video-conteiner'>
    <div className='btn-close-video'>
      <button onClick={fecharVideo}>Fechar</button>
    </div>
    <div className='video_embed'>
      <iframe src="https://www.youtube.com/embed/brrEa9K0j2k?si=15KzehACwLi0h3B_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </div>
</section>
    </>
  )
}
