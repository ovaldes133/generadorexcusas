let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function generadorexcusa(who, what, when){
    excusa1 = Math.floor(Math.random() * who.length);
    excusa2 = Math.floor(Math.random() * what.length);
    excusa3 = Math.floor(Math.random() * when.length);
    return who[excusa1] + " " + what[excusa2] + " " + when[excusa3];
}

function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = generadorexcusa(who, what, when);
}
window.onload = onLoad;


