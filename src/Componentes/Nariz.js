import React from 'react';
import PropTypes from 'prop-types';

function Nariz(props){


    const num2 = parseInt(props.num) - 10;

    var med2 = num2.toString();

    
    


    return(

  
        <svg  id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 916"><defs><style>.{`nariz-1{fill:#464646;}`}</style></defs><title>Nariz</title><ellipse className="nariz-1"  cx="190" cy="376" rx={props.num} ry={med2}/></svg>
             
    


    );

}

Nariz.propTypes = {
    num: PropTypes.string
}


export default Nariz;