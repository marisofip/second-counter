//import react into the bundle
import { number } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'


// include your styles into the webpack bundle
import "../styles/index.css";

//funcion de counter
function SecondsCounter(props){
    return ( 
    <div className="contador">
    <div className="clock">
    <i className="far fa-clock"></i>
    </div>
    <div className="cuatro">{props.decimalCuatro % 10} </div>
    <div className="tres">{props.decimalTres % 10} </div>
    <div className="dos">{props.decimalDos % 10} </div>
    <div className="uno">{props.decimalUno % 10} </div>
    </div>

);
}

SecondsCounter.prototype ={
    decimalCuatro: PropTypes.number,
    decimalTres : PropTypes.number,
    decimalDos: PropTypes.number,
    decimalUno : PropTypes.number
};

let initial = 0; 
setInterval(function(){

    const cuatro = Math.floor(initial/1000);
    const tres = Math.floor(initial/100);
    const dos= Math.floor(initial/10);
    const uno = Math.floor(initial/1);
//console.log (uno, dos, tres, cuatro);
    initial++; 

    //render your react application
    ReactDOM.render(<SecondsCounter 
        decimalUno={uno} decimalDos={dos}  decimalTres={tres} decimalCuatro={cuatro} />, 
        document.querySelector("#app"));
    }, 1000);


