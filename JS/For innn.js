// for of
function agera(x) {
    let label = document.createElement('label');

    label.innerText = x + '\n';

    // label.id = "lbl" + x;

    document.body.appendChild(label);
}

function Chiron() {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let x of month) {
        agera(x);
    }
}  
   

function dakar(){
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
    for ( let x in day) {
        agera(x);
    }
}

function jesko(){
    let names = { company: "bugatti", model: "chiron", color: "blue" };
    for (let x in names) {
       agera (x);
    }
}
