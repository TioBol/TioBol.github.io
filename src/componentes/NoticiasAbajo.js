import React from 'react';
import '../hojasDeEstilo/NoticiasAbajo.css';

const NoticiasAbajo = ({ prop }) => {
    return(
        <div className='noticia-abajo'>
            <img src={ prop.img } />
            <div className='a-un-lado'>
                <h6>
                    {prop.numero}
                </h6>
                <h5>{ prop.titulo }</h5>
                <p>{ prop.noticia }</p>

            </div>

        </div>
    )
}

export default NoticiasAbajo;