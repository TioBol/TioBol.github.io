import axios from "axios";

const solicitudPalabra = async (state,palabra) =>{
    try{
        let peticion = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`);
        state(peticion.data)
        console.log(peticion.data[0].meanings[0].definitions)
        console.log(peticion.data)
    }catch (e){
        //alert(e.message);
        alert('no se ha encontrado la palabra, verifica que esté bien escrita')
        
    }

    
};

export{
    solicitudPalabra
}