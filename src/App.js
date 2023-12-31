import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Principal from './componentes/Principal';
import Contenido from './componentes/Contenido';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal></Principal>}></Route>
          <Route path='/:id' element={ <Contenido></Contenido> }></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
