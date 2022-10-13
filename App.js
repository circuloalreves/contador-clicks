import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const darClick = () => {
    setNumClicks(numClicks+1);
  }

  const reiniciar = () => {
    setNumClicks(0);
  } 

  return (
    <div className="App">
        <h1>Contador de Clicks</h1>
      <div className='cont-principal'>
        <Contador numClicks={numClicks}/>
        <Boton 
        texto='Click'
        esBotonDeClick={true}
        manejarClick={darClick}
        />
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
