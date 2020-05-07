import React from 'react';
import PropTypes from 'prop-types';
import Orejas1 from './Orejas1';
import Orejas2 from './Orejas2';
import Orejas3 from './Orejas3';
import Orejas4 from './Orejas4';
import Piel from './Piel';
import Cuerpo from './Cuerpo';
import Ojos1 from './Ojos1';
import Ojos2 from './Ojos2';
import Ojos3 from './Ojos3';
import Ojos4 from './Ojos4';
import Boca1 from './Boca1';
import Boca2 from './Boca2';
import Boca3 from './Boca3';
import Boca4 from './Boca4';
import Nariz from './Nariz';
import './Personaje.css';
import {Link } from 'react-router-dom';


function Personaje({ name, color, ears, eyes, mouth, size, className, onDelete, onEdit }){

    const [ display, setDisplay ] = React.useState(0);

    
     const handleDisplay = () => {
         setDisplay(100);
         
     }

     const handleNotDisplay = () => {
         setDisplay(0);
         
     }

     const divStyle = {
         opacity: {display}
     };
     

    return(

    <div className={className} onMouseEnter={handleDisplay} onMouseLeave={handleNotDisplay}>
             
        <div className={`${className}__personaje`} > {/* Position: Relative */}

        <div className="personaje__orejas"> {/* Position: Static */}
        {ears === 1 && <Orejas1 color={color} />}
        {ears === 2 && <Orejas2 color={color} />}
        {ears === 3 && <Orejas3 color={color} />}
        {ears === 4 && <Orejas4 color={color} />}
        </div>

        <div className="personaje__piel"> {/* Position: Absolute */}
        <Piel color={color} />
        </div>

        <div className="personaje__cuerpo"> {/* Position: Absolute */}
        <Cuerpo />
        </div>

        <div className="personaje__ojos"> {/* Position: Absolute */}
        {eyes === 1 && <Ojos1 />}
        {eyes === 2 && <Ojos2 />}
        {eyes === 3 && <Ojos3 />}
        {eyes === 4 && <Ojos4 />}
        </div>

        <div className="personaje__boca"> {/* Position: Absolute */}
        {mouth === 1 && <Boca1 />}
        {mouth === 2 && <Boca2 />}
        {mouth === 3 && <Boca3 />}
        {mouth === 4 && <Boca4 />}
        </div>

        <div className="personaje__nariz"> {/* Position: Absolute */}
        <Nariz num={size}/>
        </div>

        

        </div>

        <div className={`${className}__nombre`}> 
        <p className={`${className}__texto`}>{name}</p> 
        </div>
        
        
        <div className={`${className}__botones`} style={{opacity: display + '%'}}>
        <Link to="/creacion"><button className="stamp__boton" onClick={onEdit}>edit</button></Link>
        <button className="stamp__boton" onClick={onDelete}>X</button>
        </div>
        
    </div>

    );

}

Personaje.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    ears: PropTypes.number,
    eyes: PropTypes.number,
    mouth: PropTypes.number,
    size: PropTypes.string,
    className: PropTypes.string,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}


export default Personaje;