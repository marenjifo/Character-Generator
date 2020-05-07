import React from 'react';
import './Coleccion.css';
import Context from '../../Utils/context';
import {Link } from 'react-router-dom';
import Personaje from '../../Componentes/Personaje';

function Coleccion(){

    const context = React.useContext(Context);

    const handleClear = () => {
        context.handleClear();
      }

    const handleCharacterDelete = (id) => {
        context.handleCharacterDelete(id);
      }
    
      const handleCharacterEdit = (id) => {
       
        context.handleCharacterEdit(id);
        return <Link to="/creacion" />;
      }

    return(

        <div className="contenedorCol">

            <div className="contenedorCol__arriba">
            <div className="arriba__div"></div>
            <p className="arriba__titulo">MY COLLECTION</p>
            <div className="arriba__div">
            { context.list.length > 0 && <button className="arriba__boton" onClick={handleClear}>C</button> }
            <Link to="/"><button className="arriba__boton">X</button></Link>
            </div>
            </div>

            <div className="contenedorCol__stamps">

                {context.list.map(character => {
            return <Personaje className="stamp" key={character.id} {...character} onDelete={() => handleCharacterDelete(character.id)} onEdit={() => handleCharacterEdit(character.id)}/>
            })}

            
              

            </div>

            <div className="opciones__guardar">
                
            </div>


        </div>





    );






}

export default Coleccion;