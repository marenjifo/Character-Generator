import React from 'react';
import './Creacion.css';
import { Redirect, Link } from 'react-router-dom';
import Context from '../../Utils/context';
import Paso1 from './Paso1';
import Paso2 from './Paso2';
import Paso3 from './Paso3';
import Personaje from '../../Componentes/Personaje';
import { v4 as uuidv4 } from 'uuid';


function Creacion(props){
    
    
    const context = React.useContext(Context);
    const buttons = [ '1', '2', '3' ];

    React.useEffect(() => {
      if(!context.character.id){
        context.setCharacter({
          ...context.character,
          id: uuidv4(),
        });
      }
      
    }, [context.character.id]);
    
   
    if(!props.match.params.id) {
        return <Redirect to="/creacion/1" />;
      }
      
     

      const handleSave = () => {
        context.handleSave();
      }
   

    return(

        <div className="contenedorCrea">

            <div className="contenedorCrea__opciones">

                <div className="opciones__botones">
                
                
                {buttons.map(button => {

                      let className = "botones__cont";
                      if(props.match.params.id === button){

                        className += "--active";
                      }
                    return <Link key={button} to={`/creacion/${button}`}><button className={className} >{button}</button></Link>
                  })}
                </div>
                    
                {props.match.params.id === '1' && <Paso1 />}
                {props.match.params.id === '2' && <Paso2 />}
                {props.match.params.id === '3' && <Paso3 />}
                
                <div className="opciones__guardar">
                {context.character.name.length>2 && <Link to="/coleccion"><button className="guardar__boton" onClick={handleSave}>SAVE</button></Link>}
                </div>

                
            </div>

            <Personaje name={context.character.name} color={context.character.color} ears={context.character.ears} eyes={context.character.eyes} mouth={context.character.mouth} size={context.character.size} className="resultado"/>


        </div>





    );

}

export default Creacion;