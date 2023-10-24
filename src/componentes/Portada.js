import React from 'react';
import '../hojasDeEstilo/Portada.css'
import Header from './Header';
import Main from './Main';
import NoticiasAbajo from './NoticiasAbajo'
import Data2 from './Data2';

const Portada = () =>{
    return(
            <div className='contenedor-principal'>
                <Header />
                <Main />
                <div className='contenedor-terciario'>
                    {
                        Data2.map((AB)=> <NoticiasAbajo prop={AB}/>)
                    }
                </div>          
            </div>
    );
}

export default Portada;