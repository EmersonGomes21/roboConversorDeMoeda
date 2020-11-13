import React from 'react';
import iconWhatsapp from './assets/icons/icons8-whatsapp.svg'
import './App.css';

function App() {

  function Copiar() {

    const textInput = document.getElementById('text');
    const copyButton = document.getElementById('copy');

    copyButton.addEventListener('click', () => {
      textInput.select();
      document.execCommand('copy');
    });

    function GerarLink() {
      let numbers = 12345;
      let TextApi = "https://whatsapp.api/";
      let result = TextApi + numbers;

      return result;
    }
    

  }
  return (
    <div className="App">
      <header className="header">

        <h1 className="Title">Gerador de link para Whatsapp</h1>
        <img src={iconWhatsapp} />
      </header>

      <main className="main">
        <div>
          <input className="input" id="number" type="text" placeholder="(DDD + Número) 91985125012" />

        </div>
        <div className="copiar">
          <input className="input" id="text-link" type="text" value={result} />

          <button id="copy" onClick={Copiar}>Copiar</button>
        </div>
      </main>

    </div>
  );
}

export default App;
