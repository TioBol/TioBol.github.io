import React from 'react';
import ImagenNoticiaPrincipal from '../imagenes/image-web-3-mobile.jpg'
import '../hojasDeEstilo/Main.css';
import Noticia from './Noticia';
import Data from './Data'

const Main = () =>{
    return(
        <div className='contenedor-secundario'> 
            <main>
                <img src={ ImagenNoticiaPrincipal } alt='imagencita' />
                <div className='titulo-y-texto'>
                    <p className='h1'>The Bright Future of Web 3.0?</p>
                    <div className='textitos'>
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?
                        </p>
                        <button>Read more</button>
                    </div>
                </div>
            </main>
            <aside>
                    <h2>New</h2>
                    {
                        Data.map((obj)=> <Noticia prop={ obj } />)
                    }
            </aside>
                    
        </div>

    );
}

export default Main;