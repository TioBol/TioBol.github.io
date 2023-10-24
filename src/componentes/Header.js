import React, { useState} from 'react';
import Logo from '../imagenes/logo.svg';
import '../hojasDeEstilo/Header.css';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    
    const [response,setResponse] = useState(true);
    
    const encender = () =>{
        setResponse(!response)
    };
   
    return(
        <>
            <header>
                <div className='logo-principal'>
                    <img 
                    src={ Logo }
                    alt='imagen que frao'
                    />    
                </div>
                <div className='boton-contenedor'>
                    <div className='boton-response-open' onClick={ encender } >
                        < AiOutlineMenu />
                    </div>  
                </div>
                <nav className={ response ? 'oculto' : 'visible' }>
                    <div className='opaco'>

                    </div>
                    
                    <div className='boton-response-close' onClick={ encender } >
                        < AiOutlineClose />
                    </div>
                                                          
                    <ul>
                        <a href='#'>
                                Home                        
                        </a>
                        <a href='#'>
                            New
                        </a>
                        <a href='#'>
                            Popular
                        
                        </a>
                        <a href='#'>
                            Trending
                        </a>
                        <a href='#'>
                            Categories
                        </a>

                    </ul>

                </nav>
            </header>
                    
        </>
    );
}
 export default Header;
