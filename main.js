// Iniziate creando un file main.js con un semplice console.log che dica hello node js

// fate girare lo script usando node main.js

// aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666

// usate il modulo process per recuperare e stampare in console dalla proprietá env la variabile PIN

// ora passate un argomento al vostro script e recuperatene il valore usando process e la proprietá argv per stamparlo in console

console.log('hello node js');

const pin = process.env.PIN;
console.log(pin);

const argomento = process.argv.slice(2);
console.log(argomento);

if (argomento === "admin" && pin === "23") {
  console.log("Welcome Admin");
} else {
  console.log("Access restricted");
}