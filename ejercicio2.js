// Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta (debes presuponer que la frase tiene un único espacio entre palabras).

var frase = prompt("Indica una frase:");
var espacio = " ";
var cont = 0;
var palabras;

for(let i = 0; i < frase.length; i++){
    if(frase[i] == espacio){
        cont++;
    }
}

palabras = cont + 1;
console.log(palabras);