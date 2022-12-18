//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//funcion de counter
function SecondsCounter(props){
return ( 
    <div className="contador">
    <div className="clock">
    <i className="far fa-clock"></i>
    </div>
    <div className="decimalUno ">0</div>
    <div className="decimalDos">0</div>
    <div className="decimalTres">0</div>
    <div className="decimalCuatro">0</div>
    </div>

);
};


/*let counter= 0;
function contar(){
    const uno = counter ++;
    const dos = counter ++ ;
    const tres = counter ++;
    const cuatro = counter ++;
counter++
}, 1000*/


//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
