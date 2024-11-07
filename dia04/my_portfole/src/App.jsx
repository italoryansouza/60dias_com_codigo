import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Quebra from './Quebra'

import foto from './assets/foto_redonda.png'

function App() {

  return (
    <>
      <div id="header">

        <h1>Ítalo Ryan</h1>

        <ul>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Projetos</li>
        </ul>

      </div>

      <div id='main'>
        
        <div id="intro">

          <img src={foto} alt="foto_minha"/>
          <p>
            Me chamo Ítalo Ryan e sou um entusiasta de tecnologia.<Quebra/> 
            Atualmente trabalho com projetos  front-end utilizando<Quebra/>
            ferramentas usuais, como HTML, CSS e JavaScript.  Nesse<Quebra/>
            mundo tão vasto que é o desenvolvimento web estou me <Quebra/>
            aventurando e realizando projetos para obter experiência <Quebra/>
            e um bom portifólio.
          </p>
             
        </div>

      </div>
      
    </>
  )
}

export default App
