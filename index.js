var lista = randomizalo();

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