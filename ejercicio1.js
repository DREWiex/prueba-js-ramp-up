// Solicita al usuario que elija entre la opción 1 o 2:
// Opción 1: Se le debe pedir dos números al usuario e indicar si son impares y múltiplos de 25 ambos, uno de ellos o ninguno.
// Opción 2: Se le debe pedir una palabra y comprobar si empieza o termina por s/S
const op1 = 1;
const op2 = 2;

var choice = prompt("Elige un número entre 1 y 2:");

// opción 1

// si la última posición del número termina en 0, 2, 4, 6 o 8 = nro. par
// si la última posición del número termina en 1, 3, 5, 7 o 9 = nro. impar

var num;
var par = [0,2,4,6,8];
var impar = [1,3,5,7,9];

if(choice == op1){
    num = prompt("Ahora indica dos números distintos:");
}


// opción 2

const sMinus = "s";
const sMayus = "S";

if(choice == op2){
    var palabra = prompt("Ahora indica una palabra:");
    
    if(palabra[0] == sMinus || palabra[0] == sMayus){
        alert("Tu palabra empieza por s/S.");
    }else{
        alert("Tu palabra no empieza por s/S.");
    }
    if(palabra.length-1 == sMinus || palabra.length-1 == sMayus){
        alert("Tu palabra termina en s/S.");
    }else{
        alert("Tu palabra no termina en s/S.");
    }
}