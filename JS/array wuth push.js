function lable(spice) {
    let label = document.createElement('label');
    label.innerText = spice + '\n';
    document.body.appendChild(label);
}

function sliceexample() {

    phones = ["Samsung", "Apple", "MI", "Realme", "Oneplus"];

    phones.pop();
    let x = 0;
    while (x <= phones.length) {
        lable(phones[x]);
    }

}


