import React from 'react';
import './Creacion.css';
import Context from '../../Utils/context';

function PasoDos(props){

    const context = React.useContext(Context);

    const buttons = [ 1, 2, 3, 4 ];
   

    const handleEars = (num) => {
      
      context.setCharacter({
        ...context.character,
        ears: num,
      });
    }


    const handleEyes = (num) => {
        context.setCharacter({
          ...context.character,
          eyes: num,
        });
      }



    

    return(

        <div className="contenedorCrea__opciones">


                <div className="opciones__input">
                    <div className="input__titulo">Ears</div>
                    <div className="input__seleccion">

                    {buttons.map(button => {

                      let className = "seleccion seleccion";
                      if(context.character.ears === button){
                        className += "--active";
                      }
                      
                    return <div key={button} className={className} style={{backgroundImage: `url(/imgs/ore${button}.png)`}} onClick={()=>handleEars(button)}></div>
                    })}
                        
                    </div>

                </div>

                <div className="opciones__input opciones">
                    <div className="input__titulo">Eyes</div>
                    <div className="input__seleccion">
                      
                      {buttons.map(button => {
                        
                        let className = "seleccion seleccion";
                        if(context.character.eyes === button){
                          className += "--active";
                        }
                      return <div key={button} className={className} style={{backgroundImage: `url(/imgs/ojo${button}.png)`}} onClick={()=>handleEyes(button)}></div>
                      })}

                    </div>
                </div>

               


        </div>


    );

}



export default PasoDos;