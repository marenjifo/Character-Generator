import React from 'react';
import './Inicio.css';
import {Link } from 'react-router-dom';

function Inicio(){

    return(

        <div className="contenedor">
            
            <div className="contenedor__imagen"></div>
            <div className="contenedor__contenido">
                    <div className="contenido__titulo">
                    <p className="titulo__principal">CHARACTER</p>
                    <p className="titulo__subtitulo">GENERATOR</p>
                    </div>
                    <div className="contenido__botones">
                     
                    <Link to="/creacion/"><button className="botones__con">CREATE</button></Link>
                    <Link to="/coleccion"><button className="botones__con">COLLECTION</button></Link>
                    </div>
            </div>
            <div className="contenedor__imagen contenedor__imagen--2"></div>


        </div>





    );






}

export default Inicio;