import React, { useState, useEffect} from "react";
import { solicitudPalabra } from "../funciones/solicitudes";
import { v4 as uuidv4 } from "uuid";
import ReactAudioPlayer from "react-audio-player";


const Principal = () =>{
  
    const [palabra,setPalabra]=useState('');
    const [respuesta,setRespuesta] = useState(null);
    
    const solicitud = () =>{
        solicitudPalabra(setRespuesta,palabra);
        setPalabra('')      
    }

    return(      
        
    <div className="principal">
     
        <input type='text' required onChange={e=>setPalabra(e.target.value)} value={ palabra }></input>
     
        <button onClick={ solicitud }>Buscar</button>           
        
        
        <>      
        {
            respuesta != null ? 
            (  
               <>
                    <p>{ respuesta[0].phonetic }</p>
                    <p>{ respuesta[0].word }</p>     
                    <h2> { respuesta[0].phonetics[0].audio } </h2>
                    <button onClick={() => < ReactAudioPlayer src={respuesta[0].phonetics[0].audio}/>} ></button>
                    
                    
                    <ReactAudioPlayer 
                    src={respuesta[0].phonetics[0].audio}
                    control
                    />   
               </>
                              
            ): null       
        }
        <ul>
        {
            respuesta != null ? 
            (
                respuesta[0].meanings[0].definitions.map((respuesta)=>(
                    <li key={ uuidv4() }>
                        { respuesta.definition }
                    </li>    
                ))               
            ): null       
        }
        </ul>
        </>
    </div>

        
    );

};

export default Principal;