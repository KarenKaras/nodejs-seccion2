console.log ('Inicio de programa'); //1

setTimeout(function(){
    console.log("Primer Timeout");
}, 3000);

setTimeout(function(){
    console.log("Segundo Timeout");
}, 0);


setTimeout(function(){
    console.log("Tercer timeout");
}, 0);

console.log ('Fin de programa'); //1