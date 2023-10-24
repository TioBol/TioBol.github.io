import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


const Reproductor = (props) => {
   
    
    return(
        <div>
            <h1>reprocutor</h1>
            <ReactAudioPlayer 
            src={props.audio}
            controls
            />
        </div>
    )
}

export default Reproductor;