export function szinAllitas(event){
    $(event.target).toggleClass("sarga")
}

export function lamparaKattint(lista){
    const LAMPAK = $(".lampa")
    LAMPAK.on("click", szinAllitas)
}

export function randomizalo(){
    var lampakAllapota= [false, false, false,false, false, false,false, false, false];
    for (let index = 0; index < 8; index++) {
        lampakAllapota[index] = (Math.random()*101-1) <= 20;
    }
    return lampakAllapota;
}

export function lampakSzama(lista){
    let db = 0
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] == false){
            db++
        }
    }
    const LEKAPCSOLTAKSZAMA = $("#lampaSzam")
    LEKAPCSOLTAKSZAMA.append(db)
}


export function jatekKezdes(lista){
    const lampak = document.querySelectorAll(".lampa");
    for (let index = 0; index < lista.length; index++) {
        if (lista[index]) {
            szinAllitas(lampak[index]);
        }
    }
}