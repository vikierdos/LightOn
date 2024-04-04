var lista = randomizalo();
$(document).ready(jatekKezdes);


function szinAllitas(ELEM){
    ELEM.toggleClass("sarga")
}

function lamparaKattint(lista){
    
}

function randomizalo(){
    var lampakAllapota= [false, false, false,false, false, false,false, false, false];
    for (let index = 0; index < 8; index++) {
        lampakAllapota[index] = (Math.random()*101-1) <= 20;
    }
    return lampakAllapota;
}

function jatekKezdes(lista){
    const lampak = document.querySelectorAll(".lampa");
    for (let index = 0; index < lista.length; index++) {
        if (lista[index]) {
            szinAllitas(lampak[index]);
        }
        
    }
}