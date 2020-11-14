//inicio
//Declarar variables
let semana;
let mes;
let sueldo;
let dinero;
let ano;

dinero = Number(prompt("Ingrese cuanto es el Sueldo ") );
semana = Semana (dinero);
mes = 4* semana;
ano = 12*mes;

alert("ahorro al año: " + ano);
alert("cada semana ahorra 15% " + semana);
document.write ("total ahorrado: " + año)

//funciones
function Semana (dinero){
    semana = dinero*0.15;
    return semana
}