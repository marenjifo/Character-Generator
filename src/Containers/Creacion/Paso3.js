import React from 'react';
import './Creacion.css';
import PropTypes from 'prop-types';
import Context from '../../Utils/context';

function PasoTres(props){

    const context = React.useContext(Context);
    const buttons = [ 1, 2, 3, 4 ];

    const handleMouth = (num) => {
        context.setCharacter({
            ...context.character,
            mouth: num,
          });
        }
    

    const handleSize = (event) => {
        context.setCharacter({
            ...context.character,
            size: event.target.value,
          });

    }
    

    return(

        <div className="contenedorCrea__opciones">

                <div className="opciones__input">
                    <div className="input__titulo">Mouth</div>
                    <div className="input__seleccion">

                        {buttons.map(button => {

                            let className = "seleccion seleccion";
                            if(context.character.mouth === button){
                            className += "--active";
                            }

                        return <div key={button} className={className} style={{backgroundImage: `url(/imgs/boc${button}.png)`}} onClick={()=>handleMouth(button)}></div>
                        })}

                    </div>

                </div>

                <div className="opciones__input opciones">
                    <div className="input__titulo">Nose Size</div>
                    <input type="range" className="input__range" min="25" max="40" value={context.character.size} onChange={handleSize}/>

                 
                </div>

               


        </div>


    );

}

PasoTres.propTypes = {
    nombre: PropTypes.string
}

export default PasoTres;