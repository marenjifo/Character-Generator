import React from 'react';
import './Creacion.css';
import Context from '../../Utils/context';

function PasoUno(props){

    const context = React.useContext(Context);

    const handleName = (event) => {
        context.setCharacter({
            ...context.character,
            name: event.target.value,
          });
      }
    
      const handleColor = (event) => {
        context.setCharacter({
            ...context.character,
            color: event.target.value,
          });
      }
    

    return(

        <div className="contenedorCrea__opciones">

                <div className="opciones__input">
                    <div className="input__titulo">Name</div>
                    <input type="text" className="input__texto" value={context.character.name} onChange={handleName} maxLength="8"/>
                </div>

                <div className="opciones__input">
                <div className="input__titulo">Skin Color</div>
                <input type="color" className="input__color" onChange={handleColor} value={context.character.color}/>
                </div>


        </div>


    );

}



export default PasoUno;