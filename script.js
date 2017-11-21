// variables
var palabra0=[];
var condicion=true;
var intentos=0;
var aciertos=0;
var arraypalabras=["baloncesto", "futbol", "tenis", "boxeo", "padel"];
// letra aleatoria
var letraAleatoria=Math.floor(Math.random()*(arraypalabras.length));
var adivinar = arraypalabras[letraAleatoria];
var rendicion="FIN";
var comodin="COMODIN";

console.log(arraypalabras);
console.log(adivinar);


var salirBucle=false;
var acertado=false;



// Pedimos al usuario el numero de intentos
var intentosusuario = numeroIntentos=prompt("Dime los intentos que desea tener 5-10");
  if (isNaN(numeroIntentos)) {
    alert("Error, di un numero");
  }
// Comprbamos e numero de intentos introducido
while (intentos < numeroIntentos && aciertos<adivinar.length) {
  condicion=true;
  // ------
  if (intentosusuario<5) {
   alert("Error, minimo 5 intentos");
  }else if (intentosusuario>10) {
   alert("Error, maximo 10 intentos");
  }
  intentos--;



// Pedimos al usuario una letra
  var letrausuario =prompt("Dame una letra de la a-z");
// Comprbamos que la letra no es un numero
      if (isNaN(letrausuario)) {
        condicion=false;
      } else {
          var letrausuario = prompt("Error, introduce una letra",);
          condicion=true;
        }

  var acertado=false;


// Cambiamos la letra por un numero en la cadena --empieza por 0--
 for (var i = 0; i < adivinar.length; i++) {
    if (adivinar.charAt(i)==letrausuario) {
      palabra0[i]=adivinar.charAt(i);
      acertado=true;
      aciertos++;
      console.log(aciertos);
    }
   }

   // Condicion para saber si fallas o aciertas
    if (acertado==true) {
      alert("Has acertado, letra encontrada");
      } else {
        alert("Has fallado, letra no encontrada");
        intentos++;
    }
  // numero de aciertos es igual q la longitud d la variable adiviar
    if (aciertos==adivinar.length) {
        alert("HAS GANADO");
        salirBucle=true
      }
    acertado=false;

    if (letrausuario==rendicion) {
      alert("GAME OVER");
      exit();
    }
    if(letrausuario==comodin) {
      alert("NO HAY COMODIN EN EL MODO EXPERTO")
    }

  }
