import React from 'react';

function Noticia ({ prop }) {
    return(
            <div className='new-noticia'>
                <h4>{prop.titulo}</h4>
                <p>{prop.cuerpo}</p>
            </div>
    );
}

export default Noticia;